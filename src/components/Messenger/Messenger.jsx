import React, { Component } from "react";
// import { Counter } from './Counter';
import { MessagesList } from "components/MessagesList";
import { MessageForm } from "components/MessageForm";

const messages = [{ author: 'друг', text: 'Привет друг!' }, { author: 'друг', text: 'Как дела?' }, { author: 'друг', text: 'Как погода?' }];

export class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isVisible: false
      messages: []
    }
  }

  // handleToggle = () => {
  //   this.setState({ isVisible: !this.state.isVisible });
  // }

  newMessage = (message) => {
    this.setState({
      messages: this.state.messages.concat(message)
    });

  }

  componentDidUpdate() {
    let {author}=this.state.messages[this.state.messages.length - 1];
    if (author !== 'автоответчик') {
      setTimeout(() =>
        this.setState({
          messages: this.state.messages.concat({ author: 'автоответчик', text: `${author}, Ваше cообщение получено)` })
        }),
        500);
    }
  }

  render() {
    return (
      <section>
        {/* {this.state.isVisible && <Counter />} */}
        {/* <button onClick={this.handleToggle}>Toggle</button> */}
        <MessageForm functionNewMessage={this.newMessage} />
        <MessagesList messages={this.state.messages} />
      </section>
    )
  }
}