import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://bcspqfvivqteafpchjkp.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)