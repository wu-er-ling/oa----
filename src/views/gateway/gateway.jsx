import React from 'react'
import { Outlet, Link, useLocation, Navigate } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import './Gateway.scss'

const { Content, Sider } = Layout;
export default function Gateway() {
  const location = useLocation();
  if (location.pathname === '/gateway') {
    return <Navigate to="personal" />;
  }
  return (
    <div className='all'>
      <Layout>
        <Content
          style={{
            padding: '0 50px',
            height: 'calc(100vh - 113px)'
          }}
          className="main"
        >
          <Layout

            style={{
              padding: '24px 0',
            }}
          >
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['4']}
                style={{
                  height: '100%',
                }}
                items={[
                  {
                    key: '1',
                    label: <Link to="">集团门户</Link>
                  },
                  {
                    key: '2',
                    label: <Link to="">公司门户</Link>
                  },
                  {
                    key: '3',
                    label: <Link to="">部门门户</Link>
                  },
                  {
                    key: '4',
                    label: <Link to="/gateway/personal">个人门户</Link>
                  },
                  {
                    key: '5',
                    label: <Link to="">部门页面</Link>
                  },
                  {
                    key: '6',
                    label: <Link to="">个人页面</Link>
                  }
                ]}
              />
            </Sider>
            <Content
              style={{
                padding: '0 24px',

              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Content>
      </Layout>
    </div>
  )
}
