import React from 'react';
import ReactDOM from 'react-dom'
import { hashHistory,Router } from 'react-router';

import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory'



import routes from './routes';
import configureStore from './store/configureStore';


import 'style/index.css'

import Home from './containers/Home';


const store = configureStore();



ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>),
document.getElementById('app'),
);

