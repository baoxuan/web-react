import React, { PropTypes } from 'react';

import { Link } from 'react-router-dom';



class Home extends React.Component {


  render(){
    return (
      <div>
        <div><Link to="/Ajax">ajax </Link></div>
        <div><Link to="/ListViews">ListViews</Link></div>
        <div><Link to="/tabBars">tabBars</Link></div>
        <div><Link to="/flexTest">flexTest</Link></div>
        <div><Link to="/NavBarTest">NavBarTest</Link></div>
        <div><Link to="/SegmentedControlTest">SegmentedControlTest</Link></div>
        <div><Link to="/tabsTest">tabsTest</Link></div>
        <div><Link to="/formTest">formTest</Link></div>
        <div><Link to="/dataDisplay">dataDisplay</Link></div>
        <div><Link to="/cssTs">cssTs</Link></div>
      </div>
      )
   }
}



export default Home;


