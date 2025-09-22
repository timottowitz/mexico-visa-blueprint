import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Airtable contact submission function called');

    const { name, email, phone, message, service_type, preferred_contact } = await req.json();

    console.log('Received contact submission:', { name, email, service_type });

    // Get Airtable credentials from secrets
    const airtableToken = Deno.env.get('airtable_personal_access_token');
    const airtableBaseId = Deno.env.get('airtable_base');
    const airtableTableId = Deno.env.get('airtable_table');

    if (!airtableToken || !airtableBaseId || !airtableTableId) {
      console.error('Missing Airtable configuration');
      throw new Error('Airtable configuration is incomplete');
    }

    // Prepare Airtable record
    const airtableData = {
      fields: {
        'Name': name,
        'Email': email,
        'Phone': phone || '',
        'Message': message,
        'Service Type': service_type || '',
        'Preferred Contact': preferred_contact || 'email',
        'Submission Date': new Date().toISOString(),
        'Status': 'New'
      }
    };

    console.log('Sending data to Airtable:', airtableData);

    // Send to Airtable
    const airtableResponse = await fetch(`https://api.airtable.com/v0/${airtableBaseId}/${airtableTableId}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${airtableToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(airtableData),
    });

    if (!airtableResponse.ok) {
      const airtableError = await airtableResponse.text();
      console.error('Airtable API error:', airtableError);
      throw new Error(`Airtable API error: ${airtableResponse.status} - ${airtableError}`);
    }

    const airtableResult = await airtableResponse.json();
    console.log('Successfully created Airtable record:', airtableResult.id);

    // Optional: Send Twilio notification (if needed)
    const twilioSid = Deno.env.get('twilio_sid');
    const twilioAuth = Deno.env.get('twilio_auth');

    if (twilioSid && twilioAuth) {
      try {
        console.log('Sending Twilio notification');

        const twilioMessage = `New contact form submission from ${name} (${email}) for ${service_type || 'General Inquiry'}. Message: ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}`;

        const twilioResponse = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`, {
          method: 'POST',
          headers: {
            'Authorization': `Basic ${btoa(`${twilioSid}:${twilioAuth}`)}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            From: '+18449833342',
            To: '+12144734507',
            Body: twilioMessage,
          }),
        });

        if (twilioResponse.ok) {
          console.log('Twilio notification sent successfully');
        } else {
          console.error('Failed to send Twilio notification:', await twilioResponse.text());
        }
      } catch (twilioError) {
        console.error('Error sending Twilio notification:', twilioError);
        // Don't fail the whole request if Twilio fails
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact submission processed successfully',
        recordId: airtableResult.id 
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    );

  } catch (error) {
    console.error('Error processing contact submission:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Failed to process contact submission',
        error: error.message 
      }),
      { 
        status: 500, 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    );
  }
});