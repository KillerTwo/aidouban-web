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
                    <span style={{ fontSize: 22,color: '#000' }}>rating</span>
                    <div className='star-rate'>
                    <ul >
                        <li style={{ backgroundColor: 'red' }}><span style={{ fontSize: 24, marginRight: 5,
                                position: "relative",
                                top: 20,
                                fontSize: 25,
                                lineHeight: 0
                        }}>7.5</span>
                                    <ul style={{
                                        position: "relative",
                                                top: -21}}>
                                    <li style={{ backgroundColor: 'green' }}><Rate allowHalf disabled value={this.props.rating} style={{ fontSize: 16 }}/></li>
                                    <li style={{ backgroundColor: 'blue' }}><a href="" style={{display: "block"}}>559138人评价</a></li>
                                    </ul> 
                        </li>
                    </ul>
                        <span style={{ fontSize: 24, marginRight: 5 }}>7.5</span>
                        <div style={{display: "inline-block"}}>
                            <Rate allowHalf disabled value={this.props.rating} style={{ fontSize: 16 }}/>
                            <a href="" style={{display: "block"}}>559138人评价</a>
                        </div>
                    </div>
                    
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