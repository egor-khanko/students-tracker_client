import React from 'react'
import { Card, Row, Col } from 'antd'
import StudentsListCard from '@/components/StudentsListCard'

const Home = () => {
  return <Row gutter={[8, 8]}>
    <Col span={12} >
      <StudentsListCard />
    </Col>

    <Col span={12} />
    <Col span={12} />
  </Row>
}

export default Home;
