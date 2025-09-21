-- Enable extensions needed for HTTP requests
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Grant usage on net schema
GRANT USAGE ON SCHEMA net TO postgres, anon, authenticated, service_role;