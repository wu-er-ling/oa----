import React from 'react'
import './PersonalPortal.scss'
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';

export default function PersonalPortal() {
  return(
    <div className='PersonalPortal'>
      <div className='personal-information'>
        <Link className='word' to={''}></Link>
        <Avatar className='Avatar' size={64} icon={<UserOutlined />} />
        <span>张三  | 技术经理</span>
        <span>联系电话：XXXXXXXXXXX 邮箱：XXXXX@gmail.com</span>
      </div>
    </div>
  )
}
