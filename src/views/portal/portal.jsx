import React, { useState } from 'react';
import '../portal/portal.scss'
import Swiper from '../../components/Auth/carousel/carousel';
import { Layout, Menu, Col, Row, List, Carousel } from 'antd';
import {
  UserOutlined,
  TeamOutlined,
} from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

//公告栏数据
const dataAnnouncement = [
  '【公告】 任命XX为XXX公司总经理的公告',
  '【公告】 任命XX为XXX公司总经理的公告',
  '【公告】 任命XX为XXX公司总经理的公告',
  '【公告】 任命XX为XXX公司总经理的公告',
  '【公告】 任命XX为XXX公司总经理的公告',
  '【公告】 任命XX为XXX公司总经理的公告',
  '【公告】 任命XX为XXX公司总经理的公告',
];

//左侧路由数据
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('门户', 'sub1', <UserOutlined />, [
    getItem('集团门户', '3'),
    getItem('公司门户', '4'),
    getItem('部门门户', '5'),
    getItem('个人门户', '6'),
  ]),
  getItem('页面', 'sub2', <TeamOutlined />, [
    getItem('部门页面', '7'),
    getItem('个人页面', '8')
  ]),
];

//grid框架样式
const style = {
  background: 'rgb(240,242,245)',
  padding: '8px 0',
  height: '1150px'
};

//集团领导轮播图样式
const contentStyle = {
  height: '456px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function Portal() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className='Portal'>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} defaultCollapsed='false' >
          <div className="logo" />
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={items}
            style={{
              position: 'fixed',
              width: '200px'
            }}
          />
        </Sider>
        <Layout className="site-layout"
          style={{
            padding: '0 0',
            background: 'white',
            overflow: 'hidden'
          }}
        >
          <Content
            className="site-layout-background"
            style={{
              margin: '0 0',
              padding: 24,
              minHeight: 280,
              height: '1200px',
              overflow: 'hidden'
            }}
          >
            <Row gutter={10}>
              <Col className="gutter-row" span={2}>
                <div style={{
                  background: 'rgb(240,242,245)',
                  padding: '8px 0',
                  height: '1150px'
                }}></div>
              </Col>
              <Col className="gutter-row" span={14}>
                <div style={style} className='groupArea'>
                  <div className='swiper'>
                    <Swiper/>
                  </div>
                  <div className='groupIntroduce'>
                    <h2>集团介绍</h2>
                    <div className='groupIntroduce-innerbox'>
                       <div className='groupIntroduce-innerbox-main'>
                          
                       </div>
                    </div>
                  </div>
                  <div className='groupNews'>
                    <h2>集团新闻</h2>
                    <div className='groupNews-innerbox'>
                      {/* 如何将数组中的数据按照想要的样式渲染到页面中 */}
                      <List size="large">
                         <List.Item>庆祝公司双十一活动取得圆满成功</List.Item>
                         <List.Item>庆祝公司双十一活动取得圆满成功</List.Item>
                         <List.Item>庆祝公司双十一活动取得圆满成功</List.Item>
                      </List>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style} className='groupAreaRight'>
                  <div className='announcement'>
                    <h2>公告</h2>
                    <div className='announcement-innerbox'>
                      <List
                        size="small"
                        dataSource={dataAnnouncement}
                        renderItem={(item) => <List.Item>{item}</List.Item>}
                      />
                    </div>
                  </div>
                  <div className='groupMembers'>
                    <h2>集团成员</h2>
                    <div className='groupMembers-innerbox'>
                      <div className='boxOne'>
                        <h2>总公司</h2>
                        <div></div>
                      </div>
                      <div className='boxTwo'>
                        <h2>子公司</h2>
                        <div></div>
                      </div>
                      <div className='boxThree'>
                        <h2>子公司</h2>
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className='groupLeadership'>
                    <h2>集团领导</h2>
                    <div className='groupLeadership-innerbox'>
                      <Carousel autoplay>
                        <div>
                          <h3 style={contentStyle}>
                            <div className='headtitle'>
                              <p>张晓刚<span>XXX公司总经理</span></p>
                            </div>
                            <div className='artical'>
                              <p>XXXX年毕业于XXX学习，XXX年开始从事XXX行业工作。在行业内口碑较好，业绩优秀。<br />XXXX年毕业于XXX学习，XXX年开始从事XXX行业工作。在行业内口碑较好，业绩优秀。<br />XXXX年毕业于XXX学习，XXX年开始从事XXX行业工作。在行业内口碑较好，业绩优秀。<br />XXXX年毕业于XXX学习，XXX年开始从事XXX行业工作。在行业内口碑较好，业绩优秀。</p>

                            </div>
                          </h3>
                        </div>
                        <div>
                          <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                          <h3 style={contentStyle}>3</h3>
                        </div>
                        <div>
                          <h3 style={contentStyle}>4</h3>
                        </div>
                      </Carousel>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="gutter-row" span={2}>
                <div style={style}></div>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}


