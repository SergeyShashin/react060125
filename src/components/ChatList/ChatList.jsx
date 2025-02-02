import './ChatList.css';

import React, { Component } from "react";
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';

export class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatName: ''
    }
  }

  /**
   * Сохраняет в state имя чата по которому был клик
   * @param {HTMLevent} e событие при клике
   */
  handlerClickChat = e => {
    if (e.target.tagName === 'LI') {
      let textContent = e.target.textContent;
      this.setState({ chatName: textContent });
      this.props.getChatName(e.target.textContent);
    }
  }

  render() {
    return (

      <List className='chatList' onClick={this.handlerClickChat}>
        {Object.values(this.props.chats).map((chat, idx) =>
          <NavLink key={idx} to={`/chats/${chat.id}`}>
            <ListItem>{chat.name}</ListItem>
          </NavLink>)
        }
        {/* <NavLink to='/chats/1'>
          <ListItem>Chat1</ListItem>
        </NavLink>
        <NavLink to='/chats/2'>
          <ListItem>Chat2</ListItem>
        </NavLink>
        <NavLink to='/chats/3'>
          <ListItem>Chat3</ListItem>
        </NavLink>
        <NavLink to='/chats/4'>
          <ListItem>Chat4</ListItem>
        </NavLink>
        <NavLink to='/chats/5'>
          <ListItem>Chat5</ListItem>
        </NavLink>
        <NavLink to='/chats/6'>
          <ListItem>Chat6</ListItem>
        </NavLink>
        <NavLink to='/chats/7'>
          <ListItem>Chat7</ListItem>
        </NavLink>
        <NavLink to='/chats/8'>
          <ListItem>Chat8</ListItem>
        </NavLink> */}

      </List>
    )
  }
}