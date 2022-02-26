import create from 'zustand'
import supabase from '@/stores/supabase'

const useCommonStore = create((set, get) => ({
  loading: true,
  group: {},
  setGroup: (group) => set({ group: group, loading: false }),
  initialFetch: () => {
    return supabase.from('groups').select(`*, students:students(*)`).limit(1).single()
  }
}))

export default useCommonStore;
