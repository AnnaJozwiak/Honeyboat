import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzb2RsaWV1aWxsd3BncGJoY2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE1NjE2MjUsImV4cCI6MTk5NzEzNzYyNX0.5o79RsBkSs8c5cj149G3hzavTkOYqEsQv8y_uT-Teek";
const SUPABASE_URL ="https://qsodlieuillwpgpbhchj.supabase.co";

const supabase = createClient( SUPABASE_URL, SUPABASE_KEY);

export default supabase;