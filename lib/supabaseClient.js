// filepath: d:\project\nextProject\rentalApp\rental-app\lib\supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
console.log('check',supabaseKey)

export const supabase = createClient(supabaseUrl, supabaseKey);