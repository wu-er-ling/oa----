import { Outlet, Link, Navigate } from 'react-router-dom' 
import { Layout, Menu } from 'antd';
import React from 'react';
const { Header, Content, Sider } = Layout;


export default function Index() {
  return (
    <Layout className='HEADER'>
      <Header className="header">
        <div className="logo" />
        <h1 style={{ color: 'white', float: 'left',marginRight: '50px',  fontWeight: 'bold'}}>员工中心</h1>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={[
           
            {
              key: '1',
              label: '门户'
            },
            {
              key: '2',
              label: '会议'
            },
            {
              key: '3',
              label: '资产'
            },
            {
              key: '4',
              label: '报销'
            },
            {
              key: '5',
              label: '名片制作'
            },
            {
              key: '6',
              label: <Link to="/index">考勤</Link>
            },
            {
              key: '7',
              label: '常用'
            },
        ]} />
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
      <Layout
        className="site-layout-background"
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
                  label: <Link to="/index/attendance/settings">考勤设置</Link>
                },
                {
                  key: '2',
                  label: <Link to="/index/scheduling/plan">排班计划</Link>
                },
                {
                  key: '3',
                  label: <Link to="/index/attendance/grouping">考勤分组</Link>
                },
                {
                  key: '4',
                  label: <Link to="/index/attendance/record">考勤记录</Link>
                },
                {
                  key: '5',
                  label: <Link to="/index/attendance/statistics">考勤统计</Link>
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
