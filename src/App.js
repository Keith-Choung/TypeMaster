import React, { Component } from 'react';
import './App.css';
import SplashPage from './components/splashPage/splash';
import ResultsPage from './components/resultsPage/results';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageView: 0,
      text: "Steve was born in Tokyo, Japan in 1950. He moved to London with his parents when he was 5 years old. Steve started school there and his father began work at the hospital. His mother was a house wife and he had four brothers. He lived in England for 2 years then moved to Amman, Jordan where he lived there for 10 years. Steve",
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
