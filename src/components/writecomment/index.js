import React from 'react';
import './index.less';
import { Row, Col, Button, Icon  } from 'antd';

class WriteComments extends React.Component {
    state = {
        isFull : false,
    }
    // 点击进入全屏幕
    fullScreen = ()=>{
        let de = document.documentElement;
        if (de.requestFullscreen) {
            de.requestFullscreen();
        } else if (de.mozRequestFullScreen) {
            de.mozRequestFullScreen();
        } else if (de.webkitRequestFullScreen) {
            de.webkitRequestFullScreen();
        }
        this.setState({
            isFull: true,
        });
    }
    // 退出全屏
    exitFullscreen = () => {
        console.log('exitFullscreen')
        var de = document;
        if (de.exitFullscreen) {
            de.exitFullscreen();
        } else if (de.mozCancelFullScreen) {
            de.mozCancelFullScreen();
        } else if (de.webkitCancelFullScreen) {
            de.webkitCancelFullScreen();
        }
        this.setState({
            isFull: false,
        });
    };
    // handleClickSetup = ()=>{
    //     console.log('点击下一步。。。');
    // }

    render() {
        let {isFull} = this.state; 
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <div className='nav-comments' style={{ backgroundColor: '#f8f8f8', width: '100%', height: 39 }}>
                            <ul style={{ position:"absolute", left: "23%" }}>
                                <li style={{ marginTop: 4 }}>
                                    <span ><a style={{ color: 'green', fontSize: 20,marginRight: 9 }}>豆瓣</a></span>
                                    <span style={{ color: 'rgb(167, 165, 165)', fontSize: 15 }}>. 写评论</span>
                                </li>
                            </ul>
                            <ul style={{ position: "absolute",left: 821 }}>
                                <li style={{ marginRight: 20 }}>
                                    <span style={{ cursor: 'pointer' }}>字数</span>
                                </li>
                                <li>
                                    {/* 点击全屏 */}
                                    {
                                        !isFull ? <span onClick={this.fullScreen} style={{ cursor: 'pointer', fontSize: 16 }}>
                                                    <Icon type="fullscreen" theme="outlined" />
                                                </span> :
                                                <span onClick={this.exitFullscreen} style={{ cursor: 'pointer', fontSize: 16 }}>
                                                    <Icon type="fullscreen-exit" theme="outlined" />
                                                </span>
                                    }
                                    
                                    
                                </li>
                            </ul>
                               
                            <ul style={{ position: 'absolute', right: 0, }}>
                                <li style={{ marginRight: 20,fontSize:15, cursor: 'pointer' }}>预览</li>
                                <li style={{ margin: 0 }}>
                                    <Button style=
                                        {{ 
                                            backgroundColor: 'rgb(6, 160, 6)',
                                            height: 39,
                                            borderRadius: 0,
                                            color: '#fff' 
                                        }}
                                        onClick = {()=>{
                                            this.props.onclick()
                                        }}
                                        >
                                        下一步
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default WriteComments;