import React, { useState } from 'react';
import './App.css';
import { fetchSpeciesData, getQuizBirds } from "./eBirdAPI.js";
import getImages from "./NuthatchAPI.js";
import { useNavigate } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress';


function QuizSettings() {
  const [locationOption, setLocationOption] = useState('lower48');
  const [state, setState] = useState('');
  const [sightingsOption, setSightingsOption] = useState('recentlySighted');
  const [mode, setMode] = useState('dropdown');

  const navigate = useNavigate();

  //so it looks like its doing something when it loads
  const [loading, setLoading] = useState(false);
  

  //here's all the stuff for changing the options

  const handleLocationChange = (e) => {
    setLocationOption(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleSightingsChange = (e) => {
    setSightingsOption(e.target.value);
  };

  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  //this is geting the list of birds from ebirdapi

   const handleStartQuiz = async () => {
    setLoading(true);
    let regionCode = 'US';

    if (locationOption === "lower48"){
        regionCode = "US";
    } else if (locationOption === "specificState" ){
        regionCode = `US-${state}`;
    } else {
      regionCode = "US";
    }
   console.log("sightingsOption:", sightingsOption);

   //hours wasted here: 6
  const data = await fetchSpeciesData(regionCode, sightingsOption );
 
   //getting birds to start the quiz (currently with example data)
   let birds = getQuizBirds(data);
  
   const withImages = await getImages(birds);

   const quizSettings = {
    locationOption,
    sightingsOption,
    state,
    birds: withImages,
    mode,
  };

  // Navigate to the quiz page with settings in state
  if (mode === 'dropdown') {
    navigate('/quiz-dropdown', { state: { quizSettings } }); // Pass settings to quiz-dropdown
  } else {
    navigate('/quiz-free-response', { state: { quizSettings } }); // Pass settings to quiz-free-response
  }
  
  }; 

  return (
    <div className='quiz-settings-container'>
      <h2>Bird Quiz</h2>
      
      <div className = "location-select"> 
        <label>
          Choose Location:
          <select value={locationOption} onChange={handleLocationChange}>
            <option value="lower48">Continental US</option>
            <option value="specificState">Specific US State</option>
          </select>
        </label>
        
        {locationOption === 'specificState' && (
          <select value={state} onChange={handleStateChange}>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District of Columbia(DC)</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>

          </select>
        )}
      </div>

      <div>
        <label>
          Timeframe:
          <select value={sightingsOption} onChange={handleSightingsChange}>
            <option value="recentlySighted">Last 30 days</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Answer options:
          <input 
            type="radio" 
            name="mode" 
            value="dropdown" 
            checked={mode === 'dropdown'} 
            onChange={handleModeChange}
          />
          Dropdown
          <input 
            type="radio" 
            name="mode" 
            value="typing" 
            checked={mode === 'typing'} 
            onChange={handleModeChange}
          />
          Free response
        </label>
      </div>
      
      <button onClick={handleStartQuiz}>Start Quiz!</button>
      {loading && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <CircularProgress />
          <p>Loading quiz data...</p>
        </div>
      )}
    </div>
  );
};

export default QuizSettings;
