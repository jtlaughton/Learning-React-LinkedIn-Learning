import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");

  // dependency array helps limit what happens on after a state is updated
  useEffect(() => {
    console.log(`field 1: ${val}`);
  }, [val]);

  useEffect(() => {
    console.log(`field 2: ${val2}`);
  }, [val2])

  return (
    <>
      <label>
        Favorite Phrase:
        <input 
        value={val} 
        onChange={e => {
          setVal(e.target.value)
        }}e/>
      </label>
      <br/>
      <label>
        Second Favorite Phrase:
        <input 
        value={val2} 
        onChange={e => {
          setVal2(e.target.value)
        }}e/>
      </label>
    </>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
