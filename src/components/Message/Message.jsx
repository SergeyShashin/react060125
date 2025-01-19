import './Message';

import React, { Component } from "react";
import PropTypes from "prop-types";


export class Message extends Component {
  constructor(props) {
    super(props);

  }
  static propTypes = {
    message: PropTypes.string
  }

  render() {
    let { author, text } = this.props.message;
    return (
      <p>{author}: {text}</p>
    )
  }
}