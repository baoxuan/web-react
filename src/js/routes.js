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
  Home,
  cssTs
} from './containers';


export default (
  <Router>
    <Route exact path="/" component={Home} /> 
    <Route path="Ajax"  component={Ajax} /> 
    <Route path="ListViews"  component={ListViews} /> 
    <Route path="tabBars"  component={tabBars} /> 
    <Route path="flexTest"  component={flexTest} /> 
    <Route path="NavBarTest"  component={NavBarTest} /> 
    <Route path="SegmentedControlTest"  component={SegmentedControlTest} /> 
    <Route path="tabsTest"  component={tabsTest} /> 
    <Route path="formTest"  component={formTest} /> 
    <Route path="dataDisplay"  component={dataDisplay} /> 
    <Route path="cssTs"  component={cssTs} /> 
</Router>
);
