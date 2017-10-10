import React from 'react';
// import { Router, Route, IndexRoute } from 'react-router';
import {  Route }  from 'react-router-dom';
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



const Root = () => {
  return(
    <div>
    <Route exact path="/" component={Home} /> 
    <Route exact path="/Ajax" component={Ajax} /> 
    <Route exact path="/flexTest" component={flexTest} /> 
    <Route exact path="/ListViews" component={ListViews} /> 
    <Route exact path="/tabBars" component={tabBars} /> 
    <Route exact path="/NavBarTest" component={NavBarTest} /> 
    <Route exact path="/SegmentedControlTest" component={SegmentedControlTest} /> 
    <Route exact path="/tabsTest" component={tabsTest} /> 
    <Route exact path="/formTest" component={formTest} /> 
    <Route exact path="/dataDisplay" component={dataDisplay} /> 
    <Route exact path="/cssTs" component={cssTs} /> 
    </div>
    )
}


export default Root;
