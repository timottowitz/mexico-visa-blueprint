import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Initialize Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Get environment variables
const twilioSid = Deno.env.get('twilio_sid');
const twilioAuth = Deno.env.get('twilio_auth');
const airtableToken = Deno.env.get('airtable_personal_access_token');
const airtableBase = Deno.env.get('airtable_base');
const airtableTable = Deno.env.get('airtable_table');

serve(async (req) => {
  console.log('Handle contact submission function called');

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { submission_id, name, email, phone, message, service_type, preferred_contact } = await req.json();
    
    console.log('Processing submission:', { submission_id, name, email });

    // 1. Sync to Airtable
    if (airtableToken && airtableBase && airtableTable) {
      try {
        const airtableResponse = await fetch(`https://api.airtable.com/v0/${airtableBase}/${airtableTable}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${airtableToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: {
              'Name': name,
              'Email': email,
              'Phone': phone || '',
              'Message': message,
              'Service Type': service_type || '',
              'Preferred Contact': preferred_contact || 'email',
              'Submission Date': new Date().toISOString(),
            }
          }),
        });

        if (airtableResponse.ok) {
          console.log('Successfully synced to Airtable');
          
          // Update Supabase record
          await supabase
            .from('contact_submissions')
            .update({ synced_to_airtable: true })
            .eq('id', submission_id);
        } else {
          console.error('Failed to sync to Airtable:', await airtableResponse.text());
        }
      } catch (error) {
        console.error('Error syncing to Airtable:', error);
      }
    }

    // 2. Send WhatsApp notification via Twilio
    if (twilioSid && twilioAuth) {
      try {
        const whatsappMessage = `🚨 New Contact Form Submission

👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone || 'Not provided'}
🏢 Service: ${service_type || 'Not specified'}
💬 Preferred Contact: ${preferred_contact}

Message:
${message}

Submitted: ${new Date().toLocaleString()}`;

        const twilioResponse = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`, {
          method: 'POST',
          headers: {
            'Authorization': `Basic ${btoa(`${twilioSid}:${twilioAuth}`)}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            'From': 'whatsapp:+14155238886', // Twilio Sandbox number
            'To': 'whatsapp:+1YOUR_PHONE_NUMBER', // Replace with your WhatsApp number
            'Body': whatsappMessage,
          }),
        });

        if (twilioResponse.ok) {
          console.log('Successfully sent WhatsApp notification');
          
          // Update Supabase record
          await supabase
            .from('contact_submissions')
            .update({ notification_sent: true })
            .eq('id', submission_id);
        } else {
          console.error('Failed to send WhatsApp notification:', await twilioResponse.text());
        }
      } catch (error) {
        console.error('Error sending WhatsApp notification:', error);
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in handle-contact-submission function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});