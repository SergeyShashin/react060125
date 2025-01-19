import './MessagesList.css';

import React, { Component } from "react";
import { Message } from "components/Message";


export class MessagesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <section className='messages-list'>
        {this.props.messages.map((message, idx) => <Message message={message} key={idx} />)}
      </section>
    )
  }
}