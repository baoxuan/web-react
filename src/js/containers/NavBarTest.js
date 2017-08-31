import React from 'react';
import {NavBar, Icon, ActivityIndicator,Popover, Menu} from 'antd-mobile'

const data = [
  {
    value: '1',
    label: 'Food',
    children: [
      {
        label: 'All Foods',
        value: '1',
        disabled: false,
      },
      {
        label: 'Chinese Food',
        value: '2',
      }, {
        label: 'Hot Pot',
        value: '3',
      }, {
        label: 'Buffet',
        value: '4',
      }, {
        label: 'Fast Food',
        value: '5',
      }, {
        label: 'Snack',
        value: '6',
      }, {
        label: 'Bread',
        value: '7',
      }, {
        label: 'Fruit',
        value: '8',
      }, {
        label: 'Noodle',
        value: '9',
      }, {
        label: 'Leisure Food',
        value: '10',
      }],
  }, {
    value: '2',
    label: 'Supermarket',
    children: [
      {
        label: 'All Supermarkets',
        value: '1',
      }, {
        label: 'Supermarket',
        value: '2',
        disabled: true,
      }, {
        label: 'C-Store',
        value: '3',
      }, {
        label: 'Personal Care',
        value: '4',
      }],
  },
  {
    value: '3',
    label: 'Extra',
    isLeaf: true,// children 无效 
    children: [
      {
        label: 'you can not see',
        value: '1',
      },
    ],
  },
];

export default class NavBarTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	initData: '',
    	show: false,
    	visible: true,
    	selected: '',
    }
    this.leftClick = this.leftClick.bind(this)
    this.menuClick = this.menuClick.bind(this)
  }
  leftClick(){
  	console.log("leftClick");
  	this.props.router.goBack();
  }
  menuClick(){
  	this.setState({
  		show:!this.state.show
  	})

  	if(!this.state.initData){
  		setTimeout(()=>{
  			this.setState({
  				initData:data
  			})
  		},600)
  	}
  }

onChange = (value) => {
    let label = '';
    data.forEach((dataItem) => {
      if (dataItem.value === value[0]) {
        label = dataItem.label;
        if (dataItem.children && value[1]) {
          dataItem.children.forEach((cItem) => {
            if (cItem.value === value[1]) {
              label += ` ${cItem.label}`;
            }
          });
        }
      }
    });
    console.log(label);
  };

 onSelect = (opt) => {
    console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };

  handleVisibleChange = (visible) => {
  	console.log(1)
    this.setState({
      visible
    });
  };

  render() {

  	const {initData, show, visible} = this.state;
	  const menuEl = (
	  	<Menu
	  		className='foo-menu'
	  		data={initData}
	  		value={['1','3']} //初始值
	  		onChange={this.onChange}
	  		height={document.documentElement.clientHeight * 0.6}
	  	/>
	  	)
	  const loadingEl = (
	  	<div style={{
	  		width: '100%',
	  		height:document.documentElement.clientHeight * 0.6,
	  		display:'flex',
	  		justifyContent:'center'
	  	}}>
	  		<ActivityIndicator toast size="large" />
	  	</div>
	  )

 	let offsetX = -10; // just for pc demo
    if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
      offsetX = -26;
    }
    return (
      <div className= {show ? 'menu-active': ''}>
      	<NavBar 
      	mode='light'
      	onLeftClick={this.leftClick}
      	rightContent={
      		<Popover 
      			overlayClassName="forest"
      			visible={visible}
      			overlay={[
      				(<Popover.Item key='4' value='scan' icon={ <Icon type={require('svgsfile/scan.svg')} size='xs' />} > 扫一扫</Popover.Item> ),
      				(<Popover.Item key="6" value="button ct" icon={<Icon type={require('svgsfile/help.svg')} size="xs" />}>
		                <span style={{ marginRight: 5 }}>帮助</span>
		              </Popover.Item>)
      				]}
      			align={{
      				overflow:{adjustY:0, adjustX:0},
      				offset:[offsetX,15]
      			}}
      			onVisibleChange={this.handleVisibleChange}
            	onSelect={this.onSelect}

      		>
      		 <div style={{
              height: '100%',
              padding: '0 0.3rem',
              marginRight: '-0.3rem',
              display: 'flex',
              alignItems: 'center',
            }}
            >
              <Icon type="ellipsis" />
            </div>
      		</Popover>
      	}
      	>我是标题</NavBar>

      	<NavBar 
      	leftContent="Menu"
      	mode='dark'
      	iconName={require('svgsfile/koubei.svg')}
      	className="top-nav-bar"
      	onLeftClick={this.menuClick}>(左侧出菜单)</NavBar>
      	{show ? (initData ?  menuEl : loadingEl):null}
      </div>
    );
  }
}
