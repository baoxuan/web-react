import React from 'react';
import { SegmentedControl, WingBlank } from 'antd-mobile';

export default class SegmentedControlTest extends React.Component {

  constructor(props) {
    super(props);
  }
  
  onChange = (e) => {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  }
  onValueChange = (value) => {
    console.log(value);
  }
  render() {
    return (
		<WingBlank size="lg" className="sc-example">
        <p className="sub-title">Simplest</p>
        <SegmentedControl values={['切换一', '切换二']} >
        </SegmentedControl>

        <p className="sub-title">Disabled</p>
        <SegmentedControl values={['切换一', '切换二']} disabled />

        <p className="sub-title">SelectedIndex</p>
        <SegmentedControl selectedIndex={1} values={['切换一', '切换二', '切换三']} />

        <p className="sub-title">TintColor</p>
        <SegmentedControl
          values={['切换一', '切换二', '切换三']}
          tintColor={'#ff0000'}
          style={{ height: '0.8rem', width: '5rem' }}
        />

        <p className="sub-title">onChange/onValueChange</p>
        <SegmentedControl
          values={['切换一', '切换二', '切换三']}
          onChange={this.onChange}
          onValueChange={this.onValueChange}
        />
      </WingBlank>
    );
  }
}
