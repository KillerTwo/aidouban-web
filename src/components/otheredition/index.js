import React from 'react';
import './index.less';
import { Card, List } from 'antd';
class OtherEdition extends React.Component {
    render() {
        const data = [
            {

            },
            {

            },
        ];
        return (
            <div>
                <Card
                    title="其他版本有售  · · · · · ·"
                    style={{ width: 355, backgroundColor: '#f6f6f1' }}
                    headStyle={{ color: '#007722', border: 'none' }}
                    bodyStyle={{ margin: 0, paddingTop: 0 }}
                >   
        
                    <List
                        itemLayout="vertical"
                        dataSource={data}
                        renderItem={item => (
                        <List.Item 
                            style={{ padding: 0 }}
                        >
                            <div style={{ position: 'relative',marginBottom: 3 }}>
                                <span ><a className='opt-hover'>京东商城</a></span>
                                <span style={{ position: "relative", right: -72 }}><a className='opt-hover'>51.00元</a></span>
                            </div>
                            <div>
                                <span><a className='a-edition'>北京十月文艺出版社版</a></span>
                            </div>
                        </List.Item>
                    )}
                    />
                    <div>
                        <span><a className='opt-hover'>+ 加入购书单</a></span>
                    </div>
                </Card>
            </div>
        );
    }
}
export default OtherEdition;