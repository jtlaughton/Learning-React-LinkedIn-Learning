import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const lakeList = [
  "Echo Lake",
  "Maud Lake",
  "Cascade Lake"
]

// she says to destructure here, but I like to leave it like this because I may need a the keys
function App(props) {
  return (
    <ul>
      {props.lakes.map(lake => <li>{lake}</li>)}
    </ul>
  );
}

ReactDOM.render(
    <App lakes={lakeList}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
