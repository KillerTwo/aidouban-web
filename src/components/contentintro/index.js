import React from 'react';
import './index.less';
import { Card } from 'antd';
export default class ContentIntro extends React.Component {
    render() {
        return (
            <div>
                <Card title="内容简介. . . . . ." bordered={false} style={{ width: 600 }} headStyle={{ border: "none", marginBottom: -31, color: "green" }}>
                    <p style={{ textIndent: 21}}>
                        {this.props.summary}
                    </p>
                </Card>
            </div>
        );
    }
}