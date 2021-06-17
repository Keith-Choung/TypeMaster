import React, { Component } from 'react';
import './widgets.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      time: 0
    }
  }

  

  render() {
    const { time } = this.state;

    return (
      <div className="widget-box">
        <p>{time} sec</p>
      </div>
    )
  }
}

export default Timer;