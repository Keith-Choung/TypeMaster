import React, { Component } from 'react';
import './splash.css';
import TextBox from '../textBox/textBox';
import Timer from '../widgets/timer';
import Stats from '../widgets/stats';

class SplashPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      start: 0,
      time: 60,
    }
  }

  onStart() {
    console.log("START")
  }

  render() {
    const { text } = this.state;

    return (
      <div className="page">
        <h3 className="title">
          Type Master
        </h3>
        <div className="box">
          <TextBox
            text = {text}
          />
        </div>
        <div className="widget">
          <Timer/>
          <Stats/>
        </div>
      </div>

    )
  }
}

export default SplashPage;