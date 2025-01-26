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
      currentChat: null,
      chats: {
        'Chat1': {
          id: 1,
          name: "Chat1",
          messages: [{ author: 'друг', text: `Привет!) Это чат 1. ` }]
        },
        'Chat2': {
          id: 2,
          name: "Chat2",
          messages: [{ author: 'друг', text: `Привет!) Это чат 2. ` }]
        },
        'Chat3': {
          id: 3,
          name: "Chat3",
          messages: [{ author: 'друг', text: `Привет!) Это чат 3. ` }]
        },
        'Chat4': {
          id: 4,
          name: "Chat4",
          messages: [{ author: 'друг', text: `Привет!) Это чат 4. ` }]
        },
        'Chat5': {
          id: 5,
          name: "Chat5",
          messages: [{ author: 'друг', text: `Привет!) Это чат 5. ` }]
        },
        'Chat6': {
          id: 6,
          name: "Chat6",
          messages: [{ author: 'друг', text: `Привет!) Это чат 6. ` }]
        },
        'Chat7': {
          id: 7,
          name: "Chat7",
          messages: [{ author: 'друг', text: `Привет!) Это чат 7. ` }]
        },
        'Chat8': {
          id: 8,
          name: "Chat8",
          messages: [{ author: 'друг', text: `Привет!) Это чат 8. ` }]
        },
      }
    }
  }


  // handleToggle = () => {
  //   this.setState({ isVisible: !this.state.isVisible });
  // }

  /**
   * Добавляет новое сообщение в state
   * @param {Object} message 
   */
  newMessage = message => {
    this.setState({
      chats: Object.assign(this.state.chats, this.updateChat(message))
    });
  };

  /**
   * Возвращает объект с добавленным message
   * @param {Object} message 
   * @returns 
   */
  updateChat(message) {
    return {
      [this.state.currentChat]: {
        id: this.state.chats[this.state.currentChat].id,
        name: this.state.chats[this.state.currentChat].name,
        messages: this.state.chats[this.state.currentChat].messages.concat(message)
      }
    };
  }

  /**
   * Записывает state выбранный чат
   * @param {String} chatName 
   */
  handlerChatName = chatName => {
    this.setState({
      currentChat: chatName
    });

  }

  /**
   * Набор действий при обновлении компонента
   */
  componentDidUpdate() {
    if (this.state.chats[this.state.currentChat].messages.length > 1) {
      let length = this.state.chats[this.state.currentChat].messages.length;
      let { author } = this.state.chats[this.state.currentChat].messages[length - 1];
      if (author !== 'автоответчик') {
        setTimeout(() =>
          // this.setState({
          //   chats: Object.assign(this.state.chats, this.updateChat({ author: 'автоответчик', text: `${author}, Ваше cообщение получено)` }))
          // }),
          this.newMessage({ author: 'автоответчик', text: `${author}, Ваше cообщение получено)` }),
          500);
      }
    }

  }

  render() {
    return (
      <section className='messenger'>
        {/* {this.state.isVisible && <Counter />} */}
        {/* <button onClick={this.handleToggle}>Toggle</button> */}
        {this.state.currentChat? <Header chatName={this.state.currentChat}/>:<Header chatName={'Чаты'}/>}
        <section className='layout'>
          <ChatList getChatName={this.handlerChatName} />
          <div className="inputOutput">
            {this.state.currentChat && this.state.chats[this.state.currentChat].messages ? <MessagesList messages={this.state.chats[this.state.currentChat].messages} /> : 'Можете выбрать чат для общения.'}
            {this.state.currentChat && <MessageForm functionNewMessage={this.newMessage} />}
          </div>
        </section>
      </section>
    )
  }
}