import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

function Timer(props) {
  return (
    <div className="plr20 ptb30">
      <p className="font-40">
        {moment(props.seconds * 1000).format('mm:ss')}
        ({props.status})
      </p>

      <button
        className='btn'
        onClick={props.onReset}
        disabled={props.status === 'Running'}
      >
        重置
      </button>

      <button
        className='btn'
        onClick={props.onStart}
        disabled={props.status === 'Running'}
      >
        开始
      </button>

      <button
        className='btn'
        onClick={props.onStop}
        disabled={props.status === 'Stopped'}
      >
        停止
      </button>
    </div>
  );
}

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
};

export default Timer;
