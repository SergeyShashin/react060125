import React, { Component } from "react";
// import { Counter } from './Counter';
import { MessagesList } from "./MessagesList";
import { MessageForm } from "./MessageForm";

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
    
    setTimeout(() => this.state.messages.push({ author: 'автоответчик', text: 'Сообщение получено.)' }), 1000);
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