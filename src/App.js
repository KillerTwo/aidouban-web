import React, { Component } from 'react';
import './App.less';
import http from './utils/server';


import { Row, Col } from 'antd';
import DetailsCop from './components/detailsComponent';
import DBHeader from './components/headers';
import MySearch from './components/headers/search';


class App extends Component {
  state = {
    detail: {

    },
    rating: {}
  };
  componentDidMount() {
    
    http.get('/book/search', {
      q: "平凡的世界",
      count: 1
    },{
      'Content-Type':'application/x-www-form-urlencoded'
    }).then(res=>{
      let detail = {
        author: res.data.books[0].author[0],
        pubdate: res.data.books[0].pubdate,
        pages: res.data.books[0].pages,
        price: res.data.books[0].price,
        binding: res.data.books[0].binding,
        title: res.data.books[0].series.title,
        isbn13: res.data.books[0].isbn13,
        publisher: res.data.books[0].publisher
      }
      console.log('请求数据。。。',res);
      console.log("作者",res.data.books[0].author[0]);
      console.log("出版年",res.data.books[0].pubdate);
      console.log("页数",res.data.books[0].pages);
      console.log("定价",res.data.books[0].price);
      console.log("装帧",res.data.books[0].binding);
      console.log("丛书",res.data.books[0].series.title);
      console.log("ISBN",res.data.books[0].isbn13);
      this.setState({
        img: res.data.books[0].images.small,
        detail,
        rating: res.data.books[0].rating,
      });
    });
  }


  render() {
    return (
      <Row style={{marginTop: 10}}>
        {/* <Col span={18} offset={2}>
          <DetailsCop imgUrl={this.state.img} detail={this.state.detail} rating={this.state.rating}/>
        </Col> */}
        <Col span={20} offset={2}>
          <DBHeader />
          <hr/>
          <MySearch />
        </Col>
      </Row>
    );
  }
}

export default App;
