import React from 'react';
import './index.less';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;


class CommentBookItem extends React.Component {
    render() {
        return (
            <div >
                <Card 
                style={{ 
                    width: 600, 
                    height: 62,
                    padding: 0,
                    margin: 0,
                    marginTop: 16,
                    backgroundColor: '#f8f8f8'
                }}
                bordered={false}
                bodyStyle={{
                    padding: 0,
                    margin: 0
                }}
                >
                    <Meta
                        avatar={<Avatar
                            style={{
                                height: 61,
                                width: 42,
                                padding:0,
                                margin: 0,
                                cursor: 'pointer'
                            }}
                            src="/s1070222.jpg" shape='square' />}
                        title={<span className='title-hover' style={{cursor: 'pointer' }}>围城</span>}
                        description={
                            <div style={{ color: 'rgb(171, 170, 170)' }}>
                                <span style={{ cursor: 'pointer' }}>钱钟书</span> / 
                                <span style={{ cursor: 'pointer' }} >人民文学出版社</span>
                            </div>
                            
                        }
                            
                        style={{
                            margin: 0,
                            padding: 0
                        }}
                    />
                </Card>
            </div>
        );
    }
}
export default CommentBookItem;