import React from 'react';
import './index.less';
import { List, Avatar, Card } from 'antd';
class WhoRead extends React.Component {
     render() {
        const data = [
            {
                author: 'ReNMinders',
                img: '/316702.jpg',
                date: '14分钟前',
            },
            {
                author: 'xin',
                img: '/393187.jpg',
                date: '44分钟前',
            },
            {
                author: '步曾',
                img: '/407582.jpg',
                date: '47分钟前',
            },
            {
                author: '韦萱',
                img: '/1162265.jpg',
                date: '1小时前',
            },
          ];

         return (
             <div>
                 <Card
                    title={<span>谁读这本书?</span>}
                    style={{ width: 355, }}
                    headStyle={{ color: '#007722', border: 'none' }}
                    bodyStyle={{ margin: 0, paddingTop: 0 }}
                    bordered={false}
                >   
        
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                        <List.Item 
                            style={{ 
                                padding: 0,
                                borderBottom: 'dashed 1px #ccc'
                             }}
                        >
                           <List.Item.Meta
                                avatar={<Avatar src={item.img} style={{ cursor: 'pointer' }}/>}
                                title={<a className='hover-title' style={{ color: "#3377aa" }}>{item.author}</a>}
                                description={<span style={{ color: "#666" }}>{item.date} 想读</span>}
                                
                            />
                        </List.Item>
                    )}
                    />
                    <div className='read-case'>
                        <ul>
                            <li>
                                > <a >12933人在读</a>
                            </li>
                            <li>
                                > <a >154299人读过</a>
                            </li>
                            <li>
                                > <a >89051人想读</a>
                            </li>
                        </ul>
                    </div>
                </Card>
                
             </div>
         );
     }
}
export default WhoRead;
