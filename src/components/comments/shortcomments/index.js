import React from 'react'
import './index.less';
import { List, Rate, Button, Breadcrumb  } from 'antd';

const data = [
    {
      title: '应该拿诺贝尔文学奖的巨著，缺乏犀利严峻现实题材的中国，有这样的小说实在是凤毛麟角，更凸显其可贵。最难得的一点是，文笔还特别舒服。',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];
  
export default class ShortComment extends React.Component {


    handleClassify = (e)=>{
        e.stopPropagation()
        //e.defaultPrevented = false;
        console.log('按类别显示短评',e.target);
        // console.log('按类别显示短评',e.currentTarget);
        e.preventDefault();
    }
    handleComment = ()=>{
        console.log("我来说两句");
    }
    handlePerson = (e)=>{
        console.log(e.target.text);
    }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                 <List
                    header={
                        <div>
                            <span style={{ color: "green", fontSize: 16 }}>短评  · · · · · ·  ( </span><span ><a style={{ color: "#004B97" }}>全部 29622 条</a>)</span> 
                            <Button icon="edit" 
                                style={{ 
                                backgroundColor: "rgb(245, 226, 216)", 
                                color: 'rgb(189, 81, 29)', width: 130,
                                height: 26,
                                position: "absolute",
                                right: 0
                                }}
                                onClick={this.handleComment}
                                >
                                我来说两句
                                </Button>
                                <div style={{marginTop: 5}}>
                                    <Breadcrumb>
                                        <Breadcrumb.Item><a onClick={this.handleClassify}>热门</a></Breadcrumb.Item>
                                        <Breadcrumb.Item><a onClick={this.handleClassify}>最新</a></Breadcrumb.Item>
                                        <Breadcrumb.Item><a onClick={this.handleClassify}>好友</a></Breadcrumb.Item>
                                    </Breadcrumb>
                                </div>
                        </div>
                    }
                    itemLayout="vertical"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <div>
                                <span style={{ color: "rgb(47, 125, 150)", marginRight: 2, cursor: "pointer" }} onClick={this.handlePerson}>作者</span>
                                <Rate disabled defaultValue={2} style={{ fontSize: 12 }}/>
                                <span>2018-9-27</span>
                                <div style={{display:"inline-block",position:"absolute",right: 0}}>
                                    <span>618</span><a href="" style={{ color: "rgb(47, 125, 150)", marginLeft: 2 }}>有用</a>
                                </div>
                                
                            </div>
                            <div style={{ position: "relative", top:10 }}>
                                {item.title}
                            </div>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}