import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LiveRoute from 'react-live-route';


import App from './../App';
import Home from '../pages/Home';

import DetailPage from '../pages/detailpage';
import SearchResult from '../pages/searchreasult';
import WriteComPages from '../pages/writecompages';

export default class Routers extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <App>
                            {/* <Route path='/search/home' render={()=>
                                    <Home />
                            }/> */}
                            <Route path='/search' render={()=>
                                    <Home>
                                        {/* <Route path='/search/list' component={SearchResult}/> */}
                                        <LiveRoute path="/search/list" livePath="/search/detail" component={SearchResult} />
                                        {/* <Route path='/search/detail' component={DetailPage}/> */}
                                        <LiveRoute path="/search/detail" livePath="/comments/writes" component={DetailPage} />
                                    </Home>
                            }/>
                            {/* <LiveRoute path="/search/detail" livePath="/comments/writes"/> */}
                            <Route path='/comments/writes' component={WriteComPages}/>
                        </App>
                    </Switch>  
                </Router>
            </div>
        );
    }
}