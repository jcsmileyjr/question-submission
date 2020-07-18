import React, {useState} from 'react';
import './App.css';
//import axios from 'axios';

function App() {
  const [userInput, setUserInput] = useState(""); // User entered data retrived from text area

  // Function to submit the user inputed question to the back end.
  const onSubmit = () => {

    alert("hello");
  }
  
  // Function to saved user input to the component state
  const captureUserInput = e => {
    setUserInput(e.target.value);
  }

  return (
    <div>
      <h1 className="header">Code Connector</h1>
      <section className="content-container">
        <div className="content">
        <h3 className="input-title">Submit a Daily Question</h3>
        <textarea 
          type="text" 
          className="input-style" 
          placeholder="Write question here ....." 
          rows="100" 
          cols="30" 
          onChange={captureUserInput}
        />
        <button type="button" className="button-style" onClick={onSubmit}>Submit</button>
        </div>
      </section>
    </div>
  );
}

export default App;
