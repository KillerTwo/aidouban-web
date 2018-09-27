import React from 'react';
import './index.less';
import { Card } from 'antd';

const { Meta } = Card;
export default class BookItem extends React.Component {
    
    render() {
        // 显示价格，
        let title = (<ul style={{ padding: 0, margin: 0 }}>
            <li style={{ listStyle: "none", fontSize: 12, height: 37 }}><a style={{color: "blue", whiteSpace: "normal" }}>{this.props.bookName}</a></li>
            <li style={{ listStyle: "none",height: 34, textAlign: "center" }} >{this.props.bookPrice}</li>
        </ul>);
        return (
            <div>
                <Card
                    hoverable
                    style={{ width: 120, height: 219 }}
                    cover={<img alt="example" src={this.props.bookImg} />}
                >
                    <Meta
                        title={
                            title
                        }
                        style={{ height: 20, width: 95, marginTop: -24, listStyle: "none" }}
                    />
                </Card>
            </div>
        );
    }
}

