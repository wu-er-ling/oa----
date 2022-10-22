import React from "react";
import './MyProperty.scss'
import { Divider,Input,Row,Col,Select,Button,Table} from 'antd';
const { Option } = Select;
const dataSource = [
  {
    key: '1',
    number: '13124012',
    name: 'xxxx',
    type: '固定资产',
    classify:'数码/电脑/笔记本电脑',
    norms:'XXXX'
  },
  {
    key: '2',
    number: '3246561',
    name: 'xxxx',
    type: '固定资产',
    classify:'数码/电脑/笔记本电脑',
    norms:'XXXX'
  },
  {
    key: '3',
    number: '3321202',
    name: 'xxxx',
    type: '易耗品',
    classify:'办公用品/纸张',
    norms:'XXXX'
  },
  {
    key: '4',
    number: '3246561',
    name: 'xxxx',
    type: '易耗品',
    classify:'办公用品/纸张',
    norms:'XXXX'
  }
];

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
  }
  ,{
    title: '规格/型号',
    dataIndex: 'norms',
    key: 'norms',
  },
];


export default function Administration() {
    return (
        <div>
          <div className="shai">
            <h6>数据筛选</h6>
            <Divider />
            <div className="kuang">
                  <Input.Group size="large" >
                  <Row gutter={20}>
                    <p>输入查询：</p>
                    <Col span={4}>
                    <Input defaultValue="编号" />
                    </Col>
                    <p>类型：</p>
                    <Col span={4}>
                    <Select defaultValue="请选择类型">
                      <Option value="固定资产">固定资产</Option>
                      <Option value="易耗品">易耗品</Option>
                    </Select>
                    </Col>
                    <p>状态：</p>
                    <Col span={6}>
                    <Select defaultValue="选择分类">
                      <Option value="数码/电脑/笔记本电脑">数码/电脑/笔记本电脑</Option>
                      <Option value="办公用品/纸张">办公用品/纸张</Option>
                    </Select>
                    </Col>
                    <Col span={2}>
                    <Button type="primary">查询</Button>
                    </Col>
                    <Col span={2}>
                    <Button>重置</Button>
                    </Col>
                  </Row>
                </Input.Group>
            </div>
          </div>
          <div className="lei">
            <h6>列表</h6>
            <Table dataSource={dataSource} columns={columns} rowKey={(v)=>v.key}/>
          </div>
        </div>
    )
}