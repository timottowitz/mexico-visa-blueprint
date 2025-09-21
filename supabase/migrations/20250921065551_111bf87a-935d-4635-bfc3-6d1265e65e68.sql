-- Create table for contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  service_type TEXT,
  preferred_contact TEXT DEFAULT 'email',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  synced_to_airtable BOOLEAN DEFAULT false,
  notification_sent BOOLEAN DEFAULT false
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public form)
CREATE POLICY "Anyone can submit contact forms" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admin access (if needed later)
CREATE POLICY "Service role can read all submissions" 
ON public.contact_submissions 
FOR ALL 
USING (current_setting('role') = 'service_role');

-- Create function to handle new submission notifications
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
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to call the function after insert
CREATE TRIGGER on_contact_submission_created
  AFTER INSERT ON public.contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_contact_submission();