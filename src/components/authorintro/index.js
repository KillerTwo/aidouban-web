import React from 'react'
import { Card } from 'antd';
export default class AuthorIntro extends React.Component {
    render() {
        return (
            <div>
                 <div>
                    <Card title="作者简介. . . . . ." bordered={false} style={{ width: 600 }} headStyle={{ border: "none", marginBottom: -31, color: "green" }}>
                        <p style={{ textIndent: 21}}>
                            {this.props.authorIntro}
                        </p>
                    </Card>
                </div>
            </div>
        );
    }
}