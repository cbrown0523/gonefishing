import { createClient } from "@supabase/supabase-js";

const URL = "https://qtnvcpdeeovcffbibyot.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0bnZjcGRlZW92Y2ZmYmlieW90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExMDA1NTAsImV4cCI6MTk5NjY3NjU1MH0.-HIrg_DLJjsIVuVX77e_B2qp37IquPjhpa6Wb-dvZ6Y";
export const supabase = createClient(URL, API_KEY);
