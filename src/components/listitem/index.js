import React from 'react';
import './index.less';
import { Card, Avatar, Rate } from 'antd';
import { withRouter } from 'react-router-dom';
import http from './../../utils/server';



const { Meta } = Card;
class ListItem extends React.Component {

    state = {
        detail: {
    
        },
        rating: {},
        authorIntro: '',
        summary: '',
        img: '',
        summary: '',
        authorIntro: '',
        tags: '',
    };


    handleDetail = (value)=>{
        console.log('点击进入详情。。。');
        http.get('/book/isbn/:'+value, {
                }).then((res)=>{
                    console.log('详情的信息：',res);
                    let detail = {
                        author: res.data.author[0],
                        pubdate: res.data.pubdate,
                        pages: res.data.pages,
                        price: res.data.price,
                        binding: res.data.binding,
                        title: 'series' in res.data ? res.data.series.title : '',
                        isbn13: res.data.isbn13,
                        publisher: res.data.publisher
                    }
                    let summary = res.data.summary;
                    let authorIntro = res.data.author_intro;
                    let tags = res.data.tags;
                    this.setState({
                        img: res.data.images.small,
                        detail,
                        rating: res.data.rating,
                        summary,
                        authorIntro,
                        tags

                    });
                    let path = { pathname: '/search/detail', state: {
                         detail: this.state.detail, 
                         rating: this.state.rating, 
                         img: this.state.img, 
                         summary: this.state.summary,
                         authorIntro: this.state.authorIntro,
                         tags: this.state.tags,
                         } }
                    this.props.history.push(path);
                });
        
        console.log('isbn13: ',value);
        
    }

    render() {
        let {info} = this.props;
        //let info = this.props.location.state;
        
        let description = 
            (
                <ul style={{ marginLeft: -40, color: "rgb(156, 150, 150)" }} className='list-item'>
                    <li style={{ listStyle: "none" }}><a className='title' onClick={()=>{this.handleDetail(info.isbn13)}}>{info.title}</a></li>
                    <li style={{ listStyle: "none" }}>
                        <Rate disabled allowHalf value={parseInt(info.average,10)/2} style={{ fontSize: 12 }} />
                        <span>{info.average}({info.numRaters}人评价)</span>
                    </li>
                    <li style={{ listStyle: "none" }}>{info.author} / {info.publisher} / {info.pubdate} / {info.price}</li>
                    <li style={{ listStyle: "none" }} className='operator'>
                        <a >想读</a>
                        <a >在读</a>
                        <a >读过</a>
                    </li>
                </ul>
            );
        
        return (
            <div>
                <Card style={{ width: 300, marginTop: 16, position: "relative" }} bordered={false} bodyStyle={{ padding: 0, margin: 0 }}>
                    <Meta
                        avatar={<Avatar onClick={()=>{this.handleDetail(info.isbn13)}} style={{width: 68,height: 100, cursor:"pointer" }} src={info.img} shape="square" />}
                        // title="Card title"
                        description={
                            description
                        }
                        style={{ padding: 0 }}
                    />
                </Card>
            </div>
        );
    }
}

export default withRouter(ListItem);