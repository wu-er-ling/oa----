import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from "@ant-design/icons"
import { Link } from 'react-router-dom'

// 现在这个权限列表是写死的，那么公司里权限列表是要存储到数据库中，通过前端的操作，会动态改变权限列表
let permissionList = [
  {
    key: '/oa',
    icon: <UserOutlined />,
    label: 'OA系统',
    auths: ['管理员', '经理', '员工'],
    children: [
      {
        key: '/oa/home',
        label: <Link to="/oa/home">后台首页</Link>,
        auths: ['管理员', '经理', '员工']
      }
    ]
  },
  {
    key: '/users',
    icon: <LaptopOutlined />,
    label: '用户管理',
    auths: ['管理员'],
    children: [
      {
        key: '/users/list',
        label: <Link to="/users/list">用户列表</Link>,
        auths: ['管理员']
      }
    ]
  },
  {
    key: '/check',
    icon: <NotificationOutlined />,
    label: '考勤管理',
    auths: ['经理', '员工'],
    children: [
      {
        key: '/check/list',
        label: <Link to="/check/list">我的考勤</Link>,
        auths: ['经理', '员工']
      },
      {
        key: '/check/change',
        label: <Link to="/check/change">我的审批</Link>,
        auths: ['经理']
      },
      {
        key: '/check/add',
        label: <Link to="/check/add">请假加班</Link>,
        auths: ['员工']
      }
    ]
  }
];

export default permissionList;