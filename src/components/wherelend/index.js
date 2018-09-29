import React from 'react';
import './index.less';
import { Card } from 'antd';

class WhereLend extends React.Component {
    render() {
        return (
            <div className='where-lend'>


                <Card
                    title="在哪儿借这本书  · · · · · ·"
                    style={{ width: 355, backgroundColor: '#f6f6f1' }}
                    headStyle={{ color: '#007722', border: 'none', }}
                    bodyStyle={{ margin: 0, paddingTop: 0 }}
                >   
                    <ul>
                        <li>
                            <a>北京市公共图书馆(6)</a>
                        </li>
                        <li>
                            <a>上海市中心图书馆(29)</a>
                        </li>
                        <li>
                            <a>广州其他馆藏(1)</a>
                        </li>
                        <li>
                            <a>江阴市图书馆</a>
                        </li>
                        <li>
                            <a>上海交通大学图书馆</a>
                        </li>
                        <li>
                            <a>温州市图书馆</a>
                        </li>
                        <li>
                            <a>重庆图书馆</a>
                        </li>
                        <li>
                            <a>广东省立中山图书馆</a>
                        </li>
                    </ul>
                </Card>
            </div>
        );
    }
}
export default WhereLend;