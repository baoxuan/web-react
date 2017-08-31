import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {  Modal } from 'antd-mobile';

import {fetch_request} from '../actions/fetchActions'


class Ajax extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            loading:true
        }
    }
  componentDidMount() {
    const params = {
      PageIndex:1,
      PageSize:30,
      type:1,
      IsGetDirectPresale:1
    }
    this.props.fetch_request("ProductList", params, 'POST') 
  }
  componentWillReceiveProps(nextProps) {
      if(!nextProps.fetchData.ProductList.isFetch){
        this.setState({
            loading:false
        })
      } 
  }
   render(){
    const {fetchData} = this.props;

    return (
      <div>

      {do{
        if(this.state.loading){
          <div>loading</div>
        }else{
          fetchData.ProductList.items.Body.map( (item)=> (
              <div className="box" key={item.PType}>
               <h3>{item.ProductType}</h3>
              </div>
            ))
        }
      }}
      </div>
      )
   }
}

const mapStateToProps = ({fetchData}) => ({fetchData})

const mapDispatchToProps = (dispatch) => {
  return{
    fetch_request:bindActionCreators(fetch_request, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ajax);


