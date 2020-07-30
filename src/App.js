import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import swal from 'sweetalert';

function App() {
  const [userInput, setUserInput] = useState(""); // User entered data retrived from text area
  const [showList, setShowList] = useState(false) // Use to switch screens between input question or show previous questions
  const [currentQuestions, setCurrentQuestions] = useState([]) // Use to switch screens between input question or show previous questions

  useEffect(() => { getCurrentQuestions(); }, []);// Load API weather data to component state before page is loading

  const getCurrentQuestions = async () => {
    const response = await fetch(`https://code-connector-question-submission.netlify.app/.netlify/functions/list`);
		const data = await response.json();// Extracts the JSON from the response.body and converts JSON string into a JavaScript object
    setCurrentQuestions(data.data.questions);
    console.table(data.data.questions);
  }

  // Function to submit the user inputed question to the back end.
  const onSubmit =async () => {
    
    const url = "https://code-connector-question-submission.netlify.app/.netlify/functions/submission"
    axios.post(url,{"question":userInput});
    swal(`Thank you for submitting the question, "${userInput}"`);
  };
  
  // Function to saved user input to the component state
  const captureUserInput = e => {
    setUserInput(e.target.value);
  }

  if(!showList){
    return(
      <InputQustion captureUserInput={captureUserInput} onSubmit ={onSubmit} showQuestions={setShowList(true)} />
    );
  }else{
    return (
      <ShowPreviousQuestions />
    );
  }
}

export default App;

const InputQustion = props => {
  return(
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
          onChange={props.captureUserInput}
        />
        <button type="button" className="button-style" onClick={props.onSubmit}>Submit</button>
        <button type="button" className="button-style previous-button-style" onClick={props.showQuestions}>View Submitted Questions</button>
        </div>
      </section>
    </div>
  );
}

const ShowPreviousQuestions = props => {
  return(
    <div>
      <h1>List of Submitted Questions</h1>

    </div>
  );
}
