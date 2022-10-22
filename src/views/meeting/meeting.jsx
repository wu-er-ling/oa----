import React from 'react'
import { Outlet, Link, useLocation, Navigate } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import './Meeting.scss'

const { Content, Sider } = Layout;
export default function Gateway() {
  const location = useLocation();
  if (location.pathname === '/meeting') {
    return <Navigate to="roomList" />;
  }
  return (
    <Layout className='meeting'>
      <Content>
        <Layout>
          <Sider className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              style={{
                height: '100%',
              }}
              items={[
                {
                  key: '1',
                  label: <Link to="">会议室列表</Link>
                },
                {
                  key: '2',
                  label: <Link to="">会议室预定</Link>
                },
                {
                  key: '3',
                  label: <Link to="">会议日历</Link>
                },
                {
                  key: '4',
                  label: <Link to="">全部会议</Link>
                },
                {
                  key: '5',
                  label: <Link to="">我的会议</Link>
                },
                {
                  key: '6',
                  label: <Link to="">与我相关</Link>
                }
              ]}
            />
          </Sider>
          <Content
            className='content'
            style={{
              padding: '0 24px',

            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
}
