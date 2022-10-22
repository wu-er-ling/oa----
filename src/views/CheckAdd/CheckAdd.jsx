import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './CheckAdd.scss'
import { Button, Table, Modal, Form, Select, Space, DatePicker, Input, message } from 'antd'
import { PlusCircleOutlined, CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons'
import { getChecksFrom, getUsersTo, addCheck } from '../../api/checks'
import moment from 'moment';

export default function CheckAdd() {
  
  const [usersTo, setUsersTo] = useState([]);
  const [size] = useState(15);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const user = useSelector((state) => state.users.infos.user);
  const [form] = Form.useForm();
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;

  useEffect(() => {
    getChecksFrom(user.id).then((res) => {
      res.data.forEach((v) => {
        v.key = v.id
      })
      setDataSource(res.data);
    })
  }, [user])
  useEffect(() => {
    getUsersTo().then((res) => {
      setUsersTo(res.data)
    })
  }, [])

  const onFinish = (values) => {
    values.status = '审核中'
    values.checkfromid = user.id
    values.checkfromname = user.name
    values.checktoid = usersTo.find((v) => v.name === values.checktoname).id
    addCheck(values).then((res) => {
      message.success('添加成功')
      setIsModalOpen(false)
      res.data.key = res.data.id
      setDataSource([...dataSource, res.data])
    })
  }
  const onFinishFailed = () => { }
  const handleReset = () => {
    form.resetFields();
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const { Option } = Select;
  const handleModalOpen = () => {
    setIsModalOpen(true)
  }
  const columns = [
    {
      title: '申请人',
      dataIndex: 'checkfromname',
      key: 'checkfromname',
    },
    {
      title: '请假事由',
      dataIndex: 'checktype',
      key: 'checktype',
    },
    {
      title: '时间',
      dataIndex: 'checktime',
      key: 'checktime',
      render: (_, { checktime }) => (
        <>
          {moment(checktime[0]).format('YYY-MM-DD hh:mm:ss')} - {moment(checktime[1]).format('YYY-MM-DD hh:mm:ss')}
        </>
      )
    },
    {
      title: '备注',
      dataIndex: 'checkinfo',
      key: 'checkinfo',
    },
    {
      title: '审批人',
      dataIndex: 'checktoname',
      key: 'checktoname',
      render: (_, { checktoname, status }) => (
        <>
          {checktoname} {status === '通过' ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : status === '不通过' ? <CloseCircleTwoTone twoToneColor="#eb2f96" /> : null}
        </>
      )
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    }
  ];
  return (
    <div className='CheckAdd'>
      <div className='checkAddButton' >
        <Button onClick={handleModalOpen} type='primary' icon={<PlusCircleOutlined />}>添加申请</Button>
        <Modal className='CheckAddModal' title="添加申请" open={isModalOpen} onCancel={handleCancel} transitionName="" footer={null}>
          <Form
            name="basic"
            form={form}
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 20,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="审批人"
              name="checktoname"
              rules={[
                {
                  required: true,
                  message: '请选择审批人'
                }
              ]}
            >
              <Select placeholder='请选择审批人'>
                {
                  usersTo.map((v) => {
                    return <Option key={v.name} value={v.name} >{v.name}</Option>
                  })
                }
              </Select>
            </Form.Item>
            <Form.Item
              label="请假事由"
              name="checktype"
              rules={[
                {
                  required: true,
                  message: '请选择请假事由'
                }
              ]}
            >
              <Select placeholder='请选择请假事由'>
                <Option value='事假' />
                <Option value='年假' />
                <Option value='病假' />
                <Option value='加班' />
                <Option value='调休' />
                <Option value='外出' />
              </Select>
            </Form.Item>
            <Form.Item
              label="日期"
              name="checktime"
              rules={[
                {
                  required: true,
                  message: '请选择请假日期',
                },
              ]}
            >
              <RangePicker showTime />
            </Form.Item>
            <Form.Item
              label="备注"
              name="checkinfo"
              rules={[
                {
                  required: true,
                  message: '请输入备注信息',
                },
              ]}
            >
              <TextArea rows={5} />
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
      <Table className='userTable' dataSource={dataSource}
        columns={columns} bordered pagination={{ defaultPageSize: 4 }} />
    </div>
  )
}
