import React from 'react';
import './index.less';
import { Card, Button } from 'antd';


class DoubanSell extends React.Component {
    render() {
        return (
            <div>
                <Card
                    title="其他版本在豆瓣书店有售  · · · · · ·"
                    style={{ width: 355, backgroundColor: '#f6f6f1' }}
                    headStyle={{ color: '#007722', border: 'none' }}
                    bodyStyle={{ paddingTop: 0 }}
                >   
                    <p style={{
                        
                    }}>
                        <a className='opt-hover'>北京十月文艺出版社版</a>
                    </p>
                    <p>纸质版  86.40元 <span style={{ textDecoration: 'line-through' }}>108.00元</span></p>
                    <p style={{ color: '#999' }}>满48元包邮</p>
                    <p className='douban-sell-btn'>
                        <Button className='left-btn'>
                            去购买
                          </Button>
                        <Button className='right-btn' >加入购物车</Button>
                    </p>
                </Card>
            </div>
        );
    }
}
export default DoubanSell;
