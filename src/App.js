import React, { Component } from 'react';
import './App.less';
import http from './utils/server';
import RateCop from './components/rate';
import { Divider } from 'antd';
import { Row, Col } from 'antd';
class App extends Component {
  state = {

  };
  componentDidMount() {
    http.get('/movie/search?q=%E6%88%98%E7%8B%BC&count=1', {
    }).then(res=>{
      console.log('请求数据。。。',res);
      this.setState({
        img: res.data.subjects[0].images.small,
      });
    });
  }


  render() {
    return (
      <Row style={{marginTop: 10}}>
        <Col span={8} offset={4}>
          <img src={this.state.img} alt="图片" style={{width: 140,height: 200}}/>
        </Col>
        <Col span={1} >
          <Divider type="vertical" style={{ height: 200 }}/>
        </Col>
        <Col span={6} >
          <RateCop rating={3.5} />
        </Col>
      </Row>
    );
  }
}

export default App;
