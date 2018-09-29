import React from 'react';
import './index.less';
import { Card, List } from 'antd';
 
class DoubanRecommend extends React.Component {
    render() {
        const data = [
            {
                title: '五颗星经典系列｜图书｜小说类｜',
                person: '蜜蜂'
            },
            {
                title: '推荐给你的大学读书单：那些值得关注的观念 ',
                person: 'jiaon'
            },
            {
                title: '联书社推荐好书100本 ',
                person: '群情'
            },
            {
                title: '也许能改变你生活态度的书 ',
                person: 'Nous'
            },
            {
                title: '女性要读的一些书 ',
                person: 'Aileen'
            },
        ];
        return (
            <div>
                <Card
                    title={<span>以下豆列推荐  · · · · · ·  ( <a className='hover-a' style={{ color: 14 }}>全部</a> )</span>}
                    style={{ width: 355, }}
                    headStyle={{ color: '#007722', border: 'none' }}
                    bodyStyle={{ margin: 0, paddingTop: 0 }}
                    bordered={false}
                >   
        
                    <List
                        itemLayout="vertical"
                        dataSource={data}
                        renderItem={item => (
                        <List.Item 
                            style={{ 
                                padding: 0,
                                borderBottom: 'dashed 1px #ccc'
                             }}
                        >
                            <div style={{ position: 'relative',marginBottom: 3 }}>
                                <a className='hover-a'>{item.title}</a>({item.person}})
                            </div>
                            
                        </List.Item>
                    )}
                    />
                </Card>
            </div>
        );
    }
}
export default DoubanRecommend;