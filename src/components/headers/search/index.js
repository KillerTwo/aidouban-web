import React from 'react';
import "./index.less";
import { Input, Col } from 'antd';


const Search = Input.Search;

export default class MySearch extends React.Component {
    render() {
        return (
            <div className="container">
                    <Col span={4} offset={2}>
                        <span className="font-search">
                            豆瓣读书
                        </span>
                    </Col>
                    <Col span={12}>
                    <div className="input-search">
                        <Search
                            placeholder="书名、作者、ISBN"
                            onSearch={value => console.log(value)}
                            enterButton
                        />
                    </div>
                        
                    </Col>
                
                
            </div>
        );
    }
}

