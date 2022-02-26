import { createClient } from '@supabase/supabase-js'

const publicAnonKey = import.meta.env.VITE_PUBLIC_ANON_KEY
const projectUrl = import.meta.env.VITE_PROJECT_URL
const supabase = createClient(projectUrl, publicAnonKey)

export const user = supabase.auth.user()

export default supabase;
