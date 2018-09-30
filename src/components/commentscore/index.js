import React from 'react';
import './index.less';
import { Rate } from 'antd';
class CommentScore extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value: 0,
            info: ''
        }
    }
    handleChange = (value) => {
        // this.setState({ value });
        let info  = '';
        switch (value) {
            case 1:
                info = '很差'
                break;
            case 2:
                info = '较差'
                break;
            case 3:
                info = '还行'
                break;
            case 4:
                info = '推荐'
                break;
            case 5:
                info = '力荐'
                break;
            default:
                break;
        }
        this.setState({
            value,
            info
        });
        this.props.onchange(value*2);
    }
    render() {
        const { info, value } = this.state;
         return (
             <div style={{  }}>
                 <span>
                     给个评价吧： 
                 </span>
                 <span style={{ fontSize: 14 }}>
                    <Rate onChange={this.handleChange} value={value} style={{ fontSize: 16 }} />
                    {info !== '' && <span className="ant-rate-text">{info}</span>}
                </span>
             </div>
         );
    }
}
export default CommentScore;