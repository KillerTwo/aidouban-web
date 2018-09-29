import React from 'react';
import './index.less';
import { Card } from 'antd';

class OtherEditionList extends React.Component {
    render() {
        return (
            <div className='other-list'>
                <Card
                    title={<span>这本书的其他版本  · · · · · ·  (<a className='a-hover' >全部30</a>  )</span>}
                    style={{ width: 355}}
                    headStyle={{ color: '#007722', border: 'none', }}
                    bodyStyle={{ margin: 0, paddingTop: 0 }}
                    bordered={false}
                >   
                    <ul>
                        <li>
                            <a className='a-hover'>北京十月文艺出版社版 2009-1</a> / 28353人读过 / 有售
                        </li>
                        <li>
                            <a className='a-hover' >北京出版集团公司,北京十月文艺出版社版</a> 2012-3-1 / 19103人读过 / 有售
                        </li>
                        <li>
                            <a className='a-hover'>人民文学出版社版</a> 1990-1-1 / 13692人读过
                        </li>
                        <li>
                            <a className='a-hover'>京十月文艺出版社版</a> 2013-5 / 13526人读过
                        </li>
                    </ul>
                </Card>
            </div>
        );
    }
}
export default OtherEditionList;