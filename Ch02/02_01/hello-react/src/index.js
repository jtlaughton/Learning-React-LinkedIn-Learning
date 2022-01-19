import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let city = {
  name: "Madrid",
  country: "Spain"
}

// JSX ftw

// BTW I would never write it this way just following along for now
ReactDOM.render(
  <h1 id="heading" className='cool-text'>
    Hello from {city.name} in {city.country}
  </h1>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
