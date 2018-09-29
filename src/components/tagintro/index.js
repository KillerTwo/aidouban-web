import React from 'react';
import './index.less';
import { Card } from 'antd';



const tags= [
    {
    "count": 30999,
    "name": "路遥",
    "title": "路遥"
    },
    {
    "count": 30996,
    "name": "平凡的世界",
    "title": "平凡的世界"
    },
    {
    "count": 17310,
    "name": "小说",
    "title": "小说"
    },
    {
    "count": 16996,
    "name": "中国文学",
    "title": "中国文学"
    },
    {
    "count": 14906,
    "name": "人生",
    "title": "人生"
    },
    {
    "count": 14237,
    "name": "经典",
    "title": "经典"
    },
    {
    "count": 9320,
    "name": "文学",
    "title": "文学"
    },
    {
    "count": 7744,
    "name": "当代",
    "title": "当代"
    }
    ];
export default class TagIntro extends React.Component {

    render() {
        let {tags} = this.props;
        return (
            <div>
                <div className='tags-content'>
                    <Card title="豆瓣成员常用的标签(共3880个)  · · · · · ·" bordered={false} style={{ width: 600 }} headStyle={{ border: "none", marginBottom: -31, color: "green" }}>
                       <ul>
                            {
                                tags.map((item, index)=>
                                    <li key={"tag"+index}>
                                        <a href="">{item.title}</a>
                                    </li>
                                )
                            }
                            
                       </ul>
                    </Card>
                </div>
            </div>
        );
    }
}