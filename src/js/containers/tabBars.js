import React from 'react';
import { TabBar, Icon, Grid}  from 'antd-mobile';

const icons = [
  'check-circle', 'check', 'check-circle-o',
  'cross-circle', 'cross', 'cross-circle-o',
  'up', 'down', 'left',
  'right', 'ellipsis',
  'koubei-o', 'koubei', 'loading',
];


export default class tabBars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	selectedTab:'redTab',
    	hidden:false
    }
  }

  render() {
  const data = icons.map(item => ({
    icon: (<Icon type={item} />),
    text: item,
  }))
    return (
      <TabBar 
      unselectedTintColor="#949494"
      tintColor="#33a3f4"
      barTintColor='withe'
      hidden={this.state.hidden}
      >
         <TabBar.Item
         title='生活'
         key='生活'
         icon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />
      	  }
      	  selected={this.state.selectedTab === 'blueTab'}
      	  badge={1}
      	  onPress={()=>{
      	  	this.setState({
      	  		selectedTab:'blueTab'
      	  	})
      	  }}
      	  data-seed="logId"
          >
          <div>生活</div>
         </TabBar.Item>
         <TabBar.Item
			icon={<Icon type='koubei-o' size="md" />}
          	selectedIcon={<Icon type='koubei' size="md" />}
         	title="口碑"
         	key="口碑"
         	badge={'new'}
         	selected={this.state.selectedTab === 'redTab'}
         	onPress={()=>{
         		this.setState({
         			selectedTab:'redTab'
         		})
         	}}
         	data-seed='logId1'
         	>
         	<div>口碑</div>
          <Grid data={data} columnNum={3} hasLine={false} />
         	
         </TabBar.Item>
         <TabBar.Item
		icon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.42rem 0.42rem no-repeat' }}
            /> }
            title="朋友"
         	key="朋友"
         	dot
         	selected={this.state.selectedTab === 'greenTab'}
         	onPress={()=>{
         		this.setState({
         			selectedTab:'greenTab'
         		})
         	}}
         	data-seed='logId2'
         	>
         	<div>朋友</div>
         	
         </TabBar.Item>
            <TabBar.Item
  			icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
          	selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="我的"
         	key="我的"
         	dot
         	selected={this.state.selectedTab === 'yellowTab'}
         	onPress={()=>{
         		this.setState({
         			selectedTab:'yellowTab'
         		})
         	}}
         	>
         	<div>我的</div>
         	
         </TabBar.Item>   	
      </TabBar>
    );
  }
}
