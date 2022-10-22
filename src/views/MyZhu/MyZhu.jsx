
import { Outlet, Link, useLocation, Navigate } from 'react-router-dom' 
import { Layout, Menu } from 'antd';
import React from 'react';
const { Content, Sider } = Layout;


export default function Index() {

  const location = useLocation();
  if(location.pathname === '/my/zhu'){
    return <Navigate to='administration'></Navigate>
  }
  
  let defaultSelectedKey = location.pathname
  return (
    <div className='all'>
      <Layout>
        <Content
          style={{
            padding: '0',
            height:'calc(100vh - 113px)'
          }}
          className="main"
        >
        <Layout
        
        style={{
          
        }}
      >
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={[defaultSelectedKey]}
            style={{
              height:'calc(100vh - 113px)',
              
            }}
            items={[
                {
                  key: '/my/zhu/administration',
                  label: <Link to="/my/zhu/administration">资产管理</Link>
                },
                {
                  key: '/my/zhu/property/fenlei',
                  label: <Link to="/my/zhu/property/fenlei">资产分类</Link>
                },
                {
                  key: '/my/zhu/my/property',
                  label: <Link to="/my/zhu/my/property">我的资产</Link>
                },
                {
                  key: '/my/zhu/property/shen',
                  label: <Link to="/my/zhu/property/shen">资产申请</Link>
                },
                {
                  key: '/my/zhu/my/shen',
                  label: <Link to="/my/zhu/my/shen">我的申请</Link>
                },
                {
                  key: '/my/zhu/my/relevant',
                  label: <Link to="/my/zhu/my/relevant">与我相关</Link>
                },
                {
                  key: '/my/zhu/my/chuli',
                  label: <Link to="/my/zhu/my/chuli">待我处理</Link>
                },
                {
                  key: '/my/zhu/dai/shen',
                  label: <Link to="/my/zhu/dai/shen">待我审批</Link>
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