import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
	throw new Error(
		"Set SUPABASE_URL and SUPABASE_KEY in .env.local before running mcparts."
	);
}

export const supabase = createClient(supabaseUrl, supabaseKey);
