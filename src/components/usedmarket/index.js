import React from 'react';
import './index.less';
import { Card, List } from 'antd';


class UsedMarket extends React.Component {
    render() {
        const data = [
            {
              usedNum: '12本手书欲转让',
              price: '(0.01 至 60.00元)'
            },
            {
              toGet: '有89051人想读,手里有一本闲着?',
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
                        renderItem={(item, index) => (
                        <List.Item 
                            style={{ 
                                padding: 0,
                                borderBottom: 'dashed 1px #ccc'
                             }}
                        >
                            <div style={{ lineHeight:3 }}>
                                {
                                    index == 0 ? 
                                    <span>
                                        <a className='to-hover'>{item.usedNum}</a> <span>{item.price}</span>
                                    </span> :
                                    <span>
                                        {item.toGet}
                                        <a className='to-hover' style={{ marginLeft: 33 }}><span >> 点这转让</span></a>
                                    </span>
                                }
                            </div>
                        </List.Item>
                    )}
                    />
                </Card>
            </div>
        );
    }
}
export default UsedMarket;