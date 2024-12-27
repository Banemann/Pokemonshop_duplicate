import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://wrhetxcakkaxpbixtyjx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyaGV0eGNha2theHBiaXh0eWp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3MzQ3OTcsImV4cCI6MjA0ODMxMDc5N30.GQiA_mZQMKYRy3QwfbVYVPbBLWjf-63NfY_HWmX3fTU';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
