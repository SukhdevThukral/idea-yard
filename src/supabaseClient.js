import { createClient } from "@supabase/supabase-js";
const supabaseURL = process.env.REACT_APP_SUPABASE_URL;
const supbaseKey = process.env.REACT_APP_SUPABASE_KEY;
export const supabase = createClient(supabaseURL, supbaseKey);