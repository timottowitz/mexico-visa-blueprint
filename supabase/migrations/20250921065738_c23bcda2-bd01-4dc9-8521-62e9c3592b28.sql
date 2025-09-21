-- Fix function search path security issue
CREATE OR REPLACE FUNCTION public.handle_new_contact_submission()
RETURNS TRIGGER AS $$
BEGIN
  -- Call edge function to handle Airtable sync and Twilio notification
  PERFORM net.http_post(
    url := 'https://nvcswkvuomgiyokjbvii.supabase.co/functions/v1/handle-contact-submission',
    headers := '{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52Y3N3a3Z1b21naXlva2pidmlpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODQzNzE5MCwiZXhwIjoyMDc0MDEzMTkwfQ.jmBrfgE9dUNcHPgVEJFPEOx6pkGLQJDRsL12vWKr-Z0"}'::jsonb,
    body := json_build_object(
      'submission_id', NEW.id,
      'name', NEW.name,
      'email', NEW.email,
      'phone', NEW.phone,
      'message', NEW.message,
      'service_type', NEW.service_type,
      'preferred_contact', NEW.preferred_contact
    )::text
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;