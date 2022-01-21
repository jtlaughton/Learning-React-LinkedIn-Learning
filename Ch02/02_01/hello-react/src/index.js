import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Introduction to react funcitonal components
function Hello({library, message}) {
  return (
    <div>
      <h1>Welcome to {library}</h1>
      <p>{message}</p>
    </div>
  );

}

// JSX ftw

// BTW I would never write it this way just following along for now
ReactDOM.render(
  <Hello library = "React" message = "Have Fun" />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
