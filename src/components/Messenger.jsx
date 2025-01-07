import React, { Component } from "react";

export class Messenger extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>{this.state.counter}</div>
    )
  }
}