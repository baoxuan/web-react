import React from 'react';
import { Accordion, Card,Carousel, List, Badge, WhiteSpace, WingBlank, NoticeBar,Steps, Tag} from 'antd-mobile';

const Step = Steps.Step;
export default class dataDisplay extends React.Component {
constructor(props) {
    super(props);
    this.state= ({
      initialHeight:200
    })
  }

  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
      <div>
        <NoticeBar
        marqueeProps={{
          loop:true,
          style:{padding:'0 0.15rem'}
        }}
        mode="closable">
          通知：额外信息额外信息额外信息额外信息额外信息额外信息额外信息额外信息111额外信息
        </NoticeBar>
         <Tag data-seed="logId">Basic</Tag>
      	<Accordion defaultActiveKey= '0'>
      	    <Accordion.Panel header="Title 1">
            <List className="my-list">
              <List.Item
               arrow="horizontal"
               thumb='https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png'
               extra="额外信息">
               Content 1multipleLine Content 1multipleLine Content 1multipleLine Content 1multipleLine Content 1multipleLine Content 1multipleLine Content 1multipleLine
               <List.Item.Brief>brief</List.Item.Brief>
               </List.Item>
              <List.Item>Content 2</List.Item>
              <List.Item>Content 3</List.Item>
            </List>
          </Accordion.Panel>
      		<Accordion.Panel header="title2">
      		texttexttexttexttexttexttexttexttexttext
      		</Accordion.Panel>
      		 <Accordion.Panel header="title3" >
      		texttexttexttexttexttexttexttexttexttext
      		</Accordion.Panel>
      	</Accordion>
      	<WhiteSpace />
      	<List>
      		<List.Item className="special-badge" extra={<Badge text={'促'}></Badge>}>角落Badge</List.Item>
      		<List.Item>dot<Badge dot/></List.Item>
      		    <List.Item>
			      Marketing:
			      <Badge text="减" hot style={{ marginLeft: 12 }} />
			      <Badge text="惠" hot style={{ marginLeft: 12 }} />
			      <Badge text="免" hot style={{ marginLeft: 12 }} />
			      <Badge text="反" hot style={{ marginLeft: 12 }} />
			      <Badge text="HOT" hot style={{ marginLeft: 12 }} />
			    </List.Item>
			    <List.Item>
			      Customize
			      <Badge text="券" style={{ marginLeft: 12, padding: '0 0.06rem', backgroundColor: '#f19736', borderRadius: 2 }} />
			      <Badge text="NEW" style={{ marginLeft: 12, padding: '0 0.06rem', backgroundColor: '#21b68a', borderRadius: 2 }} />
			      <Badge text="自动缴费"
			        style={{
			          marginLeft: 12,
			          padding: '0 0.06rem',
			          backgroundColor: '#fff',
			          borderRadius: 2,
			          color: '#f19736',
			          border: '1px solid #f19736',
			        }}
			      />
			    </List.Item>

      	</List>
      	<WhiteSpace size ="lg"/>
        <WingBlank size='lg'>
      	<Card full>
      		<Card.Header 
      		title="this is title"
      		thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
      		extra={<span>this is extra</span>}
        />
      		<Card.Body >
      			<div>这个是card body</div>
      		</Card.Body>
      		<Card.Footer 
      		content="footer" 
      		extra={<div>extra footer content</div>}/>
      	</Card>
        </WingBlank>
      <Carousel
          className="my-carousel"
          autoplay={false}
          infinite
          selectedIndex={1}
          swipeSpeed={35}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {['','',''].map(ii => (
            <a href="http://www.baidu.com" key={ii} style={hProp}>
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${ii || 'QcWDkUhvYIVEcvtosxMF'}.png`}
                alt="icon"
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({
                    initialHeight: null,
                  });
                }}
              />
            </a>
          ))}
        </Carousel>
        <Carousel
        vertical
        autoplay
        dots={false}
        infinite>
          <div >Carousel1</div>
          <div >Carousel2</div>
          <div >Carousel3</div>
        </Carousel>

         <Steps size="small" current={1}>
      <Step title="Finished" />
      <Step title="In Progress" />
      <Step title="Waiting" />
    </Steps>
      </div>
    );
  }
}
