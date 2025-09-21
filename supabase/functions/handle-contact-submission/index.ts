import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Initialize Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
)

interface ContactSubmission {
  submission_id: string
  name: string
  email: string
  phone?: string
  message: string
  service_type?: string
  preferred_contact?: string
}

async function syncToAirtable(submission: ContactSubmission) {
  const airtableToken = Deno.env.get('airtable_personal_access_token')
  const airtableBase = Deno.env.get('airtable_base')
  const airtableTable = Deno.env.get('airtable_table')

  if (!airtableToken || !airtableBase || !airtableTable) {
    console.error('Missing Airtable configuration')
    return false
  }

  try {
    const airtableUrl = `https://api.airtable.com/v0/${airtableBase}/${airtableTable}`
    
    const response = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${airtableToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        records: [{
          fields: {
            'Name': submission.name,
            'Email': submission.email,
            'Phone': submission.phone || '',
            'Message': submission.message,
            'Service Type': submission.service_type || '',
            'Preferred Contact': submission.preferred_contact || 'email',
            'Submission Date': new Date().toISOString()
          }
        }]
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Airtable sync failed:', errorText)
      return false
    }

    console.log('Successfully synced to Airtable')
    return true
  } catch (error) {
    console.error('Error syncing to Airtable:', error)
    return false
  }
}

async function sendWhatsAppNotification(submission: ContactSubmission) {
  const twilioSid = Deno.env.get('twilio_sid')
  const twilioAuth = Deno.env.get('twilio_auth')

  if (!twilioSid || !twilioAuth) {
    console.error('Missing Twilio configuration')
    return false
  }

  try {
    const message = `🚨 New Contact Form Submission:
    
👤 Name: ${submission.name}
📧 Email: ${submission.email}
📱 Phone: ${submission.phone || 'Not provided'}
🏢 Service: ${submission.service_type || 'Not specified'}
💬 Preferred Contact: ${submission.preferred_contact || 'email'}

📝 Message:
${submission.message}

Submission ID: ${submission.submission_id}`

    const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`
    
    const formData = new URLSearchParams()
    formData.append('From', 'whatsapp:+14155238886') // Twilio sandbox number
    formData.append('To', 'whatsapp:+523222787690') // Your WhatsApp number
    formData.append('Body', message)

    const response = await fetch(twilioUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`${twilioSid}:${twilioAuth}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Twilio notification failed:', errorText)
      return false
    }

    console.log('Successfully sent WhatsApp notification')
    return true
  } catch (error) {
    console.error('Error sending WhatsApp notification:', error)
    return false
  }
}

async function updateSubmissionStatus(submissionId: string, airtableSynced: boolean, notificationSent: boolean) {
  try {
    const { error } = await supabase
      .from('contact_submissions')
      .update({
        synced_to_airtable: airtableSynced,
        notification_sent: notificationSent
      })
      .eq('id', submissionId)

    if (error) {
      console.error('Error updating submission status:', error)
    }
  } catch (error) {
    console.error('Error updating submission status:', error)
  }
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const submission: ContactSubmission = await req.json()
    
    console.log('Processing contact submission:', submission.submission_id)

    // Sync to Airtable
    const airtableSynced = await syncToAirtable(submission)
    
    // Send WhatsApp notification
    const notificationSent = await sendWhatsAppNotification(submission)
    
    // Update submission status in Supabase
    await updateSubmissionStatus(submission.submission_id, airtableSynced, notificationSent)

    return new Response(
      JSON.stringify({ 
        success: true,
        airtable_synced: airtableSynced,
        notification_sent: notificationSent
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      }
    )
  } catch (error) {
    console.error('Error processing contact submission:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Failed to process submission',
        details: error.message
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    )
  }
})