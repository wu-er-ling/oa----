import React from "react";
import { DownOutlined } from '@ant-design/icons';
import { Tree,Tabs } from 'antd';
import './PropertyFenlei.scss';


const treeData = [
    {
      title: '固定资产',
      key: '0-0',
      children: [
        {
          title: '数码',
          key: '0-0-0',
          children: [
            {
              title: '电脑',
              key: '0-0-0-0',
              children: [
                {
                  title: '笔记本电脑',
                  key: '0-0-0-0-0',
                },
                {
                  title: '台式电脑（显示器）',
                  key: '0-0-0-0-1',
                },
                {
                  title: '台式电脑（主机）',
                  key: '0-0-0-0-2',
                }
              ],
            },
            {
              title: 'XXXX',
              key: '0-0-0-2',
              children: [
                {
                  title: 'XXXX',
                  key: '0-0-0-2-0',
                }
              ]
            },
          ],
        },
        {
          title: '办公家具',
          key: '0-0-2',
          children: [
            {
              title: '办公桌',
              key: '0-0-2-0',
            },
            {
              title: '办公椅',
              key: '0-0-2-2',
            },
          ],
        },
        {
          title: 'XXXX',
          key: '0-0-3',
          children: [
            {
              title: 'XXXX',
              key: '0-0-3-0',
            },
            {
              title: 'XXXX',
              key: '0-0-3-2',
            },
          ],
        },
      ],
    },
    {
        title: '易耗品',
        key: '0-2',
        children: [
          {
            title: '办公用品',
            key: '0-2-0',
            children: [
              {
                title: '纸张',
                key: '0-2-0-0',
              },
              {
                title: '签字笔',
                key: '0-2-0-2',
              },
            ],
          },
          {
            title: 'XXXX',
            key: '0-2-2',
            children: [
              {
                title: 'XXXX',
                key: '0-2-2-0',
              },
              {
                title: 'XXXX',
                key: '0-2-2-2',
              },
            ],
          }
        ],
      },
  ];

  
export default function PropertyFenlei() {
    const items = [
        { label: '分类详情', key: 'item-1', children: '内容 1' }, // 务必填写 key
        { label: '新增子分类', key: 'item-2', children: '内容 2' },
        { label: '子分类排序', key: 'item-3', children: '内容 2' }
      ];
    return (
        <div>
            <div className="shu">
            <div className="zichan"><p>资产分类</p></div>
            <div className="buttom">
            <Tree
              showLine
              switcherIcon={<DownOutlined />}
              defaultExpandedKeys={['0-0-0']}
              treeData={treeData}
              defaultExpandAll="true"
            />
            </div>
            
        </div>
        <div className="right"><Tabs items={items} /></div>
        </div>
    )
}