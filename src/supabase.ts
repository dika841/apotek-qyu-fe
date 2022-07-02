import { createClient } from "@supabase/supabase-js";

const supabaseUrl= 'https://ufhfuefrbbkmzvbrbjox.supabase.co';
const supabaseAnonKey= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmaGZ1ZWZyYmJrbXp2YnJiam94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY3NTUzNTcsImV4cCI6MTk3MjMzMTM1N30.7zo4_NZqJnuD3rw4tGRbW497XudgfKU6uTopfy2aQXo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);