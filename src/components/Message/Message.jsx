import './Message.scss';

import React, { Component } from "react";
import PropTypes from "prop-types";

import classNames from 'classnames';


export class Message extends Component {
  constructor(props) {
    super(props);

  }
  static propTypes = {
    message: PropTypes.string
  }

  // get direction() {
  //   return this.props.message.author==='автоответчик' ? 'start' : 'end';
  // }

  render() {
    let { author, text } = this.props.message;
    let clases = classNames('message', {
      'message-owner': author !== 'автоответчик',
      'message-companion': author === 'автоответчик',
    });

    return (
      // <div className='message' style={{ alignSelf: `${this.direction}` }}>
      <div className={clases} >
        <div>{text}</div>
        <div className='sender'>{author}</div>
      </div>
    )
  }
}