import React, { useState, useEffect, useRef } from 'react'
import './Schedulingplan.scss'
import { Button, Table, Form, Input, Modal, Space, Popconfirm, message } from 'antd';
import { PlusCircleOutlined, RedoOutlined } from '@ant-design/icons';
import { getPlan, addPlan, deletePlan, getPlan2, updatePlan, getPlan3 } from '../../api/plan';
import _ from 'lodash';

const { TextArea } = Input;



export default function Schedulingplan() {

  let ws = new WebSocket('ws://192.168.30.248:3000/')

  ws.addEventListener('open', function () {

    ws.onmessage = function (ev) {
      let CloneValue2 = _.cloneDeep(inpValue2);
      setInpValue2(CloneValue2 + '张轶群说：' + ev.data + '\n')
    }
  })

  ws.addEventListener('message', function (ev) {

  })

  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  const [inpValue, setInpValue] = useState()
  const [inpValue2, setInpValue2] = useState([])

  const editId = useRef();

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const layout2 = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 18,
    },
  };



  /* const confirm = (index) => {
    
  }; */
  //初始化数据
  useEffect(() => {
    getPlan().then((res) => {
      setData(res.data);
    })
  }, []);

  const LiuYan = () => {

  };

  const showInpValue = e => {
    // message.info(JSON.stringify(e));
    setInpValue(e.target.value);

  };

  const showModal4 = () => {
    setIsModalOpen4(true);
  };

  const handleCancel4 = () => {
    setIsModalOpen4(false);
  };

  const showInpValue2 = () => {
    //message.info(inpValue);
    ws.send(inpValue)
    setInpValue('')
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const showModal2 = (id) => {
    return () => {
      editId.current = id
      setIsModalOpen2(true);
      getPlan2(id).then((res) => {
        form2.setFieldsValue(res.data[0])
      })
    }
  };

  const onFinish = (values) => {
    addPlan(values).then((res) => {
      message.success('添加成功');

      getPlan().then((res) => {
        setData(res.data);
      })

      setIsModalOpen(false);

    }).catch(() => {
      message.error('添加失败')

    })
  };

  const onFinish2 = (values) => {
    updatePlan(editId.current, values).then((res) => {
      message.success('修改成功');
      let CloneData = _.cloneDeep(data);
      let user = CloneData.find((v) => v.id === editId.current)
      user.name = res.data.name;
      user.endtime = res.data.endtime;
      user.starttime = res.data.starttime;
      user.remarks = res.data.remarks;
      setData(CloneData);
      setIsModalOpen2(false);
    })
  };

  const onFinish3 = (values) => {
    getPlan3(values.name).then((res) => {
      console.log(res.data)
      setData(res.data)
    })
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

  const onReset = () => {
    form.resetFields();
  };

  const start = () => {
    setSelectedRowKeys([]);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;


  const confirm2 = (id) => {
    return () => {
      deletePlan(id).then(() => {
        message.success('删除成功');
        let CloneData = [...data]
        setData(CloneData.filter((v) => v.id !== id))
      }).catch(() => {
        message.error('删除失败')
      })
    }
  };

  const cancel = () => { }

  const columns = [
    {
      key: '1',
      title: '姓名',
      dataIndex: 'name',

    },
    {
      key: '2',
      title: '开始时间',
      dataIndex: 'starttime',

    },
    {
      key: '3',
      title: '结束时间',
      dataIndex: 'endtime',

    },
    {
      key: '4',
      title: '备注',
      dataIndex: 'remarks',

    },
    {
      key: '5',
      title: '操作',
      dataIndex: 'address',
      render: (_, { id }) => (
        <Space>
          <Button type='primary' onClick={showModal2(id)}>编辑</Button>
          <Popconfirm
            title="确定是否删除?"
            onConfirm={confirm2(id)}
            onCancel={cancel}
            okText="确定"
            cancelText="取消"
          >
            <Button type='danger' >删除</Button>
          </Popconfirm>
          <Modal
            title="排班计划重新编辑" open={isModalOpen2} onCancel={handleCancel2}
            footer={[]}
          >
            <Form {...layout2} form={form2} name="control-hooks" onFinish={onFinish2}>
              <Form.Item
                name="name"
                label="姓名"
                rules={[
                  {
                    required: true,
                    message: '请输入姓名'
                  },
                ]}

              >
                <Input placeholder='请输入姓名' />
              </Form.Item>
              <Form.Item
                name="starttime"
                label="选择开始日期"
                rules={[
                  {
                    required: true,
                    message: '请输入开始日期'
                  }
                ]}
              >
                <Input placeholder='请输入开始日期' />
              </Form.Item>
              <Form.Item
                name="endtime"
                label="选择结束日期"
                rules={[
                  {
                    required: true,
                    message: '请输入结束日期'
                  }
                ]}
              >
                <Input placeholder="选择结束日期" />
              </Form.Item>
              <Form.Item
                name="remarks"
                label="备注"
                rules={[
                  {
                    required: true,
                    message: '请输入备注'
                  }
                ]}
              >
                <TextArea rows={4} placeholder="请输入备注" maxLength={6} />
              </Form.Item>
              <div style={{ textAlign: 'right' }}>
                <Button type="primary" htmlType="submit" style={{ marginRight: '20px' }} >
                  提交
                </Button>
                <Button htmlType="button" onClick={onReset}>
                  重置
                </Button>
              </div>
            </Form>
          </Modal>
        </Space>
      )
    },
  ];

  return (
    <div>
      <h3 style={{ background: '#fff', padding: '0 10px' }}>排班计划</h3>
      {/* 表单 */}
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish3} style={{ display: 'flex', background: '#fff', alignItems: 'center' }}>
        <Form.Item
          name="name"
          label="输入查询："
          style={{ marginTop: '23px' }}
        >
          <Input placeholder='请输入姓名' />
        </Form.Item>
        <Form.Item
          name="starttime"
          label="选择开始日期"
          style={{ marginTop: '23px', marginLeft: '20px' }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="enttime"
          label="选择结束日期"
          style={{ marginTop: '23px', marginLeft: '20px' }}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit" style={{ marginLeft: '100px' }}>
          查询
        </Button>
        <Button htmlType="button" onClick={onReset} style={{ marginLeft: '30px' }}>
          重置
        </Button>
      </Form>

      {/* 表格 */}
      <div style={{ background: 'white', marginTop: '30px', padding: '0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ lineHeight: '2', fontWeight: 'bold' }}>节假日列表</h3>
          <div>
            <Button><RedoOutlined />导出</Button>
            <Button type='primary' style={{ marginLeft: '15px' }} onClick={showModal}><PlusCircleOutlined />添加</Button>
            <Modal
              title="排班计划设置" open={isModalOpen} onCancel={handleCancel}
              footer={[]}
            >
              <Form {...layout2} form={form} name="control-hooks" onFinish={onFinish}>
                <Form.Item
                  name="name"
                  label="姓名"
                  rules={[
                    {
                      required: true,
                      message: '请输入姓名'
                    },
                  ]}

                >
                  <Input placeholder='请输入节日名称' />
                </Form.Item>
                <Form.Item
                  name="starttime"
                  label="选择开始日期"
                  rules={[
                    {
                      required: true,
                      message: '请输入开始日期'
                    }
                  ]}
                >
                  <Input placeholder='请输入开始日期' />
                </Form.Item>
                <Form.Item
                  name="endtime"
                  label="选择结束日期"
                  rules={[
                    {
                      required: true,
                      message: '请输入结束日期'
                    }
                  ]}
                >
                  <Input placeholder="选择结束日期" />
                </Form.Item>
                <Form.Item
                  name="remarks"
                  label="备注"
                  rules={[
                    {
                      required: true,
                      message: '请输入备注'
                    }
                  ]}
                >
                  <TextArea rows={4} placeholder="请输入备注" maxLength={6} />
                </Form.Item>
                <div style={{ textAlign: 'right' }}>
                  <Button type="primary" htmlType="submit" style={{ marginRight: '20px' }} >
                    提交
                  </Button>
                  <Button htmlType="button" onClick={onReset}>
                    重置
                  </Button>
                </div>
              </Form>
            </Modal>
          </div>
        </div>
        <div
          style={{
            marginBottom: 16,
          }}
        >
          <Button type="primary" onClick={start} disabled={!hasSelected} >
            重新加载
          </Button>
          <span
            style={{
              marginLeft: 8,
            }}
          >
            {hasSelected ? `您挑选了 ${selectedRowKeys.length} 条信息` : '您还没有挑选信息'}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} rowKey={(val) => val?.id} pagination={{ defaultPageSize: 5 }} />
        <Button type="primary" onClick={showModal4} style={{float:'right'}}>
          发送消息
        </Button>
        <Modal title="聊天室" open={isModalOpen4} onCancel={handleCancel4} footer=" ">
          <TextArea style={{ height: '300px' }} value={inpValue2}></TextArea>
          <div style={{ display: 'flex' }}>
            <Input value={inpValue} onChange={showInpValue} onPressEnter={showInpValue2}></Input><Button type="primary" onClick={LiuYan} disabled>按回车发送</Button>
          </div>
        </Modal>

      </div>
    </div>
  )
}
