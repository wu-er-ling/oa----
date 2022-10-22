import React, { useState, useEffect, useRef}  from "react";
import { Divider,Input,Select,Button,Table,Modal,Form,Space,message,Popconfirm} from 'antd';
import {getProperty,postProperty,deleteProperty,patchProperty,getPropertyFrom} from '../../api/property'
import './Administration.scss';
import _ from 'lodash'

const { Option } = Select;

export default function Administration() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  let editId = useRef();
 const[form] = Form.useForm()
 
  const showModal = () => {
    setIsModalOpen(true);
  };
  const showModal2 = (id) => {
    editId.current = id; 
    setIsModalOpen2(true);
  };
  const handleReset2 = () =>{
    form.resetFields()
  }
  const handleReset = () =>{
    form.resetFields()
  }
  
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };
  const onFinishcha = (values) =>{
    getPropertyFrom(values.number).then((res)=>{
      message.success('查询成功')
      setDataSource(res.data)
    })
  }
  const onFinish = (values) =>{
    postProperty(values).then((res)=>{
      message.success('添加成功')
      setIsModalOpen(false)
      res.data.key = res.data.id
      setDataSource([...dataSource,res.data])
      form.resetFields()
    })
}
  useEffect(()=>{
    getProperty().then((res)=>{
      setDataSource(res.data);
    })
  }, [])
  const confirm = (id) => {
    return ()=>{
      deleteProperty(id).then(()=>{
        message.success('删除成功')
        let cloneDataSource = [...dataSource]
        setDataSource(cloneDataSource.filter((v)=>v.id !== id))
      }).catch(()=>{
        message.error('删除失败')
      })
    }
  }
  const onFinishEdit = (values) =>{
      patchProperty(editId.current, values).then(()=>{
        message.success('更新成功')
        let cloneDataSource = _.cloneDeep(dataSource);
         let user =  cloneDataSource.find((v)=> v.id === editId.current)        
          user.number = values.number
          user.name = values.name 
          user.zhuang = values.zhuang 
          user.type = values.type 
          user.classify = values.classify 
          user.dan = values.dan 
        setDataSource(cloneDataSource)
        setIsModalOpen2(false)
        form.resetFields()
      })
}
  const cancel = () => {
    console.log(2)
  }
  const columns = [
    {
      title: '资产编号',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: '资产名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '资产类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '资产分类',
      dataIndex: 'classify',
      key: 'classify',
    },
    {
      title: '规格/型号',
      dataIndex: 'norms',
      key: 'norms',
    },
    {
      title: '仓库',
      dataIndex: 'cang',
      key: 'cang',
    },
    {
      title: '当前状态',
      dataIndex: 'zhuang',
      key: 'zhuang',
    },
    {
      title: '管理人',
      dataIndex: 'guan',
      key: 'guan',
    },
    {
      title: '单位',
      dataIndex: 'dan',
      key: 'dan',
    },
    {
      title: '操作',
      dataIndex: 'cao',
      key: 'cao',
      render:(_,{id}) => (
        <Space>
        <Button type='primary' onClick={()=>showModal2(id)} >编辑</Button>
        <Modal title="编辑" open={isModalOpen2} footer={null} onCancel={handleCancel2}>
        <Form
            form={form}
              name="basic"
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 20,
              }}
            onFinish={onFinishEdit}
            >
            <Form.Item
                label="资产编号"
                name="number"
                rules={[
                  {
                    required: true,
                    message: '请输入资产编号',
                  }
                ]}
              >
                <Input placeholder='请输入资产编号'/>
              </Form.Item>
              <Form.Item
                label="资产名称"
                name="name"
                rules={[
                  {
                    required: true,
                    message: '请选资产名称',
                  },
                ]}
              >
                <Select placeholder='请选资产名称'>
                    <Option value="笔记本电脑">笔记本电脑</Option>
                    <Option value="台式电脑">台式电脑</Option>
                    <Option value="办公桌">办公桌</Option>
                    <Option value="办公椅">办公椅</Option>
                    <Option value="纸张">纸张</Option>
                    <Option value="签字笔">签字笔</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="资产类型"
                name="type"
                rules={[
                  {
                    required: true,
                    message: '请选资产类型',
                  },
                ]}
              >
                <Select placeholder='请选资产类型'>
                    <Option value="固定资产">固定资产</Option>
                    <Option value="易耗品">易耗品</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="资产分类"
                name="classify"
                rules={[
                  {
                    required: true,
                    message: '请选资产分类',
                  },
                ]}
              >
                <Select placeholder='请选资产分类'>
                    <Option value="数码/电脑/笔记本电脑">数码/电脑/笔记本电脑</Option>
                    <Option value="数码/电脑/台式电脑">数码/电脑/台式电脑</Option>
                    <Option value="办公用品/纸张">办公用品/纸张</Option>
                    <Option value="办公用品/办公椅">办公用品/办公椅</Option>
                    <Option value="办公用品/签字笔">办公用品/签字笔</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="当前状态"
                name="zhuang"
                rules={[
                  {
                    required: true,
                    message: '请选择当前状态',
                  },
                ]}
              >
                <Select placeholder='请选择当前状态'>
                    <Option value="正常">正常</Option>
                    <Option value="报修">报修</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="单位"
                name="dan"
                rules={[
                  {
                    required: true,
                    message: '请选择单位',
                  },
                ]}
              >
                <Select placeholder='请选择单位'>
                    <Option value="台">台</Option>
                    <Option value="张">张</Option>
                </Select>
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 20,
                  span: 7,
                }}
              >
              <Button type="primary" htmlType="submit">更新</Button>
              </Form.Item>
            </Form>
        </Modal>
        <Popconfirm
          title="确定是否删除?"
          onConfirm={confirm(id)}
          onCancel={cancel}
          okText="确定"
          cancelText="取消">
          <Button type='danger'>删除</Button>
        </Popconfirm>
        </Space>
      )
    },
  ];
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
    return (
        <div>
          <div className="shai">
            <h6>数据筛选</h6>
            <Divider />
            <div className="kuang">
                <Form
                form={form}
                  labelCol={{
                    span: 6,
                  }}
                  wrapperCol={{
                    span: 18,
                  }}
                  layout="inline"
                  initialValues={{
                    size: componentSize,
                  }}
                  onFinish={onFinishcha}

                  onValuesChange={onFormLayoutChange}
                  size={componentSize}
                >
                  <Form.Item label="输入查询：" name="number">
                    <Input placeholder='请输入资产编号'/>
                  </Form.Item>
                  <Form.Item label="类型：" name="type">
                    <Select placeholder='请选择类型'>
                      <Select.Option value="固定资产">固定资产</Select.Option>
                      <Select.Option value="易耗品">易耗品</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="状态：" name="classify">
                    <Select placeholder='选择分类'>
                    <Option value="数码/电脑/笔记本电脑">数码/电脑/笔记本电脑</Option>
                    <Option value="数码/电脑/台式电脑">数码/电脑/台式电脑</Option>
                    <Option value="办公用品/纸张">办公用品/纸张</Option>
                    <Option value="办公用品/办公椅">办公用品/办公椅</Option>
                    <Option value="办公用品/签字笔">办公用品/签字笔</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" className="cha" htmlType="submit">查询</Button>
                  </Form.Item>
                  <Form.Item>
                    <Button onClick={handleReset2}>重置</Button>
                  </Form.Item>
                </Form>
            </div>
          </div>
          <div className="lei">
            <div className="top">
            <h6>列表</h6>
            <div className="button">
            <Button type="primary" onClick={showModal}>
              添加
            </Button>
            </div>
            <Modal title="添加资产" footer={null} open={isModalOpen} onCancel={handleCancel}>
            <Form
            form={form}
              name="basic"
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 20,
              }}
              onFinish={onFinish}
            >
            <Form.Item
                label="资产编号"
                name="number"
                rules={[
                  {
                    required: true,
                    message: '请输入资产编号',
                  }
                ]}
              >
                <Input placeholder='请输入资产编号'/>
              </Form.Item>
              <Form.Item
                label="资产名称"
                name="name"
                rules={[
                  {
                    required: true,
                    message: '请选资产名称',
                  },
                ]}
              >
                <Select placeholder='请选资产名称'>
                    <Option value="笔记本电脑">笔记本电脑</Option>
                    <Option value="台式电脑">台式电脑</Option>
                    <Option value="办公桌">办公桌</Option>
                    <Option value="办公椅">办公椅</Option>
                    <Option value="纸张">纸张</Option>
                    <Option value="签字笔">签字笔</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="资产类型"
                name="type"
                rules={[
                  {
                    required: true,
                    message: '请选资产类型',
                  },
                ]}
              >
                <Select placeholder='请选资产类型'>
                    <Option value="固定资产">固定资产</Option>
                    <Option value="易耗品">易耗品</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="资产分类"
                name="classify"
                rules={[
                  {
                    required: true,
                    message: '请选资产分类',
                  },
                ]}
              >
                <Select placeholder='请选资产分类'>
                    <Option value="数码/电脑/笔记本电脑">数码/电脑/笔记本电脑</Option>
                    <Option value="数码/电脑/台式电脑">数码/电脑/台式电脑</Option>
                    <Option value="办公用品/纸张">办公用品/纸张</Option>
                    <Option value="办公用品/办公椅">办公用品/办公椅</Option>
                    <Option value="办公用品/签字笔">办公用品/签字笔</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="规格/型号"
                name="norms"
                rules={[
                  {
                    required: true,
                    message: '请选择规格/型号',
                  },
                ]}
              >
                <Select placeholder='请选择规格/型号'>
                    <Option value="XXXX">XXXX</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="仓库"
                name="cang"
                rules={[
                  {
                    required: true,
                    message: '请选择仓库',
                  },
                ]}
              >
                <Select placeholder='请选择仓库'>
                    <Option value="罗马仕">罗马仕</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="当前状态"
                name="zhuang"
                rules={[
                  {
                    required: true,
                    message: '请选择当前状态',
                  },
                ]}
              >
                <Select placeholder='请选择当前状态'>
                    <Option value="正常">正常</Option>
                    <Option value="报修">报修</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="管理人"
                name="guan"
                rules={[
                  {
                    required: true,
                    message: '请选择管理人',
                  },
                ]}
              >
                <Select placeholder='请选择管理人'>
                    <Option value="XXXX">XXXX</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="单位"
                name="dan"
                rules={[
                  {
                    required: true,
                    message: '请选择单位',
                  },
                ]}
              >
                <Select placeholder='请选择单位'>
                    <Option value="台">台</Option>
                    <Option value="张">张</Option>
                </Select>
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 17,
                  span: 7,
                }}
              >
                <Space>
                    <Button onClick={handleReset}>
                      重置
                    </Button>
                    <Button type="primary" htmlType="submit">
                      确定
                    </Button>
                </Space>
              </Form.Item>
            </Form>
            </Modal>
            </div>
            <Table dataSource={dataSource} columns={columns} rowKey={(v)=>v?.id} />
          </div>
        </div>
    )
}