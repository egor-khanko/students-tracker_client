import React from 'react'
import { Button, Card } from 'antd'
import { GoogleOutlined } from '@ant-design/icons'
import supabase from '@/stores/supabase'

const Login = () => {
  const loginWithGoogle = () => supabase.auth.signIn({provider: 'google'})

  return <Card>
    <Button icon={<GoogleOutlined/>} onClick={loginWithGoogle} >Log in with Google</Button>
  </Card>
}

export default Login;


// GtM9qNMDZuWeAPa
