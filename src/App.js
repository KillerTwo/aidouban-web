import React, { Component } from 'react';
import './App.less';
import http from './utils/server';

import { Row, Col, Divider } from 'antd';
import DetailsCop from './components/detailsComponent';
import DBHeader from './components/headers';
import MySearch from './components/headers/search';
import HeaderFooter from './components/headers/footers';
import RecommendsCop from './components/recommends';
import ContentIntro from './components/contentintro';
import AuthorIntro from './components/authorintro';
import TagIntro from './components/tagintro';
import SerieBook from './components/seriebooks';
import BookItem from './components/bookitem';
import LongComment from './components/comments/longShort';
import ShortComment from './components/comments/shortcomments';


class App extends Component {
  state = {
    detail: {

    },
    rating: {},
    authorIntro: '',
    summary: '',
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
      let summary = res.data.books[0].summary;
      let authorIntro = res.data.books[0].author_intro;
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
        summary,
        authorIntro
      });
    });
  }
  render() {
    let bookImg = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png";
    return (
      <div className="App">
        <Row>
        <Col span={24} >
          <DBHeader />
          <MySearch />
          <HeaderFooter />
        </Col>
        </Row>
        <div style={{ clear: "both" }}></div>
        <Row>
          <Col span={18} offset={1}>
            <DetailsCop detail={this.state.detail} rating={this.state.rating} imgUrl={this.state.img} />
          </Col>
          <Col span={2}>
          
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={5}>
            <RecommendsCop />
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={5}>
            <ContentIntro summary={this.state.summary} />
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={5}>
            <AuthorIntro authorIntro={this.state.authorIntro} />
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={5}>
            <TagIntro />
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={5}>
            <SerieBook />
          </Col>
        </Row>

        <Row>
          <Col span={16} offset={5}>
            <div style={{ marginBottom: 35 }}>
              <span style={{ color:"green", fontSize: 16 }}>喜欢读"平凡的世界（全三部）"的人也喜欢的电子书  · · · · · ·</span>
              <span style={{ position: "relative",top:20,left:-411 }}>支持 Web、iPhone、iPad、Android 阅读器</span>
            </div>
            <div className='phonto-row'>
              <div style={{ display: 'inline-block', marginRight: 10 }}>
                <BookItem bookImg={bookImg} bookName={"三国演义"} bookPrice={5.40}/>
              </div>
              <div style={{ display: 'inline-block', marginRight: 10 }}>
                <BookItem bookImg={bookImg} bookName={"追风筝的人"} bookPrice={"9.99元"}/>
              </div>
              <div style={{ display: 'inline-block', marginRight: 10 }}>
                <BookItem bookImg={bookImg} bookName={"少年PI的奇幻漂流（插图珍藏版）"} bookPrice={"12.60元"}/>
              </div>
              <div style={{ display: 'inline-block', marginRight: 10 }}>
                <BookItem bookImg={bookImg} bookName={"论文艺女青年如何培养女王气场"} bookPrice={"1.99元"}/>
              </div>
              <div style={{ display: 'inline-block', marginRight: 10 }}>
                <BookItem bookImg={bookImg} bookName={"简爱（英文全本）"} bookPrice={"5.00元"}/>
              </div>
            </div>

            <div className='phonto-row'>
              <div style={{ display: 'inline-block', marginRight: 10 }}>
                <BookItem bookImg={bookImg} bookName={"三国演义"} bookPrice={5.40}/>
              </div>
              <div style={{ display: 'inline-block', marginRight: 10 }}>
                <BookItem bookImg={bookImg} bookName={"追风筝的人"} bookPrice={"9.99元"}/>
              </div>
              <div style={{ display: 'inline-block', marginRight: 10 }}>
                <BookItem bookImg={bookImg} bookName={"少年PI的奇幻漂流（插图珍藏版）"} bookPrice={"12.60元"}/>
              </div>
              <div style={{ display: 'inline-block', marginRight: 10 }}>
                <BookItem bookImg={bookImg} bookName={"论文艺女青年如何培养女王气场"} bookPrice={"1.99元"}/>
              </div>
              <div style={{ display: 'inline-block', marginRight: 10 }}>
                <BookItem bookImg={bookImg} bookName={"简爱（英文全本）"} bookPrice={"5.00元"}/>
              </div>
            </div>
          </Col>
        </Row>
        
        {/* <Row>
          <Col span={16} offset={5}>
            <LongComment />
          </Col>
        </Row> */}

        <Row>
          <Col span={8} offset={5}>
            <ShortComment />
          </Col>
        </Row>
        



      </div>
      
    );
  }
}

export default App;
