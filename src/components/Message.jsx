import React, { Component } from "react";

export class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>{this.props.message.author}: {this.props.message.text}</p>
    )
  }
}