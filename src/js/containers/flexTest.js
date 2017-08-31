import React from 'react';

import {Flex,  WhiteSpace, WingBlank} from 'antd-mobile';

const PlaceHolder = props => (
	<div
	  style={{
	  	backgroundColor:'#ebebef',
	  	color:'#bbb',
	  	textAlign:'center',
	  	height:'0.6rem',
	  	lineHeight:'0.6rem'
	  }}
	  {...props}>
	   Item
	  </div>
	)


export default class flexTest extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
	    <div className="flex-container">
	      <Flex>
	      	<Flex.Item> <PlaceHolder />  </Flex.Item>
	      	<Flex.Item> <PlaceHolder />  </Flex.Item>
	      </Flex>
	      <WhiteSpace />
	      <Flex>
	      	<Flex.Item> <PlaceHolder />  </Flex.Item>
	      	<Flex.Item> <PlaceHolder />  </Flex.Item>
	      	<Flex.Item> <PlaceHolder />  </Flex.Item>
	      </Flex>
	      <WhiteSpace />

	      <Flex>
	      	<Flex.Item> <PlaceHolder />  </Flex.Item>
	      	<Flex.Item> <PlaceHolder />  </Flex.Item>
	      	<Flex.Item> <PlaceHolder />  </Flex.Item>
	      	<Flex.Item> <PlaceHolder />  </Flex.Item>
	      </Flex>
	      <WhiteSpace />
	      <WhiteSpace size="lg" />

	      <Flex wrap="wrap">
	        	<PlaceHolder className="inline" />
		      <PlaceHolder className="inline" />
		      <PlaceHolder className="inline" />
		      <PlaceHolder className="inline" />
		      <PlaceHolder className="inline" />
		      <PlaceHolder className="inline" />
		      <PlaceHolder className="inline" />
	      </Flex>
	          <WhiteSpace size="lg" />


		    <Flex justify="center">
		      <PlaceHolder className="inline" />
		      <PlaceHolder className="inline" />
		      <PlaceHolder className="inline" />
		    </Flex>
		    <WhiteSpace />
		    <Flex justify="end">
		      <PlaceHolder className="inline" />
		      <PlaceHolder className="inline" />
		      <PlaceHolder className="inline" />
		    </Flex>
		    <WhiteSpace />
		    <Flex justify="between">
		      <PlaceHolder className="inline" />
		      <PlaceHolder className="inline" />
		      <PlaceHolder className="inline" />
		    </Flex>

		    <WhiteSpace />
		    <Flex align="start">
		      <PlaceHolder className="inline" />
		      <PlaceHolder className="inline small" />
		      <PlaceHolder className="inline" />
		    </Flex>
		    <WhiteSpace />
		    <Flex align="end">
		      <PlaceHolder className="inline" />
		      <PlaceHolder className="inline small" />
		      <PlaceHolder className="inline" />
		    </Flex>
		    <WhiteSpace />
		    <Flex align="baseline">
		      <PlaceHolder className="inline" />
		      <PlaceHolder className="inline small" />
		      <PlaceHolder className="inline" />
		    </Flex>
		    <div className="sub-title">两边留白</div>
		    	<WingBlank><PlaceHolder /></WingBlank>
		        <WhiteSpace size="lg" />
			    <WingBlank size="md"><PlaceHolder /></WingBlank>

			    <WhiteSpace size="lg" />
			    <WingBlank size="sm"><PlaceHolder /></WingBlank>
			      </div>

    );
  }
}
