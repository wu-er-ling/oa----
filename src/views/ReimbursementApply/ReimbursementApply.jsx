import React from 'react'
import { Form, Input } from 'antd';

export default function ReimbursementApply() {

  const onFinish = () => {}
  const onFinishFailed = () => {}

  return (
    <div className='ReimbursementApply'>
      <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      >
        <Form.Item
          label="名称"
          name="username"
          rules={[
            {
              required: true,
              message: '请输入名称!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        </Form>
    </div>
  )
}
