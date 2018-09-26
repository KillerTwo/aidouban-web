import React from 'react';
import './index.less';
import { Menu, Dropdown, Icon, Card, Avatar } from 'antd';


const { Meta } = Card;
export default class DBHeader extends React.Component {
    
    handleMenuClick = (e)=>{
        console.log(e);
    }

    render() {
        const menu = (
            <Menu onClick={this.handleMenuClick}>
              <Menu.Item>
                <a href="#">个人主页</a>
              </Menu.Item>
              <Menu.Item>
                <a  href="#">我的订单</a>
              </Menu.Item>
              <Menu.Item>
                <a  href="#">我的钱包</a>
              </Menu.Item>
              <Menu.Item>
                <a href="#">账号管理</a>
              </Menu.Item>
              <Menu.Item>
                <a href="#">退出</a>
              </Menu.Item>
            </Menu>
        );

        return (
            <div className="header">
                <ul className="nav-left-ul">
                    <li>
                        <a href="">豆瓣</a>
                    </li>
                    <li>
                        <a href="">读书</a>
                    </li>
                    <li>
                        <a href="">电影</a>
                    </li>
                    <li>
                        <a href="">音乐</a>
                    </li>
                    <li>
                        <a href="">同城</a>
                    </li>
                    <li>
                        <a href="">小组</a>
                    </li>
                    <li>
                        <a href="">阅读</a>
                    </li>
                    <li>
                        <a href="">FM</a>
                    </li>
                    <li>
                        <a href="">时间</a>
                    </li>
                    <li>
                        <a href="">豆品</a>
                    </li>
                    <li>
                        <a href="">更多</a>
                    </li>
                </ul>
                <ul className="nav-right-ul">
                    <li>
                        <Dropdown overlay={
                            <Menu>
                                <Menu.Item >
                                <Card
                                    bordered={false}
                                    bodyStyle={{
                                        width:80,
                                        height: 160
                                    }}
                                    cover={<img alt="example" src="/nav_doubanapp_6.png" />}
                                >
                                    <div style={{ marginBottom: 15, fontSize: 18 }}>
                                        <span>豆瓣</span>
                                    </div>
                                    <Meta
                                        style={{ width:100,height:80, marginLeft: -5 }}
                                        avatar={<Avatar style={{
                                            width:80,
                                            height: 80
                                        }} 
                                        src="/nav_doubanapp_6_qrcode.png" shape="square"/>}
                                    />
                                </Card>
                                </Menu.Item>
                            </Menu>
                        }>
                            <a href="#">下载豆瓣客户端</a>
                        </Dropdown>
                    </li>
                    <li><a href="#">提醒</a></li>
                    <li>
                        <a href="">豆邮</a>
                    </li>
                    <li>
                        <Dropdown overlay={menu} trigger={["click"]}>
                            <a className="ant-dropdown-link" href="#">
                            alice的账号 <Icon type="down" />
                            </a>
                        </Dropdown>
                    </li>
                </ul>
            </div>
        );
    }
}