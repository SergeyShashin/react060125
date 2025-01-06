// console.log('Privet WORLD!');

// import { User } from './user.js';

// let l = new User('Luck', 'Skywalker');

// console.log(l.sayHi());

import React from "react";
import { createRoot } from 'react-dom/client';

const element = React.createElement(
  'h1',
  { className: 'react-privet' },
  'Привет! Реакт работает.'
);

const root = createRoot(document.getElementById('root'));

root.render(
  element
);