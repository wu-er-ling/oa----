import React from 'react';
import './Index.scss';
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import { Breadcrumb, Layout, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import permissionList from '../../utils/permission';
import _ from 'lodash';

const { Header, Content, Sider } = Layout;

export default function Index() {
  const infos = useSelector((state) => state.users.infos);
  const dispatch = useDispatch();
  const location = useLocation();

  if (location.pathname === '/') {
    return <Navigate to="/oa/home"></Navigate>;
  }

  let defaultSelectedKey = location.pathname;
  let defaultOpenKey = defaultSelectedKey.match(/\/[^/]+/)[0];

  const handleLogout = () => {
    dispatch({
      type: 'users/clearInfos'
    })
  }

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: '个人中心'
        },
        {
          key: '2',
          label: <span onClick={handleLogout}>退出登录</span>
        }
      ]}
    />
  );


  const role = infos && infos.user.role;
  const name = infos && infos.user.name;
  let items2 = _.cloneDeep(permissionList);
  items2 = items2.filter((v) => {
    v.children = v.children.filter((v) => v.auths.includes(role))
    return v.auths.includes(role)
  });

  let nowItem = items2.find((v) => v.key === defaultOpenKey);

  let breadcrumb1 = nowItem.label
  let breadcrumb2 = nowItem.children.find((v) => v.key === defaultSelectedKey).label;

  return (
    <Layout className='index'>
      <Header className="header">
        <h2>OA管理系统</h2>
        <Dropdown overlay={menu} arrow>
          <h3>
            {role}： {name}<DownOutlined />
          </h3>
        </Dropdown>
      </Header>
      <Layout className='main'>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={[defaultSelectedKey]}
            defaultOpenKeys={[defaultOpenKey]}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>{breadcrumb1}</Breadcrumb.Item>
            <Breadcrumb.Item>{breadcrumb2}</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="content"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
