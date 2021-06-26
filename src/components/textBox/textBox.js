import React, { Component } from 'react';
import './textBox.css';

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      newText: props.text,
      textIndex: 0,
      lineIndex: 0,
      userInput: "",
      errorInput: "",
      start: false,
      newLineThresh: 0,
      wordCount: 0,
      letterStyles: {},
      userTextHTML: null,
      ...props
    }

    this.handleText = this.handleText.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.userInputToHTML = this.userInputToHTML.bind(this);
    this.isCorrect = this.isCorrect.bind(this);
  }

  componentDidMount() {
    // console.log(document.getElementById("text-box").clientWidth);
    const divWidth = document.getElementById("text-box").clientWidth * 0.081
    console.log(divWidth);
    this.setState({
      newLineThresh: divWidth,
    })
  }

  onKeyPress(e) {
    const {text, textIndex, trackWords} = this.state;
    // console.log(textIndex);

    if (e.keyCode === 32) {
      trackWords();
    }

    if (e.keyCode === 8) {
      if (textIndex - 1 <= 0) {
        this.setState(
          {
            newText: text.slice(0, text.length),
            textIndex: 0,
          })
      } else {
        this.setState(
          {
            newText: text.slice(textIndex - 2, text.length),
            textIndex: textIndex - 1,
          })
      }
    }
  }

  handleText(e) {
    const {
      text, newText, start, startTimer, lineIndex, userInput, 
      textIndex, letterStyles
    } = this.state;
  
    if (!start) {
      this.setState({ start: true });
      startTimer();
    }

    this.setState(
      {
        userInput: e.target.value,
        lineIndex: lineIndex + 1,
        newText: newText.slice(1),
        textIndex: e.target.value.length,
      });

    this.userInputToHTML(e.target.value);
  }

  isCorrect(input) {
    const { text, newText, textIndex } = this.state;

    console.log(textIndex, newText[textIndex], input[textIndex]);
    if (text[textIndex] === input[textIndex]) {
      return true;
    } else {
      return false;
    }
  }

  userInputToHTML(input) {
    const { textIndex, letterStyles } = this.state;

    if (this.isCorrect(input)) {
      letterStyles[textIndex] = "active";
      this.setState({
        letterStyles: letterStyles
      });
    } else {
      letterStyles[textIndex] = "active-error";
      this.setState({
        letterStyles: letterStyles
      });
    }

    let userInputArr = input.split("");

    this.setState({
      userTextHTML: userInputArr.map((letter, i) => {
        return <span className={letterStyles[i]} key={i}>{letter}</span>
      })
    })
  }

  render() {
    const { newText, userInput, userTextHTML } = this.state;

    return (
      <div id="text-box" className="text-box">
        <div className="text-placeholder">
          { userTextHTML }
          {/* <span className="active">{userInput}</span> */}
          <span className="passive">{newText}</span>
        </div>
        <textarea
          id="text-input"
          className="text-input"
          onChange={this.handleText}
          value={userInput}
          onKeyDown={this.onKeyPress}
        />
      </div>

    )
  }
}

export default TextBox;