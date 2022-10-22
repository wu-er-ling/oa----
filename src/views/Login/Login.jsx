import React from 'react'
import './Login.scss'
import { Button, Form, Input, message } from 'antd';
import { login } from '../../api/users';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    login(values).then((res) => {
      navigate('/');
      dispatch({
        type: 'users/updateInfos',
        payload: res.data
      })
      message.success('登陆成功');
    }).catch((res) => {
      message.error('登陆失败')
    })
  };

  const onFinishFailed = () => { };
  return (
    <div className='Login'>
      <Form
        name="basic"
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
          <Input />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: '密码不能为空',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 3,
            span: 20,
          }}
        >
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
