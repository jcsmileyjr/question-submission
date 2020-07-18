import React from 'react';
import './App.css';
//import axios from 'axios';

function App() {

  const onSubmit = () => {
    alert("hello");
  } 
  return (
    <div>
      <h1 className="header">Code Connector</h1>
      <section className="content-container">
        <div className="content">
        <h3 className="input-title">Submit a Daily Question</h3>
        <textarea type="text" className="input-style" placeholder="Write question here ....." rows="100" cols="30" />
        <button type="button" className="button-style" onClick={onSubmit}>Submit</button>
        </div>
      </section>
    </div>
  );
}

export default App;
