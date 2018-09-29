import React from 'react';
import './index.less';
import DetailsCop from '../../components/detailsComponent';
import { Row, Col } from 'antd';
import RecommendsCop from './../../components/recommends';
import BookItem from '../../components/bookitem';
import ContentIntro from '../../components/contentintro';
import AuthorIntro from '../../components/authorintro';
import TagIntro from '../../components/tagintro';
import SerieBook from '../../components/seriebooks';
import ShortComment from '../../components/comments/shortcomments';
import LongComment from '../../components/comments/longShort';
import DoubanSell from '../../components/doubansell';
import OtherEdition from '../../components/otheredition';
import WhereLend from '../../components/wherelend';
import OtherEditionList from '../../components/othereditionlist';
import DoubanRecommend from '../../components/doubanrecommends';
import WhoRead from '../../components/whoread';
import UsedMarket from '../../components/usedmarket';



class DetailPage extends React.Component {

    state = {
        detail: {
            
        },
        rating: {},
        authorIntro: '',
        summary: '',
        img: '',
        tags: [],
    };

    componentDidMount() {
        let results = this.props.location.state;
        console.log('从路由接收到的信息; ',results);
        this.setState({
            detail: results.detail,
            rating: results.rating,
            img: results.img,
            summary: results.summary,
            authorIntro: results.authorIntro,
            tags: results.tags,
        });
    }

    render() {
        // 喜欢读平凡的世界的人也喜欢的电子书
        const books = [
            {
                title: '追风筝的人',
                img: '/1162265.jpg',
                price: '9.99'
            },
            {
                title: '少年Pi的奇幻漂流',
                img: '/407582.jpg',
                price: '5.99'
            },
            {
                title: '三国演义',
                img: '/10918334.jpg',
                price: '5.40'
            },
            {
                title: '论文艺女青年如何培养女王气场',
                img: '/316702.jpg',
                price: '1.99'
            },
            {
                title: '7天治愈拖延症',
                img: '/393187.jpg',
                price: '5.00'
            },
            
        ];
        // 喜欢读平凡的世界的人还喜欢读的书
        const realBooks = [
            [
                {
                    title: '活着',
                    img: '/s23836852.jpg',
                },
                {
                    title: '穆斯林的葬礼',
                    img: '/s1790771.jpg',
                },
                {
                    title: '红楼梦',
                    img: '/s1070959.jpg',
                },
    
                {
                    title: '许三观卖血记',
                    img: '/s1074291.jpg',
                },
                {
                    title: '飘',
                    img: '/s1078958.jpg',
                },
            ],
            [
                {
                    title: '小王子',
                    img: '/s1103152.jpg',
                },
                {
                    title: '边城',
                    img: '/s1595557.jpg',
                },
                {
                    title: '白鹿原',
                    img: '/s9137567.jpg',
                },
    
                {
                    title: '简爱（英文全本）',
                    img: '/s5924326.jpg',
                },
                {
                    title: '围城',
                    img: '/s1070222.jpg',
                }
            ]
        ];

        return (
            <div>
                <Row>
                    <Col span={18}>
                        <Row>
                            <Col span={24}>
                                <DetailsCop detail={this.state.detail} rating={this.state.rating} imgUrl={this.state.img} />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={18} offset={5}>
                                <RecommendsCop />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={18} offset={5}>
                                <ContentIntro summary={this.state.summary} />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={18} offset={5}>
                                <AuthorIntro authorIntro={this.state.authorIntro} />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={18} offset={5}>
                                <TagIntro tags={this.state.tags} />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={18} offset={5}>
                                <SerieBook />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={18} offset={5}>
                                <div style={{ marginBottom: 35 }}>
                                    <span style={{ color:"green", fontSize: 16 }}>喜欢读"平凡的世界（全三部）"的人也喜欢的电子书  · · · · · ·</span>
                                    <span style={{ position: "relative",top:20,left:-411 }}>支持 Web、iPhone、iPad、Android 阅读器</span>
                                </div>
                                <div className='phonto-row'>
                                    {
                                        books.map((item,index)=>
                                        <div style={{ display: 'inline-block', marginRight: 10 }}>
                                            <BookItem bookImg={item.img} bookName={item.title} bookPrice={item.price}/>
                                        </div>
                                        )
                                    }
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={18} offset={5}>
                                <div style={{ marginBottom: 35 }}>
                                    <span style={{ color:"green", fontSize: 16 }}>喜欢读"平凡的世界（全三部）"的人也喜欢  · · · · · ·</span>
                                </div>
                                {
                                    realBooks.map((item)=>
                                        <div className='phonto-row'>
                                            {
                                                item.map((book,index)=>
                                                    <div key={index} style={{ display: 'inline-block', marginRight: 10 }}>
                                                        <BookItem bookImg={book.img} bookName={book.title} />
                                                    </div>
                                                )
                                            }
                                        </div>
                                    )
                                }
                            </Col>
                        </Row>

                        <Row>
                            <Col span={16} offset={5}>
                                <ShortComment />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={16} offset={5}>
                                <LongComment />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={6} style={{ marginTop: 99 }}>
                        <div style={{ marginBottom: 22 }}>
                            <DoubanSell />
                        </div>
                        <div style={{ marginBottom: 22 }}>
                            <OtherEdition />
                        </div>
                        <div style={{ marginBottom: 22 }}>
                            <WhereLend />
                        </div>
                        <div style={{ marginBottom: 22 }}>
                            <OtherEditionList />
                        </div>
                        <div style={{ marginBottom: 22 }}>
                            <DoubanRecommend />
                        </div>
                        <div style={{ marginBottom: 22 }}>
                            <WhoRead />
                        </div>
                        <div style={{ marginBottom: 22 }}>
                            <UsedMarket />
                        </div>
                        
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DetailPage;