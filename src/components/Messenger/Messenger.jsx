import './Messenger.css';

import React, { Component } from "react";
// import { Counter } from './Counter';
import { Header } from 'components/Header';
import { MessagesList } from "components/MessagesList";
import { ChatList } from 'components/ChatList';
import { MessageForm } from "components/MessageForm";

// const messages = [{ author: 'друг', text: 'Привет друг!' }, { author: 'друг', text: 'Как дела?' }, { author: 'друг', text: 'Как погода?' }];

export class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isVisible: false
      messages: [],
      currentChat: 'Chat1',
      chats: {
        'Chat1': {
          id: 1,
          name: "Chat1",
          messages: [{ author: 'друг', text: `Привет!) Это чат 1. ` }]
        },
        'Chat2': {
          id: 1,
          name: "Chat2",
          messages: [{ author: 'друг', text: `Привет!) Это чат 2. ` }]
        },
        'Chat3': {
          id: 1,
          name: "Chat3",
          messages: [{ author: 'друг', text: `Привет!) Это чат 3. ` }]
        },
      }
    }
  }

  // handleToggle = () => {
  //   this.setState({ isVisible: !this.state.isVisible });
  // }

  newMessage = message => {
    this.setState({
      // messages: this.state.messages.concat(message);
      chats: this.state.chats[this.state.currentChat].messages.concat(message)
    });
  };

  handlerChatName = chatName => {
    this.setState({
      currentChat: chatName
    });

  }

  componentDidUpdate() {
    if (this.state.chats[this.state.currentChat].messages.length) {
      let { author } = this.state.chats[this.state.currentChat].messages[this.state.messages.length - 1];
      if (author !== 'автоответчик') {
        setTimeout(() =>
          this.setState({
            messages: this.state.messages.concat({ author: 'автоответчик', text: `${author}, Ваше cообщение получено)` })
          }),
          500);
      }
    }

  }



  render() {
    return (
      <section className='messenger'>
        {/* {this.state.isVisible && <Counter />} */}
        {/* <button onClick={this.handleToggle}>Toggle</button> */}
        <Header />
        <section className='layout'>
          <ChatList getChatName={this.handlerChatName} />
          <div className="inputOutput">
            <MessagesList messages={this.state.chats[this.state.currentChat].messages} />
            <MessageForm functionNewMessage={this.newMessage} />
          </div>
        </section>
      </section>
    )
  }
}