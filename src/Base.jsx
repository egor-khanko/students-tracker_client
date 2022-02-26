import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import omit from 'lodash/omit'
import { App, Home, Login, User } from '@/pages/index'
import { useCommonStore, useGroupStore, useStudentsStore } from '@/stores/index'

const Base = () => {
  const setStudents = useStudentsStore(store => store.setStudents)
  const setGroup = useGroupStore(store => store.setGroup)
  const commonStore = useCommonStore(store => store)

  useEffect(() => {
    commonStore.initialFetch().then(({ data, error }) => {
      setStudents(data.students)
      setGroup(omit(data, ['students']))
    })
  }, [])

  return <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='user' element={<User />} />
    </Route>
  </Routes>
}

export default Base;
