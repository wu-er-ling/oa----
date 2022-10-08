
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
const { Header, Content, Footer, Sider } = Layout;

const items1 = ['门户', '会议', '资产'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2 = ['考勤设置', '排班计划', '考勤分组', '考勤记录', '考勤统计'].map((v) => {
  return { 
    label: v,  
  };
});


export default function Index() {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
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
            items={items2}
          />
        </Sider>
        <Content
          style={{
            padding: '0 24px',
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
  )
}
