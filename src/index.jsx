// console.log('Privet WORLD!');

// import { User } from './user.js';

// let l = new User('Luck', 'Skywalker');

// console.log(l.sayHi());

import React from "react";
import { createRoot } from 'react-dom/client';
// import { Messenger } from "./components/Messenger";
import { MessengerRedux } from "./containers/MessengerContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import 'assets/global.css';
// import { routesArr } from "./routesArr";

// const element = React.createElement(
//   'h1',
//   { className: 'react-privet' },
//   'Привет! Реакт работает.'
// );

// const element = <h1 className="react-privet">Привет! JSX тоже работает!</h1>;
// const messages = ['Привет, друг!', 'Как дела?'];

// const Message = props => <p>{props.text}</p>;
// const MessageList = props => props.messages.map(messsage => <Message text={messsage} />);

const root = createRoot(document.getElementById('root'));

root.render(
  // <MessageList messages={messages} />
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MessengerRedux />} />
        <Route exact path="chats/:id" element={<MessengerRedux />} />
        {/* <Messenger /> */}
      </Routes>
    </BrowserRouter>
  </Provider>
);