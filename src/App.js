import React, { Component } from 'react';
import './App.css';
import SplashPage from './components/splashPage/splash';
import ResultsPage from './components/resultsPage/results';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageView: 0,
      text:  "Steve was born in Tokyo, Japan in 1950. He moved to London with his parents when he was 5 years old. Steve started school there and his father began work at the hospital. His mother was a house wife and he had four brothers. He applied to many colleges and universities in the States and finally got some acceptance offers from them. He chose Wichita State University in Kansas. His major was Bio-medical Engineering. He stayed there for bout six months and then he moved again to a very small town called Greensboro to study in a small college."
    }
  }

  render() {
    const { pageView, text } = this.state;

    return (
      <div className="main-body">
        { !pageView ?
          <SplashPage 
            text = {text}
          />
        :
          <ResultsPage />
        }
      </div>
    )
  }
}

export default App;
