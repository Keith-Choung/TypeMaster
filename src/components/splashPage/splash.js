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
      start: false,
      time: 60,
      reverseTime: 0,
      wordCount: 0,
      wps: "0.00",
    }
    this.trackWords = this.trackWords.bind(this);
    this.onStart = this.onStart.bind(this)
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    this.setState({ 
      time: 60,
    });
  }

  startTimer() {
    if (this.state.start === false && this.state.time > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  trackWords() {
    const { wordCount, reverseTime } = this.state;
    let wps = wordCount / reverseTime;
    wps = wps.toFixed(2);
    wps = wps.toString()
    this.setState({
      wordCount: wordCount + 1,
      wps: wps
    })
  }

  countDown() {
    let time = this.state.time - 1;
    let reverseTime = this.state.reverseTime + 1;
    this.setState({
      time: time,
      reverseTime: reverseTime
    });

    if (time === 0) { 
      console.log("DONE");
      clearInterval(this.timer);
    }
  }

  onStart() {
    console.log("START")
    this.setState({
      start: true
    })
    this.startTimer();

  }

  render() {
    const { text, start, time, wps } = this.state;

    return (
      <div className="page">
        <h3 className="title">
          Type Master
        </h3>
        <div className="box">
          <TextBox
            text = {text}
            startTimer = { this.onStart }
            trackWords = { this.trackWords }
          />
        </div>
        <div className="widget">
          <Timer
            onStart={this.onStart}
            start={start}
            time={time}
          />
          <Stats
            time={time}
            wps={wps}
          />
        </div>
      </div>

    )
  }
}

export default SplashPage;