import React from 'react';
import './index.less';
import { Button, Rate, Icon } from 'antd';
import { withRouter } from 'react-router-dom';

 
class RecommendsCop extends React.Component {
    state = {
        value: 0,
        status: '',
    }
    handleChange = (value)=>{
        
        let status = "";
        switch (value) {
            case 0:
            case 1:
                status = "很差";
                break;
            case 2:
                status = "较差";
                break;
            case 3: 
                status = "还行";
                break;
            case 4:
                status = "推荐";
                break;
            case 5:
                status = "力荐"
            default:
                break;
        }
        this.setState({ 
            value,
            status
        });
    }
    handleHover = (value)=>{
        let status = "";
        switch (value) {
            case 0:
            case 1:
                status = "很差";
                break;
            case 2:
                status = "较差";
                break;
            case 3: 
                status = "还行";
                break;
            case 4:
                status = "推荐";
                break;
            case 5:
                status = "力荐"
            default:
                break;
        }
        this.setState({ 
            value,
            status
        });
    }
    handleWriteComment = ()=>{
        console.log('点击写书评。。。');
        let isbn = this.props.isbn;
        let path = { pathname: '/comments/writes', state: {
            isbn: isbn
            } }
       this.props.history.push(path);
    }
    render() {
        const {value, status} = this.state;
        console.log('value is ', value);
        return (
            <div className="content-operator">
                <div className="operator-top">
                    <Button size="small" style={{ backgroundColor: "rgba(249, 219, 140, 0.99)",marginRight: 5 }} >想读</Button>
                    <Button size="small" style={{ backgroundColor: "rgba(249, 219, 140, 0.99)",marginRight: 5 }}>在读</Button>
                    <Button size="small" style={{ backgroundColor: "rgba(249, 219, 140, 0.99)",marginRight: 5 }}>读过</Button>
                    <span style={{ marginLeft: 5 }}>
                        <span style={{ marginRight: 5 }}>评价: </span>
                        <Rate onChange={this.handleChange} onHoverChange={this.handleHover} value={value} />
                        {value > 0 && <span className="ant-rate-text">{status} </span>}
                    </span>
                </div>
                
                <div className="operator-buttom">
                    <ul>
                        <li>
                            <Icon type="edit" theme="outlined" /><a >写笔记</a>
                        </li>
                        <li>
                            <Icon type="edit" theme="outlined" /><a onClick={this.handleWriteComment}>写书评</a>
                        </li>
                        <li>
                            <a >加入购书单</a>
                        </li>
                        <li>
                            <Icon type="plus" theme="outlined" /><a >添加到豆列</a>
                        </li>
                        <li>
                            <a >分享到</a>
                        </li>
                        <li style={{float: "right"}}>
                            <Button size="small" style={{ backgroundColor: "rgba(234, 247, 242, 0.99)",color:"rgba(47, 175, 126, 0.99)",marginRight: 5 }} >推荐</Button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default withRouter(RecommendsCop);