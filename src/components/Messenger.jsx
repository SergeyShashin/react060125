import React, { Component } from "react";

export class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  handlBtnClick = (e) => {
    this.setState(prevState => ({ counter: prevState.counter + Number(e.target.dataset.value) }));
  }

  render() {
    return (
      <section>
        <button data-value="-1" onClick={this.handlBtnClick}>-</button>
        <span>{this.state.counter}</span>
        <button data-value="+1" onClick={this.handlBtnClick}>+</button>
      </section>
    )
  }
}