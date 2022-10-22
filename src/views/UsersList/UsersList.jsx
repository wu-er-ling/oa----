import React, { useState, useEffect } from 'react'
import './UsersList.scss'
import { Button, Table, Modal, Form, Input, Select, Space, message, Popconfirm } from 'antd'
import { PlusCircleOutlined } from "@ant-design/icons"
import { register, getUsers , deleteUsers } from '../../api/users'

export default function UsersList() {
  const [size] = useState(15);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    getUsers().then((res) => {
      res.data.forEach((v) => {
        v.key = v.id
      });
      setDataSource(res.data)
    })
  }, [])

  const { Option } = Select;
  const confirm = (id) => {
    return () => {
      deleteUsers(id).then(() => {
        message.success('删除成功');
        let cloneDataSource = [...dataSource];
        setDataSource(cloneDataSource.filter((v)=> v.id !== id))
      }).catch(() => {
        message.error('删除失败');
      })
    }
  }
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '职位',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: '操作',
      dataIndex: 'state',
      key: 'state',
      render: (_, { role, id }) => (
        <Space>
          <Button type='primary' disabled={role === '管理员' ? true : false}>编辑</Button>
          <Popconfirm
            placement="bottom"
            title='确定是否删除'
            onConfirm={confirm(id)}
            okText="确定"
            cancelText="取消"
            disabled={role === '管理员' ? true : false}
          >
            <Button danger disabled={role === '管理员' ? true : false}>删除</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const handleModalOpen = () => {
    setIsModalOpen(true);
  }
  const onFinish = (values) => {
    values.password = values.email.split('@')[0];
    register(values).then((res) => {
      message.success('添加成功');
      res.data.user.key = res.data.user.id;
      setDataSource([...dataSource , res.data.user]);
      setIsModalOpen(false);
    }).catch(() => {
      message.error('重复添加')
    })
  };

  const onFinishFailed = () => { };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleReset = () => {
    form.resetFields();
  }

  return (
    <div className='UsersList'>
      <div className='addUserButton' >
        <Button onClick={handleModalOpen} type='primary' icon={<PlusCircleOutlined />}>添加用户</Button>
      </div>
      <Table className='userTable' dataSource={dataSource}
        columns={columns} bordered pagination={{defaultPageSize:4}} />
      <Modal className='UsersListModal' title="添加用户" open={isModalOpen} onCancel={handleCancel} transitionName="" footer={null}>
        <Form
          name="basic"
          form={form}
          labelCol={{
            span: 3,
          }}
          wrapperCol={{
            span: 20,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="用户"
            name="name"
            rules={[
              {
                required: true,
                message: '请输入用户名'
              }
            ]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            label="邮箱"
            name="email"
            rules={[
              {
                required: true,
                message: '请输入邮箱地址'
              },
              {
                type: 'email',
                message: '请输入正确邮箱'
              }
            ]}
          >
            <Input placeholder="请输入邮箱地址" />
          </Form.Item>
          <Form.Item
            label="职位"
            name="role"
            rules={[
              {
                required: true,
                message: '请选择职位',
              },
            ]}
          >
            <Select placeholder="请选择职位">
              <Option value='经理'>经理</Option>
              <Option value='员工'>员工</Option>
            </Select>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 24,
            }}
            className='FormButton'
          >
            <Space size={size}>
              <Button onClick={handleReset}>
                重置
              </Button>
              <Button type="primary" htmlType="submit">
                确认
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
