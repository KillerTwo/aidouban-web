import React from 'react';
import "./index.less";
import { Input, Col, Card } from 'antd';
import { Link } from 'react-dom';
import { withRouter } from 'react-router-dom';

import http from './../../../utils/server';

const Search = Input.Search;

// const info = {
//     title: '平凡的世界（全三部）',
//     average: '9.0',
//     numRaters: 116664,
//     author: '路遥',
//     publisher: '人民文学出版社',
//     pubdate: '2005-1',
//     price: '64.00元'
// }

// const data = [
//     info,
//     info,
//     info,
//     info,
//     info
// ]

class MySearch extends React.Component {

    state = {

    };

    handleSearch = (value)=>{
        console.log(value)
        let url = "/book/search";
        http.get(url,{
            q: value,
            count: 20
        }).then(
            (res)=>{
                let results = res.data;
                let data = [];
                results.books.forEach(element => {
                    let info = {
                        title: element.title,
                        average: element.rating.average,
                        numRaters: element.rating.numRaters,
                        author: element.author[0],
                        publisher: element.publisher,
                        pubdate: element.pubdate,
                        price: element.price,
                        img: element.images.small,
                        isbn13: element.isbn13,
                    }
                    data.push(info);
                });
                let path = { pathname: '/search/list', state: { data: data } }
                console.log('查询的结果是：',res.data);
                
                // const info = {
                //     title: res.data.books[0].title,
                //     average: res.data.books[0].rating.average,
                //     numRaters: res.data.books[0].rating.numRaters,
                //     author: res.data.books[0].author[0],
                //     publisher: res.data.books[0].publisher,
                //     pubdate: res.data.books[0].pubdate,
                //     price: res.data.books[0].price
                // }
                this.props.history.push(path);
                console.log('路由已经跳转了。');
            }
        );
    }

    render() {
        
        return (
            <div className="container">
                    <div className="font-search">
                        <Card bordered={false} bodyStyle={{ width: 300 }}>
                            <span className="search-title">
                                豆瓣读书
                            </span>
                        </Card>
                    </div>
                    <div className="input-search">
                        <Card bordered={false} bodyStyle={{ width: 491, height: 50 }}>
                            <div>
                                <Search
                                    placeholder="书名、作者、ISBN"
                                    onSearch={value => {this.handleSearch(value)}}
                                    enterButton
                                />
                            </div>
                        </Card>
                    </div>
            </div>
        );
    }
}


export default withRouter(MySearch);
