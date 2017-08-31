import React from 'react';
import { Button, List, DatePicker, Picker, ImagePicker, InputItem, Checkbox, Flex, Radio,Switch, Stepper, TextareaItem, WingBlank } from 'antd-mobile';
import { createForm } from 'rc-form';
import enUS from 'antd-mobile/lib/locale-provider/en_US';

import moment from 'moment';
import 'moment/locale/zh-cn';
import { district, provinceLite as province } from 'antd-mobile-demo-data';
const zhNow = moment().locale('zh-cn').utcOffset(8);

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;
const RadioItem = Radio.RadioItem;

const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: '2122',
}];

function getFileValueProps(value) {
  if (value && value.target) {
    return {
      value: value.target.value,
    };
  }
  return {
    value,
  };
}
function getValueFromFileEvent({ target }) {
  return {
    target,
  };
}


class formTest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	value:0,
    	val:3,
    	files:data
    };
  }

  onChange= (value) => {
  	console.log(value)
  	this.setState({
  		value
  	})
  };
  // 切换步进器
  onChange1 = (val) =>{
  	console.log(val)
  	this.setState({
  		val
  	})
  }
onChange2 = (files, type, index)=> {
	console.log(files, type, index);
	this.setState({
		files
	})
}
  onClick = ()=>{
  	console.log(this.props.form.getFieldsValue())
  	console.log(this.props.form.getFieldError('money'))
  	this.props.form.validateFields((error,value)=>{
  		console.log(error, value)
  	})
  }
    checkSize = (rule, value, callback) => {
    if (value && value.target) {
      const files = value.target.files;
      if (files[0]) {
        callback(files[0].size > 1000000 ? 'file size must be less than 1M' : undefined);
      } else {
        callback();
      }
    } else {
      callback();
    }
  }
  render() {
  	// getFieldProps 表单赋值，检验方式
  	// getFieldError 检测报错
  	// getFieldValue 获取表单值
  	// getFieldsValue  获取表单全部的值

  	const { getFieldProps, getFieldError, getFieldValue } = this.props.form;
  	const { value, files } = this.state;
  	let error;
    return (
    <WingBlank>
      <List renderHeader={()=> '表单'}>
        <DatePicker
          mode="date"
          title="选择日期"
          {...getFieldProps('time', {
          	initialValue:zhNow
          })}
        >
          <List.Item arrow="horizontal">日期(CST)</List.Item>
        </DatePicker>
        <InputItem 
        {...getFieldProps('money',{
        	validateFirst:true,
        	rules:[
        		{
        			required:true
        		}
        	],
        	validtateTirgger:'onBlur'
        })}
        type="money"
        placeholder="money keyboard"
        clear
        maxLength={10}>数字</InputItem>

        <Flex>
        <CheckboxItem key="1"
         {...getFieldProps('checked.a',{
         	initialValue:true,
         	valuePropName:'checked'
         })}> 1111</CheckboxItem>
        <CheckboxItem key="2"
        {...getFieldProps('checked.b',{
         	initialValue:false
         })}> 222</CheckboxItem>
        </Flex>

        <Flex>
        	<Flex.Item>
        		<AgreeItem 
        		{...getFieldProps('agree',{
		         	initialValue:false
		         })}>xxx协议</AgreeItem>
        	</Flex.Item> 
        </Flex>

        <Picker
        data={district}
        title="选择地区"
        {...getFieldProps('district',{
        	initialValue:['340000', '341500', '341502']
        })}
        onOk={e => console.log('ok',e)}
        onDismiss ={e => console.log('dismiss',e)}
        onChange={v => console.log('change',v)}
        >
        	<List.Item arrow="horizontal">选择地区</List.Item>
        </Picker>


        <RadioItem 
        key="0"
        checked={value === '0'}
        onChange={()=>this.onChange('0')}
        {...getFieldProps('sex.0',{
        	exclusive: true,
        	 getValueFromEvent(e) {
                    return e.target.checked ? '0' : '';
                  },
        	getValueProps(value){
        		return{ checked:value ==='0'}
        	}
        })}>男</RadioItem>
        <RadioItem key='1'
        checked={value === '1'}
        onChange={()=>this.onChange('1')}
        {...getFieldProps('sex.1',{
        	exclusive: true,
        	 getValueFromEvent(e) {
                    return e.target.checked ? '1' : '';
                  },
        	getValueProps(value){
        		return {checked:value ==='1'}
        	}
        })}>女</RadioItem>

        <List.Item
        extra={<Switch
          {...getFieldProps('Switch', {
            initialValue: true,
            valuePropName: 'checked',
          })}
          onClick={(checked) => { console.log(checked); }}
        />}
      >开关</List.Item>
      {getFieldValue('Switch') ? <TextareaItem
            {...getFieldProps('control')}
            placeholder="Hello World"
            rows={5}
            count={100}
          />
      : null}


        
      </List>
      <div > {(error = getFieldError('money') )? error.join(','):null} </div>

     <ImagePicker
          files={files}
          onChange={this.onChange2}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 5}
        />

      <Button className="btn" type="primary" onClick={this.onClick}>提交</Button>

      </WingBlank>
    );
  }
}


export default createForm()(formTest)