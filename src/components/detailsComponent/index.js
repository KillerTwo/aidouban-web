import React from 'react';
import { Row, Col } from 'antd';
import { Card, Avatar } from 'antd';

import './index.less';
import RateCop from '../rate';


const { Meta } = Card;

export default class DetailsCop extends React.Component {
    // state = {
    //     detail: {
    
    //     },
    //     rating: {},
    //     authorIntro: '',
    //     summary: '',
    //     img: '',
    // };

    // componentDidMount() {
    //     let results = this.props.location.state;
    //     console.log('从路由接收到的信息; ',results);
    //     this.setState({
    //         detail: results.detail,
    //         rating: results.rating,
    //         img: results.img,
    //     });
    // }

    render() {
        
        return (
            <div>
                <Row>
                    <Col span={8} offset={5}>
                        <div className="detail-left">
                            <Card bodyStyle={{ width: 373, height: 285 }} bordered={false}>
                                <div className="titles">
                                    <h2>平凡的世界(全三部)</h2>
                                </div>
                                <Meta
                                    avatar={<Avatar style={{width: 140,height: 200}} src={this.props.imgUrl} shape="square"/>}
                                    description={
                                        <ul className="info-ul">
                                            <li><span>作者: <a href="" style={{ color: "rgb(47, 125, 150)" }}> { this.props.detail.author } </a></span></li>
                                            <li><span>出版社: { this.props.detail.publisher }</span></li>
                                            <li><span>出版年: { this.props.detail.pubdate }</span></li>
                                            <li><span>页数: { this.props.detail.pages }</span></li>
                                            <li><span>装帧: { this.props.detail.binding }</span></li>
                                            {this.props.detail.title !== '' && <li><span>丛书: { this.props.detail.title }</span></li>}
                                            <li><span>ISBN: { this.props.detail.isbn13 }</span></li>
                                        </ul>
                                    }
                                />
                            </Card>
                        </div>
                    </Col>
                    {/* <Col span={1}>
                    </Col> */}
                    <Col span={6}>
                        <div className="detail-right">
                            <RateCop rating={this.props.rating} />
                        </div>    
                    </Col>
                </Row>
            </div>
        );
    }
}