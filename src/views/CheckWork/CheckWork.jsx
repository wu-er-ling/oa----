import { Outlet, Link, Navigate } from 'react-router-dom' 
import { Layout, Menu } from 'antd';
import React from 'react';
const { Header, Content, Sider } = Layout;


export default function Index() {
  return (
    <Layout className='HEADER'>
      
      <Content
        style={{
          padding: '0 50px',
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
            defaultSelectedKeys={['1']}
            style={{
              height: '100%',
            }}
            items={[
                {
                  key: '1',
                  label: <Link to="/check/Work/attendance/settings">考勤设置</Link>
                },
                {
                  key: '2',
                  label: <Link to="/check/Work/scheduling/plan">排班计划</Link>
                },
                {
                  key: '3',
                  label: <Link to="/check/Work/attendance/grouping">考勤分组</Link>
                },
                {
                  key: '4',
                  label: <Link to="/check/Work/attendance/record">考勤记录</Link>
                },
                {
                  key: '5',
                  label: <Link to="/check/Work/attendance/statistics">考勤统计</Link>
                },
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
  )
}
