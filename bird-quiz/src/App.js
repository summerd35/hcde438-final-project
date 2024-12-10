import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizSettings from './QuizSettings.js';
import QuizDropdown from './QuizDropdown.js'; 
import QuizFreeResponse from './QuizFreeResponse.js'; 
import FinalScore from './FinalScore.js'; 

const App = () => {

  

  /*const startQuiz = (settings) => {
    setQuizSettings(settings); 
    setQuizStarted(true); // yay quiz is starting
    //console.log(quizStarted);
  };*/

  return (
    <div className="App">
      <h1>HCDE 438: Web Technologies Final Project</h1>
      <p>by Summer Delehanty</p>

      {/* {!quizStarted ? (
        <QuizSettings startQuiz={startQuiz} />
        
      ) : (
      <div>
          <Quiz birds = {quizSettings.birds}/>
        </div>
      )} */}
      <Router>
      <Routes>
        <Route path="/" element={<QuizSettings/>}/>
        <Route path="/quiz-settings" element={<QuizSettings/>}/>
        <Route path="/quiz-dropdown" element={<QuizDropdown  />}/>
        <Route path="/quiz-free-response" element={<QuizFreeResponse  />}/>
        <Route path="/final-score" element={<FinalScore />} />*
      </Routes>
      </Router>
  

    </div>
  ) };
      


export default App;