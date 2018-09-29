import React from 'react';
import './index.less';
import { Collapse, Breadcrumb } from 'antd';

import { List, Avatar, Rate, Icon, Button  } from 'antd';


const Panel = Collapse.Panel;


export default class LongComment extends React.Component {
    state = {
        activity: [],
    };

    HandleUnfold = (index)=>{
        //console.log('点击展开');
        let activity = this.state.activity;
        activity.push(index);
        this.setState({
            activity
        });
    }
    handlePackup = (key)=>{
        let activity = this.state.activity;
        let index = activity.indexOf(key);
        // activity = activity.slice(index,1);
        activity.splice(index,1);
         this.setState({
             activity
         });
    }
    handleLongComment = ()=>{
        console.log('点击添加长评');
    }
    handleClassify = (e)=>{
        console.log('切换下显示条件。。。');
    }

    render() {
        
        const text = `
        从豆瓣读书上标记这本书在读到读完，过去了一年的时间，我总觉得这样一本厚书，不应该一下子读完，或者说是我没有那么好的耐心一下子读完。这一年也发生了好多事，一件事就是从大三到大四，从读书到工作，从青葱校园走向了一个苦逼堪言的工作岗位。

        我一直觉得处在什么阶段就应该读什么样的书，从小就逼着孩子们去读什么世界名著，他们是读不懂的，在没有了解那样一个历史背景的条件下，只会把这样当成一个故事，亦或者说在未成长起来形成自己的世界观之前，先让这种价值观捷足先登了。
        
        有些书，当你年少的时候读不懂的时候，那就好好珍藏着，会有一天，当你掸去书架上的灰尘时，当你读时，就会忽然读懂了，就像有些道理以前有人给你说了好多遍，但是等你走到人生那个时光的时候，不必再说，就会忽然懂了。
        
        扯远了，平凡的世界大概就是这是一本书，不管你处在人生的哪个阶段，读后都会有自己不同的感受，年少时体会孙少平读书的艰辛，青春体会孙少平喜欢郝红梅那种暗恋的懵懂，工作后体会那种孙少平工作时那种为了生活打拼的困难，还有田润叶的曲折的感情生活，还有以后要面对的如孙玉厚老汉面对生活近似卑微的绝望。
        
        的确，人生是不如意的，哪有那么多只要努力就会成功的例子，孙少安打拼了那么多年，最后刚开始开砖厂就被生活一下子打回了原形，他也曾对生活充满希望，但生活根本就不是你原先想的那个样子，就像我刚毕业，初入职场， 以前老师也是千叮咛万嘱咐，注意这，注意那。其实生活根本就不是你原先想的那个样子，有些事情，需要慢慢自己了解，有些苦需要自己默默承受。好在孙少安最后还是成功了，成功的由屌丝逆袭了高富帅，在一次村里小学的落成仪式上结束，风光体面，所有人都为他感到骄傲，可是，故事总是不完美的，陪他多年的糟糠之妻却被查出了癌症。
        
        是的，洋洋洒洒150万字，讲了多少个故事，这些故事被印在历史的记忆中，最终都汇聚了汨汨流动的长河。说是汨汨流动，而不是波澜壮阔，因为这些故事，本身就是平凡的，平凡到我们似乎可以看到自己的影子，比如田晓霞和孙少平经历了那么多困苦挫折，似乎最后终于可以在一起了，晓霞却为了救人被掠去了生命；郝红梅没有和青梅竹马的顾养民在一起，误跌误撞的最后和田润生在一起，而这之前，她已经是一个寡妇了；田润叶没有和她喜欢的少安哥哥在一起，最后和断了腿了李向前在一起，即使这之前，当向前还完美的时候，她的确很讨厌他；有时候命运就是这样的不公与戏谑，未来谁都不知道会变成什么样子，当初爱过的人不知道最后现在和谁在一起，现在陪你一起喝醉的人当初从没想到会是他。所以要好好珍惜，珍惜你曾经走过的每一段时光，因为后来你总会回忆，回忆那些曾经的遗失与美好。
        
        当然书中还讲了许多的政治活动，各种调动，田福堂，田福军，马国雄，乔伯年，总之，对这些人情冷暖，尔虞我诈，我是不感冒的，虽然我还是一个屁都不懂的大学毕业生，还未从那个所谓的象牙塔真正的解放出来，也许这些事情现在我看的是这么不屑，最后我还是会夹着尾巴求爷爷告奶奶般去求他们。总之，到那个时候再说吧。
        
        在我最孤独无助的时候，工作累单独乏味的时候，是描写孙少平的那些文字帮助了我，总之我觉得，我绝不是世界上最苦的那一个，在我不知道的某个角落，一定还有许多人承受着更多的苦，忍着我不能忍受的罪，而他们，不会叫苦不迭，他们，会把这些憋在心里，因为他们心里都有一份责任，这份责任，足以抵消到这么痛苦。
        
        当金波去高原上寻找那个一见钟情的姑娘时，也着实打动了我，就像老男孩唱的那首歌一样，那是我曾深爱的人呐，如今是什么模样？
        
        人生仅此一次，有时错过了就真的错过了。
        
        “不惋惜，不呼唤，我也不啼哭。金黄的落叶堆满心间，我已不再是青春少年。”最后用叶赛宁的诗句结尾，该长大了，总该长大了你总要面对这个世界，小时候梦想过的世界，没有那么美好，只不过是个平凡的世界。
            `;
        // 评论相关的数据信息
        const data = [
            {
                title: '对自尊的启蒙',
                summary: `书的开头，孙少平是个连“丙”菜都吃不起的穷困的农村学生；书的结尾，孙少平是个身有残疾的普普通通的煤矿工人。
                从头至尾，孙少平都没有能够脱离所谓的“社会底层”。可是时至今日，每每想起《平凡的世界》，
                想起孙少平这个平凡的人，这个人物身上的自尊都令.....`,
                content: text,
                author: 'etone',
                date: '2018-03-05 12:28:04',
                average: '10',
                up: '3816',
                down: '254',
                res: '406',
                photo: '/s5924326.jpg'

            },
            {
                title: '一本书好的标准是看能不能深刻影响人，深刻影响他们走向未来的方向',
                summary: `加入豆瓣本来就是在偶然的情况，在豆瓣我向来是不写读书笔记的，在这儿我只加入小组，
                聊天，谈笑，消除寂寞。现在的豆瓣也的确和很几年前不一样了，很多人来这儿都是为了填充寂寞，甚至YP。
                我抱着让自己不孤独心态来到豆瓣，自然也没什么好心。世俗了，现实了，是的，我不是文艺青年了，岁月流逝，我只空怀了颗.....`,
                content: text,
                author: '今心',
                date: '2012-11-28 20:52:05',
                average: '10',
                up: '1868',
                down: '100',
                res: '194',
                photo: '/407582.jpg'
            },
            {
                title: '遥有关的几句闲话',
                summary: `前些天正是路遥去世十五年的日子。著名的或非著名的大小人等纷纷撰文纪念。我赶个热闹，把一直想说的话一并说出吧.....`,
                content: text,
                author: '鲁任',
                date: '2007-11-24 22:16:42',
                average: '8',
                up: '1254',
                down: '121',
                res: '256',
                photo: '/316702.jpg'
            },
            {
                title: '平凡的世界',
                summary: `拖沓了许久的阅读，出于心理上的不连贯，对于感悟肯定是不利的。并且从阅读的方向来说，这样一部作品俨然不是我的选择。
                但是两个多月的时间为我做出了界定。
                路遥的故事是围绕孙玉厚一家展开的，老一辈辛勤耕.....`,
                content: text,
                author: '小D',
                date: '2008-10-04 16:26:22',
                average: '10',
                up: '720',
                down: '35',
                res: '93',
                photo: '/s1070222.jpg'
            },
        ];



        return (
            <div>
                <List
                    header={
                        <div className='long-comments'>
                            <span style={{ color: "green", fontSize: 16 }}>平凡的世界（全三部）的书评 · · · · · · ( </span><span ><a className='long-total' style={{ color: "#004B97" }}>全部 4603 条</a>)</span> 
                            <Button icon="edit" 
                                style={{ 
                                backgroundColor: "rgb(245, 226, 216)", 
                                color: 'rgb(189, 81, 29)', width: 130,
                                height: 26,
                                position: "absolute",
                                right: 0
                                }}
                                onClick={this.handleLongComment}
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
                    renderItem={(item,index) => (
                    <List.Item>
                        <div style={{ marginBottom: 10 }} >
                            <Avatar src={item.photo} shape='square' style={{ width: 21, height: 20, marginRight: 7 }} />
                            <span className='dis-color' >{item.author}</span>
                            <Rate disabled value={parseInt(item.average,10)/2} style={{ fontSize: 12, marginLeft: 7 }} />
                            <span>{item.date}</span>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                            <span className='dis-color' >{item.title}</span>
                        </div>
                        <div style={{ marginBottom: 18 }}>
                            {/* {keyPoint} */}
                            <div>
                                {
                                    index in this.state.activity ? item.content : <span style={{ cursor: 'pointer' }} onClick={()=>{this.HandleUnfold(index)}}>{item.summary}(<span className='dis-color' >展开</span>)
                                    </span>
                                }
                            </div>
                        </div>
                        <div>
                            <Button size='small' style={{ width: 63,height: 20, backgroundColor: '#e2f8f9' }}>
                                <Icon style={{ color: "rgb(82, 185, 180)", fontSize: 11}} type="caret-up" theme="outlined" />
                                <span>{item.up}</span>
                            </Button>
                            <Button size='small' style={{ width: 63,height: 20, backgroundColor: '#e2f8f9', marginLeft: 5 }}>
                                <Icon style={{ color: "rgb(82, 185, 180)", fontSize: 11}} type="caret-down" theme="outlined" />
                                <span>{item.down}</span>
                            </Button> 
                            <span className='dis-color' style={{ marginLeft: 10 }}>{item.res}回应</span>
                            {
                                index in this.state.activity && <span style={{ color: '#ccc', cursor: 'pointer', position: 'relative', right: -279 }} 
                                onClick={()=>{this.handlePackup(index)}}>
                                收起</span>
                            }
                            
                        </div>
                    </List.Item>
                    )}
                    style={{
                        width: 629
                    }}
                />
            </div>
        );
    }
}
