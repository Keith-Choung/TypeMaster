import React, { Component } from 'react';
import './widgets.css';

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minOrSec: 0,
      wpm: 0,
      wps: 0
    }
  }

  render() {
    const { minOrSec, wpm, wps } = this.state;

    return (
      <div className="widget-box">
        { minOrSec ? 
          <p>
            { wpm } wpm
          </p>
        :
          <p>
            { wps } wps
          </p>
        }
      </div>
    )
  }
}

export default Stats;