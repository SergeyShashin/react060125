import React, { Component } from "react";

export class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: null,
      text: null
    }
  }

  handleInputChangeValue = (e) => {
    let fieldName = e.target.name;

    this.setState({
      [`${fieldName}`]: e.target.value,
    });

  }

  handleBtnSend = () => {
    this.props.functionNewMessage(this.state);

    this.setState({ text: '' });
    document.getElementById('text').value = '';
  }

  handleInputKeyDown = e => {
    if (e.ctrlKey && e.key === 'Enter') {
      this.handleBtnSend();
    };
  }

  render() {
    return (
      <section>
        <input id='author' name="author" onChange={this.handleInputChangeValue} />
        <input id='text' name="text" onChange={this.handleInputChangeValue} onKeyDown={this.handleInputKeyDown} />
        <button onClick={this.handleBtnSend}>Отправить</button>
      </section>
    )
  }
}