import React from 'react'
import { Card, Image, Typography, Avatar } from 'antd'
import supabase from '@/stores/supabase'
import '@/styles/User.less'

const { Meta } = Card;

const User = () => {
  const user = supabase.auth.user().user_metadata
  console.log(user)
  return <Card>
    <Meta
      avatar={<Avatar src={user.picture} />}
      title={user.full_name}
      description={user.email}
    />
  </ Card>
}

export default User;
