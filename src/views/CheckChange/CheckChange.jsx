import React, { useState, useEffect } from 'react'
import './CheckChange.scss'
import moment from 'moment'
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons'
import { Table, Button, Popconfirm, message, Radio } from 'antd'
import { getChensTo, updateCheck } from '../../api/checks'
import { useSelector } from 'react-redux'
import _ from 'lodash'

export default function CheckChange() {

  const [dataSource, setDataSource] = useState([]);
  const [orDataSource, setOrDataSource] = useState([]);
  const user = useSelector((state) => state.users.infos.user);

  useEffect(() => {
    getChensTo(user.id).then((res) => {
      res.data.forEach((v) => {
        v.key = v.id
      });
      setDataSource(res.data)
      setOrDataSource(res.data)
    })
  }, [user.id])

  const confirm = (id) => {
    return () => {
      updateCheck(id, { status: '通过' }).then(() => {
        message.success('审批成功');
        let cloneDataSource = [...dataSource];
        cloneDataSource.find((v) => v.id === id).status = '通过'
        setDataSource(cloneDataSource)
      })
    }
  }
  const cancel = (id) => {
    return () => {
      updateCheck(id, { status: '不通过' }).then(() => {
        message.success('审批成功');
        let cloneDataSource = [...dataSource];
        cloneDataSource.find((v) => v.id === id).status = '不通过'
        setDataSource(cloneDataSource)
      })
    }
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
      render: (_, { status, id }) => (
        <>
          {status === '审核中'
            ?
            <Popconfirm
              placement="bottom"
              title='审批是否通过？'
              onConfirm={confirm(id)}
              onCancel={cancel(id)}
              okText="通过"
              cancelText="不通过"
            >
              <Button type="primary">{status}</Button>
            </Popconfirm>
            :
            status
          }
        </>
      )
    }
  ];

  const handleStatus = (ev) => {
    let cloneDataSource = _.cloneDeep(orDataSource);
    cloneDataSource = cloneDataSource.filter((v) => v.status === ev.target.value || '全部' === ev.target.value)
    setDataSource(cloneDataSource)
  }
  
  return (
    <div className='CheckChange'>
      <div className='filterRadio'>
        <Radio.Group defaultValue="全部" buttonStyle="solid" onChange={handleStatus}>
          <Radio.Button value="全部">全部</Radio.Button>
          <Radio.Button value="审核中">审核中</Radio.Button>
          <Radio.Button value="通过">通过</Radio.Button>
          <Radio.Button value="不通过">不通过</Radio.Button>
        </Radio.Group>
      </div>
      <Table className='userTable' dataSource={dataSource}
        columns={columns} bordered pagination={{ defaultPageSize: 4 }} />
    </div>
  )
}
