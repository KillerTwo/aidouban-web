import React from 'react'
import { Rate } from 'antd';
import { Progress } from 'antd';
import { Card } from 'antd';

import './index.less';

export default class RateCop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Card style={{ width: 500 }} bordered={false}>
                <div className='container'>
                    <span style={{ fontSize: 14,color: '#ccc' }}>豆瓣评分</span>
                    <div className='star-rate'>
                        <ul className='ul-score'>
                            <li ><span>7.5</span>
                            </li>
                        </ul>
                        <ul>
                            <li ><Rate allowHalf disabled value={this.props.rating} style={{ fontSize: 14 }}/></li>
                            <li ><a href="" style={{fontSize:12,display: "block"}}>559138人评价</a></li>
                        </ul>
                        
                    </div>
                    <div style={{clear: 'both'}}></div>
                    <div className='rate-percent'>
                        <div className="item" >
                            <span className='star' >5星</span><Progress strokeLinecap="square" strokeColor={'#999'} strokeWidth={12} percent={75} />
                        </div>
                        <div className="item">
                            <span className='star'>4星</span><Progress strokeLinecap="square" strokeWidth={12} percent={55} />
                        </div>
                        <div className="item">
                            <span className='star'>3星</span><Progress strokeLinecap="square" strokeWidth={12} percent={55} />
                        </div>
                        <div className="item">
                            <span className='star'>2星</span><Progress strokeLinecap="square" strokeWidth={12} percent={45} />
                        </div>
                        <div className="item">
                            <span className='star'>1星</span><Progress strokeLinecap="square" strokeWidth={12} percent={35} />
                        </div>
                    </div>
                </div>
            </Card>
            
        );
    }
}