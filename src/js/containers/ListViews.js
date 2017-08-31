import React from 'react';
import { ListView } from 'antd-mobile';


const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];
let index = data.length - 1;

const NUM_ROWS = 20;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;


class ListViews extends React.Component {
	constructor(props){
		super(props)
		const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];
		const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
		// 使用ListView需要指定数据源  
		// 构造函数接受四种参数：
		// getRowData(dataBlob, sectionID, rowID)： 表明是何种方式从数据源dataBlob提取出rowData, sectionID用于指定每一个section的标题名
		// getSectionHeaderData(dataBlob, sectionID)：表明我们将以何种方式从dataBlob（数据源）中提取出HeaderData。HeaderData用于给每一个sectionHeader赋值
		// rowHasChanged(prevRowData, nextRowData)： 是指定更新rowd的策略
		// sectionHeaderHasChanged(prevSectionData, nextSectionData)：指定我们更新sectionHeader的策略
		// 为dataSource 传递数组的方法是使用 cloneWithRows()方法
	    const dataSource = new ListView.DataSource({
	    	getRowData,
	    	getSectionsHeaderData: getSectionData,
	      	rowHasChanged: (row1, row2) => row1 !== row2,
	      	sectionHeaderHasChanged: (s1, s2) => s1 !== s2
	    });

	    this.dataBlob = {};
	    this.sectionIDs = [];
	    this.rowIDs = [];

		this.genData = (pIndex = 0) => {
		      const dataBlob = {};
		      for (let i = 0; i < NUM_ROWS; i++) {
		        const ii = (pIndex * NUM_ROWS) + i;
		        const sectionName = `Section ${ii}`;
		        this.sectionIDs.push(sectionName);
		        this.dataBlob[sectionName] = sectionName;
		        this.rowIDs[ii] = [];

		        for(let jj=0; jj<NUM_ROWS_PER_SECTION; jj++){
		        	const rowName = `S${ii},R${jj}`;
		        	this.rowIDs[ii].push(rowName);
		        	this.dataBlob[rowName] = rowName;
		        }
		      }
		      this.sectionIDs = [].concat(this.sectionIDs);
		      this.rowIDs = [].concat(this.rowIDs);

		    };
		this.state = {
			dataSource: dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
			isLoading:true
		}
	}
  componentDidMount() {
    setTimeout(() => {
      this.genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
        isLoading: false,
      });
    }, 600);
  }

onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.genData(++pageIndex);
      this.setState({
		dataSource: this.state.dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
        
        isLoading: false,
      });
    }, 1000);
  }

	render(){
	const separator = (sectionID, rowID) => (
      <div key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
	    const row = (rowData, sectionID, rowID) => {
	      if (index < 0) {
	        index = data.length - 1;
	      }
	      const obj = data[index--];
	      return (
	        <div key={rowID} className="row">
	          <div className="row-title">{obj.title}</div>
	          <div style={{ display: '-webkit-box', display: 'flex', padding: '0.3rem 0' }}>
	            <img style={{ height: '1.28rem', marginRight: '0.3rem' }} src={obj.img} alt="icon" />
	            <div className="row-text">
	              <div style={{ marginBottom: '0.16rem', fontWeight: 'bold' }}>{obj.des}</div>
	              <div><span style={{ fontSize: '0.6rem', color: '#FF6E27' }}>{rowID}</span>¥</div>
	            </div>
	          </div>
	        </div>
	      );
	    };

		return (
			<div style={{ margin: '0 auto', width: '96%' }}>
				<ListView  ref="lv"
					dataSource={this.state.dataSource}
					renderHeader = {()=> <span>header</span>}
					renderFooter = {()=> (<div style={{ padding:30, textAlign:'center'}}>
							{this.state.isLoading ? 'Loading...': 'Loaded'}
						</div>)}
					renderSectionHeader={sectionData => (
			          <div>{`Task ${sectionData.split(' ')[1]}`}</div>
			        )}
					renderRow={row}
					renderSeparator={separator}
					className="am-list"
					pageSize={4}
			        useBodyScroll
			        onScroll={() => { console.log('scroll'); }}
			        scrollRenderAheadDistance={500}
			        scrollEventThrottle={200}
			        onEndReached={this.onEndReached}
			        onEndReachedThreshold={10}
			        stickyHeader
			        stickyProps={{
			          stickyStyle: { zIndex: 999, WebkitTransform: 'none', transform: 'none' },
			          // topOffset: -43,
			          // isActive: false,
			        }}
			        stickyContainerProps={{
			          className: 'for-stickyContainer-demo',
			        }}
				/>
			</div>
			)
	}

}


export default ListViews