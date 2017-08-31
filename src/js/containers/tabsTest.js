import React from 'react';
import {Tabs, WhiteSpace} from 'antd-mobile';

const TabPane = Tabs.TabPane;

export default class tabsTest extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  callback(key){
  	console.log('onChange',key)
  }
  handleTabClick(key){
  	console.log('onTabClick',key)
  }
  render() {
    return (
      <div>
   <WhiteSpace />
    <Tabs 
    defaultActiveKey="3" 
    animated={false} 
    pageSize={4}
    onChange={this.callback} 
    onTabClick={this.handleTabClick}>
      <TabPane tab="First tab" key="1">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
           Content of First Tab
        </div>
      </TabPane>
      <TabPane tab="Second Tab" key="2">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
           Content of Second Tab
        </div>
      </TabPane>
      <TabPane tab="Third Tab" key="3">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
           Content of Third Tab
        </div>
      </TabPane>
            <TabPane tab="Third Tab" key="4">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
           Content of 4 Tab
        </div>
      </TabPane>
            <TabPane tab="Third Tab" key="5">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
           Content of 5 Tab
        </div>
      </TabPane>
            <TabPane tab="Third Tab" key="6">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
           Content of 6 Tab
        </div>
      </TabPane>
    </Tabs>
    <WhiteSpace />
      </div>
    );
  }
}
