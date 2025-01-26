import React, { Component } from "react";

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h2>{this.props.chatName}</h2>
    )
  }
}