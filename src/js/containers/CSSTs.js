import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Fade = ({ children, ...props }) => (
 <CSSTransition
   {...props}
   timeout={500}
   classNames="fade"
 >
  {children}
 </CSSTransition>
);

export default class CSSTs extends React.Component {
  constructor(props) {
    super(props);
     this.state= { show: false }
    setInterval(() => {
      this.setState({ show: !this.state.show })
    }, 5000)
  }

// classNames="fade" 运用了 fade-enter, fade-enter-active, fade-exit, fade-exit-active, fade-appear, and fade-appear-active. 

  render() {
    return (
      <Fade in={this.state.show}>
        <div>Hello world</div>
      </Fade>
    );
  }
}
