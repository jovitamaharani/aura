import { createClient } from '@supabase/supabase-js'

export const useSupabaseServer = () => {
  const config = useRuntimeConfig()
  return createClient(config.supabaseUrl, config.supabaseKey)
}