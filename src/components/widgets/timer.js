import React, { Component } from 'react';
import './widgets.css';

class Timer extends Component {

  render() {
    return (
      <div className="widget-box">
        <p>{this.props.time} sec</p>
      </div>
    )
  }
}

export default Timer;