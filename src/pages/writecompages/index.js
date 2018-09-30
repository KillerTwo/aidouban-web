import React from 'react';
import './index.less';
import { Row, Col, Input  } from 'antd';
import WriteComments from '../../components/writecomment';
import CommentBookItem from '../../components/commentbook';
import CommentScore from '../../components/commentscore';
import LeadComp from '../../components/leadcomp';
import Editor from '../../components/editor';
class WriteComPages extends React.Component {
    // 书籍的isbn通过路由参数传递过来。
    state = {
        value: '',
        comment: {
            average: '',
            title: '',
            lead: '',
            content: '',
            isbn: '',
        },
        editorContent: ''
    }
    componentDidMount() {
        let isbn = this.props.location.state.isbn;
        let comment = this.state.comment;
        comment.isbn = isbn;
        this.setState({
            comment
        });
    }
    // 点击获取标题内容
    handleChange = (e)=>{
        // console.log('获取标题文本框的内容： ',e.target.value);
        let comment = this.state.comment;
        comment.title = e.target.value;
        this.setState({
            value: e.target.value,
            comment
        });
    }
    // 点击获取评论的内容
    handleEditContent = (value)=>{
        // console.log('富文本器的内容被改变，现在的内容是：',value);
        let comment = this.state.comment;
        comment.content = value;
        this.setState({
            editorContent: value,
            comment
        });
    }
    // 点击进入下一步
    handleClickSetup = (value)=>{
        // console.log('点击下一步。。。');
        console.log('用户填写的完整内容是：',this.state.comment);
    }
    // 获取导语内容
    handleOnChange = (value)=>{
        // console.log('点击获取导语内容。',value);
        let comment = this.state.comment;
        comment.lead = value;
        this.setState({
            comment
        });
    }
    // 获取评分
    handleAverage = (value)=>{
        // console.log('获取评分：',value);
        let comment = this.state.comment;
        comment.average = value;
        this.setState({
            comment
        });
    }
     render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <WriteComments onclick={this.handleClickSetup} />
                    </Col>   
                </Row>      
                <Row>
                    <Col span={8} offset={6}>
                        <div style={{ marginTop: 27 }}>
                            <CommentBookItem />
                        </div>
                        
                    </Col>   
                </Row>   
                <Row>
                    <Col span={8} offset={6}>
                        <div style={{ marginTop: 27 }}>
                            <CommentScore onchange={this.handleAverage}/> 
                        </div>
                        
                    </Col>   
                </Row>   
                <Row>
                    <Col span={8} offset={6}>
                        <div style={{ marginTop: 27, border: 'none' }}
                        >
                             <input type="text" 
                                placeholder='添加标题'
                                className='input-comment'
                                onChange={this.handleChange}
                                value={this.state.value}
                             />
                        </div>
                    </Col>   
                </Row>   
                <Row>
                    <Col span={8} offset={6}>
                        <div style={{ marginTop: 20 }}>
                            <LeadComp onchange={this.handleOnChange} />
                        </div>
                    </Col>   
                </Row>
                <Row>
                    <Col span={8} offset={6}>
                        <div style={{ marginTop: 20 }}>
                            <Editor onchange={this.handleEditContent} />
                        </div>
                    </Col>
                </Row>
            </div>
        );
     }
}
export default WriteComPages;