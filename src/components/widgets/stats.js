import React, { Component } from 'react';
import './widgets.css';

class Stats extends Component {
  render() {

    return (
      <div className="widget-box">
        <p>
          { this.props.wps } wps
        </p>
      </div>
    )
  }
}

export default Stats;