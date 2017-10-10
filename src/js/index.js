import React from 'react';
import ReactDOM from 'react-dom'
import {Router } from 'react-router';

import { Provider } from 'react-redux';

import createHistory from 'history/createHashHistory'
const history = createHistory()


import routes from './routes';
import configureStore from './store/configureStore';


import 'style/index.css'

// import Home from './containers/Home';
import Root from './Root';


const store = configureStore();



ReactDOM.render((
  <Provider store={store}>
    <Router history={history} >
      <Root />
    </Router>
  </Provider>),
document.getElementById('app'),
);

