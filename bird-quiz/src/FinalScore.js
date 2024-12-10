import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function FinalScore() {
  const navigate = useNavigate();
  const location = useLocation();

  const finalPoints = location.state?.points || 0;
  const totalPoints = location.state?.totalPoints || 0;

  let newTotal = totalPoints*3;

  //  navigate back to the quiz settings page
  const handleRestart = () => {
    navigate('/quiz-settings'); 
  };

  return (
    <div className="final-score-container">
      <h2>Quiz Finished!</h2>
      <p>Your Score: {finalPoints} / {newTotal} </p> 
      <button onClick={handleRestart}>Restart</button> 
    </div>
  );
}

export default FinalScore;
