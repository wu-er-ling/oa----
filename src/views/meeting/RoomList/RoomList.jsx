import React from 'react'
import { Button, Form, Input } from 'antd';
import './RoomList.scss'
export default function RoomList() {
    return (
        <div className='RoomList'>
            <h2 className='head'>
                <span>
                    <span style={{ color: 'rgb(0, 187, 255)' }}>
                        丨</span>
                    会议室列表
                </span>
            </h2>
            <div className='screen'>
                <h3>数据筛选</h3>
                <Form>
                    输入查询：<Input /><Button>查询</Button><Button>重置</Button>
                </Form>
            </div>
        </div>
    )
}
