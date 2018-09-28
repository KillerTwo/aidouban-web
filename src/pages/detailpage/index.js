import React from 'react';
import './index.less';
import DetailsCop from '../../components/detailsComponent';
import { Row, Col } from 'antd';

class DetailPage extends React.Component {

    state = {
        detail: {
    
        },
        rating: {},
        authorIntro: '',
        summary: '',
        img: '',
    };

    componentDidMount() {
        let results = this.props.location.state;
        console.log('从路由接收到的信息; ',results);
        this.setState({
            detail: results.detail,
            rating: results.rating,
            img: results.img,
        });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={18}>
                        <Row>
                            <Col span={24}>
                                <DetailsCop detail={this.state.detail} rating={this.state.rating} imgUrl={this.state.img} />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={6}>right</Col>
                </Row>
            </div>
        );
    }
}

export default DetailPage;

