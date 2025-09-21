-- Create extensions schema if it doesn't exist
CREATE SCHEMA IF NOT EXISTS extensions;

-- Move pg_net extension from public to extensions schema
ALTER EXTENSION pg_net SET SCHEMA extensions;

-- Grant necessary permissions to maintain functionality
GRANT USAGE ON SCHEMA extensions TO anon, authenticated, service_role;

-- Add comment explaining the security improvement
COMMENT ON SCHEMA extensions IS 'Schema for extensions to improve security by isolating them from public schema';