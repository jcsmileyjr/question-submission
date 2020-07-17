import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h1 className="header">Code Connector</h1>
      <section className="content-container">
        <div className="content">
        <h3 className="input-title">Submit a Daily Question</h3>
        <textarea type="text" className="input-style" rows="100" cols="30" />
        <button type="button" className="button-style">Submit</button>
        </div>
      </section>
    </div>
  );
}

export default App;
