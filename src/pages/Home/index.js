import React from 'react';
import './index.less';
import { Row, Col } from 'antd';
import DBHeader from '../../components/headers';
import MySearch from '../../components/headers/search';
import HeaderFooter from '../../components/headers/footers';
import DetailsCop from '../../components/detailsComponent';
import ListItem from '../../components/listitem';



export default class Home extends React.Component {

    state = {
        detail: {
    
        },
        rating: {},
        authorIntro: '',
        summary: '',
        img: '',
    };

    render() {
        return (
            <div>
                {/* 头部 */}
                <Row>
                    <Col span={24} >
                        <DBHeader />
                        <MySearch />
                        <HeaderFooter />
                    </Col>
                </Row>
                {/* 内容 */}
                <Row>
                    <Col span={24}>
                        {/* <DetailsCop detail={this.state.detail} rating={this.state.rating} imgUrl={this.state.img} /> */}
                        
                        {this.props.children}
                    </Col>
                </Row>
                底部
                <Row>
                    <Col span={12} offset={6}>底部</Col>
                </Row>
            </div>
        );
    }
}
