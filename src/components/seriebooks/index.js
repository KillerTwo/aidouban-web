import React from 'react';
import './index.less';
import { Card } from 'antd';

export default class SerieBook extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Card title="丛书信息" bordered={false} style={{ width: 600 }} headStyle={{ border: "none", marginBottom: -31, color: "green" }}>
                        <p style={{ textIndent: 21}}>
                        <a style={{color:"blue"}}>茅盾文学奖获奖作品全集 (共32册)</a>, 这套丛书还有 《暗算》,
                        《东藏记、南渡记、西征记――野葫芦引（全三卷）》,《第二个太阳》,《都市风流》,《无字》 等。
                        </p>
                    </Card>
                </div>
            </div>
        );
    }
}
