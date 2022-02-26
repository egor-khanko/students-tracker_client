import create from 'zustand'
import { message } from 'antd'
import { filter, omit, unionBy, sortBy } from 'lodash'
import supabase from '@/stores/supabase'

const TABLE_NAME = 'students'

let fromTable = () => supabase.from(TABLE_NAME)
let tableSelect = (attributeName, value) => fromTable().select().eq(`${attributeName}`, value)

const useStudentsStore = create((set, get) => ({
  loading: true,
  students: [],
  setStudents: (students) => set({ students: sortByName(students) || [], loading: false}),
  fetchStudents: (group) => {
    if (!group) return;
    set({ loading: true })
    tableSelect('group_id', group.id).then(({ data, error }) => {
      handleError(error)
      set({ students: sortByName(data) || [], loading: false })
  })},
  createStudent: (group, student) => {
    if (!group || !student) return
    student.group_id = group.id
    supabase.from(TABLE_NAME).insert([student]).then(({ data, error }) => {
      handleError(error, 'Student created!')
      set(store => ({ students: sortByName([...store.students, ...data]) }))
    })
  },
  updateStudent: (student) => {
    if (!student) return
    supabase.from(TABLE_NAME).update(omit(student, 'id')).eq('id', student.id).then(({ data, error }) => {
      handleError(error, 'Student info updated!')
      set(store => ({ students: sortByName(unionBy(data, store.students, (student) => student.id)) }))
    })
  },
  deleteStudent: (student) => {
    if (!student) return
    supabase.from(TABLE_NAME).delete().match({ id: student.id }).then(({ data, error }) => {
      handleError(error, 'Student deleted!')
      const studentId = data[0].id
      set(store => ({ students: sortByName(filter(store.students, student => student.id != studentId)) }))
    })
  }
}))

const sortByName = (students) => sortBy(students, (student) => student.name)

const handleError = (error, successMessage) => {
  if(!error) { message.success(successMessage); return}

  message.error('Something bad happened!')

}

export default useStudentsStore;
