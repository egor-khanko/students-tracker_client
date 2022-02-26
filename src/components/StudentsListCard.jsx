import React, { useState } from 'react'
import { Card, List, Button } from 'antd'
import { UserAddOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { useGroupStore, useStudentsStore } from '@/stores/index'
import CreateStudentModal from '@/components/modals/CreateStudent'
import EditStudentModal from '@/components/modals/EditStudent'

const StudentsListCard = () => {
  const studentsStore = useStudentsStore((store) => store)

  const createModalVisibleState = useState(false);
  const [createModalVisible, setCreateModalVisible] = createModalVisibleState

  const editModalVisibleState = useState(false);
  const [editModalVisible, setEditModalVisible] = editModalVisibleState
  const [currentEditedStudent, setCurrentEditedStudent] = useState(null)

  const deleteStudent = (student) => studentsStore.deleteStudent(student)

  const cardExtra = <Button onClick={() => setCreateModalVisible(!createModalVisible)} icon={<UserAddOutlined />}>Add Student</Button>

  const deleteStudentButton = (student) => {
    return <Button type='danger' onClick={() => deleteStudent(student)} icon={<DeleteOutlined />} />
  }
  const editStudentButton = (student) => {
    return <Button type='primary' icon={<EditOutlined />}
             onClick={() => {setCurrentEditedStudent(student); setEditModalVisible(!editModalVisible)}} />
  }

  return <Card title='Groups students' loading={studentsStore.loading} extra={cardExtra}>
    <CreateStudentModal visibleState={createModalVisibleState} />
    <EditStudentModal visibleState={editModalVisibleState} student={currentEditedStudent} />
    <List
      itemLayout='horizontal'
      dataSource={studentsStore.students}
      renderItem={student => (
        <List.Item actions={[deleteStudentButton(student), editStudentButton(student)]}>
          <List.Item.Meta title={student.name} />
        </List.Item>
      )}/>
  </Card>
}

export default StudentsListCard;
