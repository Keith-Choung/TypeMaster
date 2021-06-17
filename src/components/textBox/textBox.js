import React, { Component } from 'react';
import './textBox.css';

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      userInput: "",
    }
    this.handleText = this.handleText.bind(this);
  }

  handleText() {
    const { text } = this.state;

    console.log(text);
  }

  render() {
    const { text } = this.state;

    return (
      <div className="text-box">
        <div className="text-placeholder" data-placeholder={text}></div>
        <div 
          className="text-input" 
          contentEditable="true" 
          placeholder={text}
          onChange={this.handleText}></div>
      </div>

    )
  }
}

export default TextBox;