import React from 'react';
import "./index.less";
import { Input, Col, Card } from 'antd';


const Search = Input.Search;

export default class MySearch extends React.Component {

    render() {
        const gridStyle = {
            width: '25%',
            textAlign: 'center',
            border: "none"
        };
        return (
            <div className="container">
                    <div className="font-search">
                        <Card bordered={false} bodyStyle={{ width: 300 }}>
                            <span className="font-search">
                                豆瓣读书
                            </span>
                        </Card>
                    </div>
                    <div className="input-search">
                        <Card bordered={false} bodyStyle={{ width: 300 }}>
                            <div>
                                <Search
                                    placeholder="书名、作者、ISBN"
                                    onSearch={value => console.log(value)}
                                    enterButton
                                />
                            </div>
                        </Card>
                    </div>
            </div>
        );
    }
}

