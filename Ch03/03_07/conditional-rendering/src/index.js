import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Lake(props) {
  return (
  <div>
    <h1>Visit {props.name} Lake</h1>
  </div>
  );
}

function SkiResort(props) {
  return (
    <div>
      <h1>Visit {props.name} Resort!</h1>
    </div>
  )
}

function App(props) {
  // if(props.season === "summer")
  //   return <Lake name="Jenny"/>
  // else if(props.season === "winter")
  //   return <SkiResort name="Jackson Hole Mountain"/>

  return (props.season === "summer") ? (
          <Lake name="Jenny"/> ): 
          props.season === "winter" ?
          <SkiResort name="Jackson Hole  Mountain"/> : 
          <h1> Come Back In Winter and Summer</h1>
}

ReactDOM.render(
    <App season="summer"/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
