import React, { Component } from "react";
import { Message } from "./Message";


export class MessagesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <section>
        {this.props.messages.map((message, idx) => <Message message={message} key={idx} />)}
      </section>
    )
  }
}