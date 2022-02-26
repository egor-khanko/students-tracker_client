import React, { useEffect } from 'react'
import { Modal, Form, Input } from 'antd'
import { useStudentsStore } from '@/stores/index'

const EditStudentModal = ({ visibleState, student }) => {
  const [visible, setVisible] = visibleState
  const [form] = Form.useForm()

  const updateStudent = useStudentsStore(store => store.updateStudent)

  const onFinish = (_student) => {
    updateStudent({ ...student, ..._student })
    setVisible(!visible)
  }

  useEffect(() => {
    student && form.setFieldsValue({ name: student.name })
  }, [student])

  const modalOptions = {
     title: 'Edit student',
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

export default EditStudentModal;
