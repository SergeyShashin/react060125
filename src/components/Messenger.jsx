import React, { Component } from "react";
import { Counter } from './Counter';

export class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    }
  }

  handleToggle = () => {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    return (
      <section>
        {this.state.isVisible && <Counter />}
        <button onClick={this.handleToggle}>Toggle</button>

      </section>
    )
  }
}