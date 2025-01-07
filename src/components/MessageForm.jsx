import React, { Component } from "react";

export class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: null,
      text: null
    }
  }

  handleBtnSend = () => {
    let author = document.getElementById('author').value;
    let textEl = document.getElementById('text');
    let text = textEl.value;

    this.setState({
      author: author,
      text: text,
    });

    if (this.state.author && this.state.text) {
      this.props.functionNewMessage({ author: this.state.author, text: this.state.text });
    }

    textEl.value = '';
  }

  render() {
    return (
      <section>
        <input id='author' />
        <input id='text' />
        <button onClick={this.handleBtnSend}>Отправить</button>
      </section>
    )
  }
}