import create from 'zustand'
import supabase, { user } from '@/stores/supabase'

const TABLE_NAME = 'groups'

const useGroupStore = create((set, get) => ({
  loading: true,
  group: {},
  setGroup: (group) => set({ group: group, loading: false }),
  fetchGroup: () => {
    set({ loading: true });
    supabase.from(TABLE_NAME).select().eq('user_id', user.id).limit(1).single().then(({ data, error }) => {
      set({ group: data  || {}, loading: false })
    })
  }
}))

export default useGroupStore;
