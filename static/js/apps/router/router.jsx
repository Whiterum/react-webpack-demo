import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';

import Index from '../components/index';

class Roots extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

const test = (location, callback) => {
    callback(null, require('../components/test').default)
}

const demo01 = (location, callback) => {
    callback(null, require('../components/demo/reactDemo').default)
}


const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;


const routerConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={Index} />
            <Route path="index" component={Index} />
            <Route path="test" getComponent={test} />
            <Route path="reactDemo" getComponent={demo01} />
            <Redirect from='*' to='/' />
        </Route>
    </Router>
)

export default routerConfig
