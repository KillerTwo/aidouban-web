import React from 'react';
import './index.less';
import E from 'wangeditor';

class Editor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editorContent: '',
        }
    }
    componentDidMount() {
        const elem = this.refs.editorElem;
        const editor = new E(elem);

        // 配置菜单
        editor.customConfig.menus = [
            'head',  // 标题
            'bold',  // 粗体
            'fontSize',  // 字号
            'fontName',  // 字体
            'italic',  // 斜体
            'underline',  // 下划线
            'strikeThrough',  // 删除线
            'foreColor',  // 文字颜色
            'backColor',  // 背景颜色
            'link',  // 插入链接
            'list',  // 列表
            'justify',  // 对齐方式
            'quote',  // 引用
            'image',  // 插入图片
            'video',  // 插入视频
            'undo',  // 撤销
        ]

        editor.customConfig.onchange = html=>{
            console.log('内容发生变化。');
            this.setState({
                editorContent: html,
            });
            this.props.onchange(this.state.editorContent)
        }
        editor.create();
    }
    clickHandle = ()=>{
        console.log('获取内容。。');
        console.log(this.state.editorContent);
    }
    render() {
        return (
            <div>
                {/* 文本编辑器的位置 */}
                <div ref='editorElem' style={{textAlign: 'left',width:600,height:250}}>

                </div>
                {/* <button onClick={()=>{
                    this.props.onchange(this.state.editorContent);
                }}>获取内容</button> */}
            </div>
        );
    }
}
export default Editor;