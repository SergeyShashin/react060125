// console.log('Privet WORLD!');

// import { User } from './user.js';

// let l = new User('Luck', 'Skywalker');

// console.log(l.sayHi());

import React from "react";
import { createRoot } from 'react-dom/client';

// const element = React.createElement(
//   'h1',
//   { className: 'react-privet' },
//   'Привет! Реакт работает.'
// );

// const element = <h1 className="react-privet">Привет! JSX тоже работает!</h1>;
const messages = ['Привет, друг!', 'Как дела?'];

const Message = props => <p>{props.text}</p>;
const MessageList = props => props.messages.map(messsage => <Message text={messsage} />);

const root = createRoot(document.getElementById('root'));

root.render(
  <MessageList messages={messages} />
);