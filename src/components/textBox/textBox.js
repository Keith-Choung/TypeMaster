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
      ...props
    }

    this.handleText = this.handleText.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    // console.log(document.getElementById("text-box").clientWidth);
    const divWidth = document.getElementById("text-box").clientWidth * 0.081
    console.log(divWidth);
    this.setState({
      newLineThresh: divWidth,
    })
  }

  onDelete(e) {
    const {text, textIndex, trackWords} = this.state;
    console.log(textIndex);

    if (e.keyCode === 32) {
      console.log("new word");
      trackWords();
    }

    if (e.keyCode === 8) {
      console.log("delete");
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
      text, newText, start, startTimer, lineIndex, 
      newLineThresh, textIndex, divWidth, userInput
    } = this.state;
  
    if (!start) {
      this.setState({ start: true });
      startTimer();
    }

    this.setState(
      {
        userInput: e.target.value,
        textIndex: e.target.value.length,
        lineIndex: lineIndex + 1
      });

    
    // Checks if new line is needed
    // if (lineIndex > newLineThresh) {
    //   console.log("THRESHOLD");
    //   console.log(text.slice(textIndex, text.length));
    //   this.setState({
    //     lineIndex: 0,
    //     newText: text.slice(textIndex, text.length),
    //     userInput: ""
    //   })

    // } else {
    if (e.target.value[userInput.length] === text[userInput.length]) {
      this.setState(
        { 
          newText: newText.slice(1),
        }
      )
    } else {
      this.setState(
        { 
          newText: newText.slice(1),
        }
      )
    }
    // }

  }

  render() {
    const { newText, userInput } = this.state;

    return (
      <div id="text-box" className="text-box">
        <div className="text-placeholder">
          <span className="active">{userInput}</span>
          <span className="passive">{newText}</span>
        </div>
        <textarea
          id="text-input"
          className="text-input"
          onChange={this.handleText}
          value={userInput}
          onKeyDown={this.onDelete}
        />
      </div>

    )
  }
}

export default TextBox;