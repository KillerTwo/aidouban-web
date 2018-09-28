import React from 'react';
import './index.less';

import { List, Row, Col } from 'antd';
import ListItem from './../../components/listitem';
import SearchRight from '../../components/searchright';

class SearchResult extends React.Component {

    state = {
        results: [],
    };
    componentDidMount() {
        this.setState({
            results: this.props.location.state.data
        });
    }
    render() {
        //let results = this.props.location.state.data
        let {results} = this.state;
        console.log(results);
        return (
            <div>
                <Row>
                    <Col span={12} offset={6}>
                    {
                        (
                        <List
                            itemLayout="horizontal"
                            dataSource={results}
                            renderItem={info => (
                            <List.Item>
                                <ListItem info={info} />
                            </List.Item>
                            )}
                        />
                        )
                    }
                    </Col>
                    <Col span={6}>
                        <SearchRight />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SearchResult;