import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import App from './components/App.jsx'
import Home from './routes/home/index.jsx'
import Message from './routes/message/index.jsx'
import Article from './routes/article/index.jsx'

import store from './store'
import { Router, Route, IndexRoute } from 'react-router'
injectTapEventPlugin();
render(
    <Provider store={store}>
    <div>
        <Router>
            <Route path='/' component={App} >
                <IndexRoute component={Home} />
                <Route path='/page(/:category)/:page' component={Home} />
                <Route path='/message' component={Message} />
                <Route path='/article/:article' component={Article} />
            </Route>
        </Router>
    </div>
    </Provider>,
    document.getElementById('App')
)