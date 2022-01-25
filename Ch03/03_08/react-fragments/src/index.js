import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Lake() {
  return (
    <h1>Vist Lake</h1>
  );
}

function SkiResort() {
  return (
    <h1>Visit Ski Resort</h1>
  )
}

function App() {
  return (
    <>
      <Lake/>
      <SkiResort/>
    </>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
