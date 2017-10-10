import React from 'react';
// import { Router, Route, IndexRoute } from 'react-router';
import {  BrowserRouter as Router, Route}  from 'react-router-dom';
import {
  App,
  Ajax,
  flexTest,
  ListViews,
  tabBars,
  NavBarTest,
  SegmentedControlTest,
  tabsTest,
  formTest,
  dataDisplay,
  cssTs
} from './containers';

const Home = ()=>(
  <div>
    <h2>Home</h2>
  </div>
  )

export default (
  <Router>
    <Route exact path="/" component={Home} /> 
</Router>
);
