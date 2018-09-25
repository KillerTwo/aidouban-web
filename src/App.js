import React, { Component } from 'react';
import './App.less';
import http from './utils/server';
import RateCop from './components/rate';


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
      <div className="App">
        <img src={this.state.img} alt="图片"/>
        <RateCop rating={3.5} />
      </div>
    );
  }
}

export default App;
