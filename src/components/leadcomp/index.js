import React from 'react';
import './index.less';

class LeadComp extends React.Component {
    state = {
        value : ''
    }
    handleChange = (e)=> {
        // console.log('导语输入框的内容改变：',e.target.value);
        this.setState({
            value: e.target.value
        });
        this.props.onchange(e.target.value);
    }
    render() {
        return (
            <div>
                <input type="text" 
                    placeholder='添加导语（最多140个字）'
                    className='input-lead'
                    onChange={this.handleChange}
                    value={this.state.value}
                />
            </div>
        );
    }
}
export  default LeadComp ;