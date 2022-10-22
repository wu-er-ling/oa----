import React from 'react'
import { Form, Input, Select, Button, Space, DatePicker, InputNumber } from 'antd';
import './ReimbursementApply.scss'
import locale from 'antd/es/date-picker/locale/zh_CN';
import moment from 'moment'

const { Option } = Select;

export default function ReimbursementApply() {

  const onFinish = (value) => {
    console.log(value);
    value.time = moment(value.time).format("YYYY-MM-DD hh:mm:ss")
    console.log(value.time);
  }
  const onFinishFailed = () => { }
  const onReset = () => { }

  return (
    <div className='ReimbursementApply'>
      <h3>报销申请</h3>
      <Form
        style={{}}
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
          <Input style={{ width: '400px' }} />
        </Form.Item>
        <Form.Item
          label="部门"
          name="bumen"
          rules={[
            {
              required: true,
              message: '请选择部门!',
            }
          ]}
        >
          <Select placeholder="请选择部门" style={{ width: '400px' }}>
            <Option value="销售部">销售部</Option>
            <Option value="采购部">采购部</Option>
            <Option value="行政部">行政部</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="类型"
          name="leixing"
          rules={[
            {
              required: true,
              message: '请选择类型!',
            }
          ]}
        >
          <Select placeholder="请选择类型" style={{ width: '400px' }}>
            <Option value="无">无</Option>
            <Option value="客户支出">客户支出</Option>
            <Option value="项目支出">项目支出</Option>
            <Option value="合同支出">合同支出</Option>
            <Option value="订单支出">订单支出</Option>
            <Option value="其他">其他</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="日期"
          name="time"
          rules={[
            {
              required: true,
              message: '请选择日期!',
            }
          ]}
        >
          <DatePicker placeholder="请选择日期" style={{ width: '400px' }} locale={locale} />
        </Form.Item>
        <Form.Item
          label="相关人员"
          name="person"
          rules={[
            {
              required: true,
              message: '请选择相关人员!',
            }
          ]}
        >
          <Select placeholder="请选择相关人员" style={{ width: '400px' }}>
            <Option value="张三">张三</Option>
            <Option value="李四">李四</Option>
            <Option value="王五">王五</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="金额"
          name="price"
          rules={[
            {
              required: true,
              message: '请输入金额!'
            }
          ]}
        >
          <InputNumber placeholder="请输入金额" style={{ width: '400px' }} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 12,
            span: 12,
          }}
        >
          <Space>
            <Button type="primary" htmlType="submit">提交</Button>
            <Button htmlType="button" onClick={onReset}>重置</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}
