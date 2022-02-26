import React from 'react'
import { Modal, Form, Input } from 'antd'
import { useGroupStore, useStudentsStore } from '@/stores/index'

const CreateStudentModal = ({ visibleState }) => {
  const [visible, setVisible] = visibleState
  const group = useGroupStore(store => store.group)
  const createStudent = useStudentsStore(store => store.createStudent)

  const [form] = Form.useForm();
  const onFinish = (student) => {
    createStudent(group, student)
    setVisible(!visible)
  }

  const modalOptions = {
     title: 'Create student',
     visible: visible,
     onOk: () => form.submit(),
     onCancel: () => setVisible(!visible)
  }

  return <Modal {...modalOptions}>
    <Form form={form} onFinish={onFinish}>
      <Form.Item label='Student name' name='name'>
        <Input />
      </Form.Item>
    </Form>
  </Modal>
}

export default CreateStudentModal;
