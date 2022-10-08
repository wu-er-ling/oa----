import React from 'react';
import './AttendanceSettings.scss';
import { Input, Button } from 'antd';

export default function AttendanceSettings() {
  return (
    <div>
       <div className='num'>
        <h3>数据筛选</h3>
        <div style={{display: 'flex', alignItems: 'center', height: '90px', paddingLeft: '50px'}}>
          <Input addonBefore='输入查询:' style={{width: '300px'}}></Input>
          <Input addonBefore='时间:' style={{width: '300px', marginLeft: '50px'}}></Input>
          <Button type="primary"  style={{marginLeft: '20px'}}>
            查询
          </Button>
          <Button style={{marginLeft: '20px'}}>
            重置
          </Button>
        </div>
       </div>
    </div>
  )
}
