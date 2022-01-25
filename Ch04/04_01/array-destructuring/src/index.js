import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const [first, second, third] = [
  "popcorn",
  "pretzels",
  "pineapple"
]

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

console.log(first);
console.log(second);
console.log(third);
