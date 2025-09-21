-- Add explicit SELECT policy to deny unauthorized access to contact submissions
-- This ensures that only the service role can read contact form data
CREATE POLICY "Only service role can read contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (current_setting('role'::text) = 'service_role'::text);

-- Add a comment to document the security rationale
COMMENT ON POLICY "Only service role can read contact submissions" ON public.contact_submissions 
IS 'Explicitly prevents unauthorized access to sensitive customer contact information. Only allows service role to read submissions for processing.';