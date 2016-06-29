import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import App from './components/App.jsx'
// import Home from './routes/home/index.jsx'
// import Message from './routes/message/index.jsx'
// import Article from './routes/article/index.jsx'
import store from './store'
injectTapEventPlugin();
render(
    <Provider store={store}>
    <div>
        <Router history = { hashHistory }>
            <Route path='/' component={App} >
                <IndexRoute getComponent={
                    (nextState ,cb) => {
                        require.ensure([] , (require) => {
                            cb(null,require('./routes/home/index.jsx'));
                        },'home');
                    }
                } />
                <Route path='/page(/:category)/:page' getComponent={
                    (nextState ,cb) => {
                        require.ensure([] , (require) => {
                            cb(null,require('./routes/home/index.jsx'));
                        },'home');
                    }
                } />
                <Route path='/message' getComponent={
                    (nextState ,cb) => {
                        require.ensure([] , (require) => {
                            cb(null,require('./routes/message/index.jsx'));
                        },'message');
                    }
                } />
                <Route path='/article/:article' getComponent={
                    (nextState ,cb) => {
                        require.ensure([] , (require) => {
                            cb(null,require('./routes/article/index.jsx'));
                        },'article');
                    }
                } />
            </Route>
        </Router>
    </div>
    </Provider>,
    document.getElementById('App')
)