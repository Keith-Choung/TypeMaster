import React, { Component } from 'react';
import './textBox.css';

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      newText: props.text,
      textIndex: 0,
      userInput: "",
      errorInput: "",
      // inputArray: []
    }

    this.handleText = this.handleText.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
  }

  setCaretPosition(ctrl, pos) {
    // Modern browsers
    if (ctrl.setSelectionRange) {
      ctrl.focus();
      ctrl.setSelectionRange(pos, pos);
    
    // IE8 and below
    } else if (ctrl.createTextRange) {
      var range = ctrl.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }

  onDelete(e) {
    const {text, textIndex} = this.state;
    console.log(textIndex);
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

    const {text, newText, textIndex, userInput} = this.state;
    
    // console.log(e.target.value[userInput.length]);
    // console.log(text[userInput.length]);
    this.setState(
      {
        userInput: e.target.value,
        textIndex: e.target.value.length,
      });

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
  }

  render() {
    const { newText, userInput } = this.state;

    return (
      <div className="text-box">
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