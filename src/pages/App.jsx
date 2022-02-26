import React from 'react'
import { Layout, Menu, Button } from 'antd'
import { HomeFilled, LoginOutlined, UserOutlined } from '@ant-design/icons'
import { Outlet, useNavigate } from 'react-router-dom'

import '@/styles/App.less'

const { Header, Content } = Layout;

const App = () => {
  const navigate = useNavigate();
  const handleMenuClick = event => navigate(event.key);

  return <Layout>
    <Header>
      <Menu mode='horizontal' defaultSelectedKeys={['1']} onClick={handleMenuClick}>
        <Menu.Item key=''><HomeFilled /> Home</Menu.Item>
        <Menu.Item key='login'><LoginOutlined /> Login</Menu.Item>
        <Menu.Item key='user'><UserOutlined /> User</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  </Layout>
};

export default App;
