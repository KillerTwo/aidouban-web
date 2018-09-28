import React from 'react';
import './index.less';

class SearchRight extends React.Component {
    render() {
        return (
            <div className='search-operator'>
                <div className='add-book'>
                    <span className='title'>添加豆瓣没有的图书· · · · · ·</span>
                    <ul>
                        <li>
                            <a href="">
                                <span>> 添加书籍</span>  <span>平凡的世界</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>> 添加作者</span>  <span>平凡的世界</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>> 添加杂志</span>  <span>平凡的世界</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>> 添加丛书</span>  <span>平凡的世界</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='relevant-search'>
                    <span className='title'>相关搜索· · · · · ·</span>
                    <ul>
                        <li>
                            <a href="">
                                <span>> 搜索'平凡的世界'的电影</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>> 搜索'平凡的世界'的音乐</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>> 搜索'平凡的世界'的舞台剧</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='aws-search'>
                    <span className='title'>亚马逊搜索· · · · · ·</span>
                    <ul>
                        <li>
                            <a href="">
                                <span>> 中国Amazon搜索</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>> 美国Amazon搜索</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>> 英国Amazon搜索</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>> 德国Amazon搜索</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>> 日本Amazon搜索</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>> 法国Amazon搜索</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>> 加拿大Amazon搜索</span>
                            </a>
                        </li>
                    </ul>
                </div>
                
            </div>
        );
    }
}

export default SearchRight;