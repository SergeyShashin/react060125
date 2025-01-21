import './MessageForm.css';

import React, { Component } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: null,
      text: null
    }
  }

  handleInputChangeValue = (e) => {
    let fieldName = e.target.name;

    this.setState({
      [`${fieldName}`]: e.target.value,
    });

  }

  handleBtnSend = () => {
    this.props.functionNewMessage(this.state);

    this.setState({ author: '', text: '' });
    document.getElementById('author').value = '';
    document.getElementById('text').value = '';
  }

  handleInputKeyDown = e => {
    if (e.ctrlKey && e.key === 'Enter') {
      this.handleBtnSend();
    };
  }

  render() {
    return (
      <section className='message-form'>
        {/* <input id='author' name="author" onChange={this.handleInputChangeValue} /> */}
        <TextField id='author' label='author' name="author" onChange={this.handleInputChangeValue}  variant='standard'/>
        <TextField id='text' label='напишите что-нибудь...' name='text' onChange={this.handleInputChangeValue} onKeyDown={this.handleInputKeyDown} variant='standard'/>
        <Button onClick={this.handleBtnSend} variant='contained' size='large'>Отправить</Button>
      </section>
    )
  }
}