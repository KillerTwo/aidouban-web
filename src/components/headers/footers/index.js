import React from 'react'
import './index.less';
import {Divider, Icon} from 'antd';
export default class HeaderFooter extends React.Component {
    render() {
        return (
            <div>
                <Divider style={{ color: "grey", margin: 0, backgroundColor: 'rgb(197, 190, 190)' }} />
                <div className="header-footer">
                
                <ul>
                    <li>
                        <a href="">我读</a>
                    </li>
                    <li>
                        <a href="">动态</a>
                    </li>
                    <li>
                        <a href="">豆瓣猜</a>
                    </li>
                    <li>
                        <a href="">分类浏览</a>
                    </li>
                    <li>
                        <a href="">购书单</a>
                    </li>
                    <li>
                        <a href="">电子图书</a>
                    </li>
                    <li>
                        <a href="">豆瓣书店</a>
                    </li>
                    <li>
                        <a href="">2017年度榜单</a>
                    </li>
                    <li>
                        <a href="">2017读书报告</a>
                    </li>
                    <li>
                        <Icon type="shopping-cart" theme="outlined" /><a href="">购物车</a>
                    </li>
                </ul>
            </div>
            </div>
            
        );
    }
}