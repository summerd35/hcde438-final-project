import React, { useState, useEffect } from 'react';
import TextInput from 'react-autocomplete-input';
import 'react-autocomplete-input/dist/bundle.css';
import { useNavigate, useLocation } from 'react-router-dom';
import {speciesAnatidae,
  speciesOdontophoridae,
  speciesPhasianidae,
  speciesCaprimulgidae,
  speciesApodidae,
  speciesTrochilidae,
  speciesCuculidae,
  speciesColumbidae,
  speciesRallidae,
  speciesAramidae,
  speciesGruidae,
  speciesPodicipedidae,
  speciesRecurvirostridae,
  speciesHaematopodidae,
  speciesCharadriidae,
  speciesScolopacidae,
  speciesStercorariidae,
  speciesAlcidae,
  speciesLaridae,
  speciesPhaethontidae,
  speciesGaviidae,
  speciesDiomedeidae,
  speciesOceanitidae,
  speciesHydrobatidae,
  speciesCiconiidae,
  speciesFregatidae,
  speciesSulidae,
  speciesAnhingidae,
  speciesPhalacrocoracidae,
  speciesPelecanidae,
  speciesArdeidae,
  speciesPandionidae,
  speciesAccipitridae,
  speciesStrigidae,
  speciesTrogonidae,
  speciesAlcedinidae,
  speciesPicidae,
  speciesFalconidae,
  speciesPsittacidae,
  speciesPsittaculidae,
  speciesAegithalidae,
  speciesAlaudidae,
  speciesBombycillidae,
  speciesCardinalidae,
  speciesCerthiidae,
  speciesCinclidae,
  speciesCorvidae,
  speciesEstrildidae,
  speciesFringillidae,
  speciesHirundinidae,
  speciesIcteridae,
  speciesLaniidae,
  speciesMimidae,
  speciesMotacillidae,
  speciesMuscicapidae,
  speciesParidae,
  speciesParulidae,
  speciesPasserellidae,
  speciesPasseridae,
  speciesPeucedramidae,
  speciesPhylloscopidae,
  speciesPolioptilidae,
  speciesPtiliogonatidae,
  speciesPycnonotidae,
  speciesRegulidae,
  speciesRemizidae,
  speciesSittidae,
  speciesSpindalidae,
  speciesSturnidae,
  speciesTityridae,
  speciesTroglodytidae,
  speciesTurdidae,
  speciesTyrannidae,
  speciesVireonidae} from "./Options";


const QuizFreeResponse = () => {
  //const navigate = useNavigate();
  const {state} = useLocation();
  const { quizSettings } = state || {}; // idk what tjos does if im being honest
  const { birds } = quizSettings || {};
  const [order, setOrder] = useState('');
  const [family, setFamily] = useState('');
  const [species, setSpecies] = useState('');
  const [familyOptions, setFamilyOptions] = useState([]);
  const [speciesOptions, setSpeciesOptions] = useState([]);
  const [points, setPoints] = useState(0); // Track points in state
  const navigate = useNavigate();
  //dont edit answer
  const [isChecked, setIsChecked] = useState(false);

  const [feedback, setAnswerFeedback] = useState('');

  //image
  const [selectedImage, setSelectedImage] = useState('');

  //done with quiz
  const [isQuizDone, setIsQuizDone] = useState(false);
  

  const orderOptions = [
      "Galliformes",
      "Anseriformes",
      "Caprimulgiformes",
      "Apodiformes",
      "Cuculiformes",
      "Columbiformes",
      "Gruiformes",
      "Podicipediformes",
      "Charadriiformes",
      "Phaethontiformes",
      "Gaviiformes",
      "Procellariiformes",
      "Ciconiiformes",
      "Suliformes",
      "Pelecaniformes",
      "Accipitriformes",
      "Strigiformes",
      "Trogoniformes",
      "Coraciiformes",
      "Piciformes",
      "Falconiformes",
      "Psittaciformes",
      "Passeriformes"
    
  ];
  
  
  //update family options based on order
  const handleOrderSelect = (value) => {
    setOrder(value);
    setFamily('');

    if (value === "Galliformes"){
      setFamilyOptions(["Odontophoridae", "Phasianidae"]);

    } else if (value === "Anseriformes"){
      setFamilyOptions(["Anatidae"]);
    
    } else if (value === "Caprimulgiformes"){
      setFamilyOptions(["Caprimulgidae" ])
    
    }else if (value === "Apodiformes"){
      setFamilyOptions(["Apodidae", "Trochilidae"]);

    }else if (value === "Cuculiformes"){
      setFamilyOptions(["Cuculidae"]);

    }else if (value === "Columbiformes"){
      setFamilyOptions(["Columbidae"]);

    }else if (value === "Gruiformes"){
      setFamilyOptions(["Rallidae","Aramidae", "Gruidae"]);

    }else if (value === "Podicipediformes"){
      setFamilyOptions(["Podicipedidae"]);

    }else if (value === "Charadriiformes"){
      setFamilyOptions(["Recurvirostridae", "Haematopodidae", "Charadriidae","Scolopacidae","Stercorariidae","Alcidae", "Laridae"]);

    }else if (value === "Phaethontiformes"){
      setFamilyOptions(["Phaethontidae"]);

    }else if (value === "Gaviiformes"){
      setFamilyOptions(["Gaviidae"]);

    }else if (value === "Procellariiformes"){
      setFamilyOptions(["Diomedeidae", "Oceanitidae","Hydrobatidae"]);

    }else if (value === "Ciconiiformes"){
      setFamilyOptions(["Ciconiidae"]);

    }else if (value === "Suliformes"){
      setFamilyOptions(["Fregatidae","Sulidae","Anhingidae","Phalacrocoracidae"]);

    }else if (value === "Pelecaniformes"){
      setFamilyOptions(["Pelecanidae","Ardeidae"]);

    }else if (value === "Accipitriformes"){
      setFamilyOptions(["Pandionidae", "Accipitridae", ]);

    }else if (value === "Strigiformes"){
      setFamilyOptions(["Accipitridae","Strigidae"]);

    }else if (value === "Trogoniformes"){
      setFamilyOptions(["Trogonidae"]);

    }else if (value === "Coraciiformes"){
      setFamilyOptions(["Alcedinidae"]);

    }else if (value === "Piciformes"){
      setFamilyOptions(["Picidae"]);

    }else if (value === "Falconiformes"){
      setFamilyOptions(["Falconidae"]);

    }else if (value === "Psittaciformes"){
      setFamilyOptions(["Psittacidae", "Psittaculidae"]);

    }else if (value === "Passeriformes"){
      setFamilyOptions([
        "Aegithalidae",
        "Alaudidae",
        "Bombycillidae",
        "Cardinalidae",
        "Certhiidae",
        "Cinclidae",
        "Corvidae",
        "Estrildidae",
        "Fringillidae",
        "Hirundinidae",
        "Icteridae",
        "Icteriidae",
        "Laniidae",
        "Mimidae",
        "Motacillidae",
        "Muscicapidae",
        "Paridae",
        "Parulidae",
        "Passerellidae",
        "Passeridae",
        "Peucedramidae",
        "Phylloscopidae",
        "Polioptilidae",
        "Ptiliogonatidae",
        "Pycnonotidae",
        "Regulidae",
        "Remizidae",
        "Sittidae",
        "Spindalidae",
        "Sturnidae",
        "Tityridae", "Troglodytidae", "Turdidae", "Tyrannidae", "Vireonidae"
      ] );

    }else{
      setFamilyOptions(["None of the above"])
    }
}

//do the same thing for species/family
//I might put this in another file because it's a lot
const handleFamilySelect = (value) => {
  setFamily(value);
  setSpecies('');
  if (value === "Anatidae") {
    setSpeciesOptions(speciesAnatidae);
  } else if (value === "Odontophoridae") {
    setSpeciesOptions(speciesOdontophoridae);
  } else if (value === "Phasianidae") {
    setSpeciesOptions(speciesPhasianidae);
  } else if (value === "Caprimulgidae") {
    setSpeciesOptions(speciesCaprimulgidae);
  } else if (value === "Apodidae") {
    setSpeciesOptions(speciesApodidae);
  } else if (value === "Trochilidae") {
    setSpeciesOptions(speciesTrochilidae);
  } else if (value === "Cuculidae") {
    setSpeciesOptions(speciesCuculidae);
  } else if (value === "Columbidae") {
    setSpeciesOptions(speciesColumbidae);
  } else if (value === "Rallidae") {
    setSpeciesOptions(speciesRallidae);
  } else if (value === "Aramidae") {
    setSpeciesOptions(speciesAramidae);
  } else if (value === "Gruidae") {
    setSpeciesOptions(speciesGruidae);
  } else if (value === "Podicipedidae") {
    setSpeciesOptions(speciesPodicipedidae);
  } else if (value === "Recurvirostridae") {
    setSpeciesOptions(speciesRecurvirostridae);
  } else if (value === "Haematopodidae") {
    setSpeciesOptions(speciesHaematopodidae);
  } else if (value === "Charadriidae") {
    setSpeciesOptions(speciesCharadriidae);
  } else if (value === "Scolopacidae") {
    setSpeciesOptions(speciesScolopacidae);
  } else if (value === "Stercorariidae") {
    setSpeciesOptions(speciesStercorariidae);
  } else if (value === "Alcidae") {
    setSpeciesOptions(speciesAlcidae);
  } else if (value === "Laridae") {
    setSpeciesOptions(speciesLaridae);
  } else if (value === "Phaethontidae") {
    setSpeciesOptions(speciesPhaethontidae);
  } else if (value === "Gaviidae") {
    setSpeciesOptions(speciesGaviidae);
  } else if (value === "Diomedeidae") {
    setSpeciesOptions(speciesDiomedeidae);
  } else if (value === "Oceanitidae") {
    setSpeciesOptions(speciesOceanitidae);
  } else if (value === "Hydrobatidae") {
    setSpeciesOptions(speciesHydrobatidae);
  } else if (value === "Ciconiidae") {
    setSpeciesOptions(speciesCiconiidae);
  } else if (value === "Fregatidae") {
    setSpeciesOptions(speciesFregatidae);
  } else if (value === "Sulidae") {
    setSpeciesOptions(speciesSulidae);
  } else if (value === "Anhingidae") {
    setSpeciesOptions(speciesAnhingidae);
  } else if (value === "Phalacrocoracidae") {
    setSpeciesOptions(speciesPhalacrocoracidae);
  } else if (value === "Pelecanidae") {
    setSpeciesOptions(speciesPelecanidae);
  } else if (value === "Ardeidae") {
    setSpeciesOptions(speciesArdeidae);
  } else if (value === "Pandionidae") {
    setSpeciesOptions(speciesPandionidae);
  } else if (value === "Accipitridae") {
    setSpeciesOptions(speciesAccipitridae);
  } else if (value === "Strigidae") {
    setSpeciesOptions(speciesStrigidae);
  } else if (value === "Trogonidae") {
    setSpeciesOptions(speciesTrogonidae);
  } else if (value === "Alcedinidae") {
    setSpeciesOptions(speciesAlcedinidae);
  } else if (value === "Picidae") {
    setSpeciesOptions(speciesPicidae);
  } else if (value === "Falconidae") {
    setSpeciesOptions(speciesFalconidae);
  } else if (value === "Psittacidae") {
    setSpeciesOptions(speciesPsittacidae);
  } else if (value === "Psittaculidae") {
    setSpeciesOptions(speciesPsittaculidae);
  } else if (value === "Aegithalidae") {
    setSpeciesOptions(speciesAegithalidae);
  } else if (value === "Alaudidae") {
    setSpeciesOptions(speciesAlaudidae);
  } else if (value === "Bombycillidae") {
    setSpeciesOptions(speciesBombycillidae);
  } else if (value === "Cardinalidae") {
    setSpeciesOptions(speciesCardinalidae);
  } else if (value === "Certhiidae") {
    setSpeciesOptions(speciesCerthiidae);
  } else if (value === "Cinclidae") {
    setSpeciesOptions(speciesCinclidae);
  } else if (value === "Corvidae") {
    setSpeciesOptions(speciesCorvidae);
  } else if (value === "Estrildidae") {
    setSpeciesOptions(speciesEstrildidae);
  } else if (value === "Fringillidae") {
    setSpeciesOptions(speciesFringillidae);
  } else if (value === "Hirundinidae") {
    setSpeciesOptions(speciesHirundinidae);
  } else if (value === "Icteridae") {
    setSpeciesOptions(speciesIcteridae);
  } else if (value === "Laniidae") {
    setSpeciesOptions(speciesLaniidae);
  } else if (value === "Mimidae") {
    setSpeciesOptions(speciesMimidae);
  } else if (value === "Motacillidae") {
    setSpeciesOptions(speciesMotacillidae);
  } else if (value === "Muscicapidae") {
    setSpeciesOptions(speciesMuscicapidae);

  } else if (value === "Paridae") {
    setSpeciesOptions(speciesParidae);
  } else if (value === "Parulidae") {
    setSpeciesOptions(speciesParulidae);
  } else if (value === "Passerellidae") {
    setSpeciesOptions(speciesPasserellidae);
  } else if (value === "Passeridae") {
    setSpeciesOptions(speciesPasseridae);
  } else if (value === "Peucedramidae") {
    setSpeciesOptions(speciesPeucedramidae);
  } else if (value === "Phylloscopidae") {
    setSpeciesOptions(speciesPhylloscopidae);
  } else if (value === "Polioptilidae") {
    setSpeciesOptions(speciesPolioptilidae);
  } else if (value === "Ptiliogonatidae") {
    setSpeciesOptions(speciesPtiliogonatidae);
  } else if (value === "Pycnonotidae") {
    setSpeciesOptions(speciesPycnonotidae);
  } else if (value === "Regulidae") {
    setSpeciesOptions(speciesRegulidae);
  } else if (value === "Remizidae") {
    setSpeciesOptions(speciesRemizidae);
  } else if (value === "Sittidae") {
    setSpeciesOptions(speciesSittidae);
  } else if (value === "Spindalida") {
    setSpeciesOptions(speciesSpindalidae);
  } else if (value === "Sturnidae") {
    setSpeciesOptions(speciesSturnidae);
  } else if (value === "Tityridae") {
    setSpeciesOptions(speciesTityridae);
  } else if (value === "Troglodytidae") {
    setSpeciesOptions(speciesTroglodytidae);
  } else if (value === "Turdidae") {
    setSpeciesOptions(speciesTurdidae);
  } else if (value === "Tyrannidae") {
    setSpeciesOptions(speciesTyrannidae);
  } else if (value === "Vireonidae") {
    setSpeciesOptions(speciesVireonidae);
  } else {
    setSpeciesOptions(["error"]);
  }
}
const showAnswer = () => {
  
  const correctAnswers = `
    Order: ${currentSpecies.order}, 
    Family: ${currentSpecies.family}, 
    Species: ${currentSpecies.comName}
  `;

  // add points
  checkMatching(order, family, species);

  return correctAnswers;
};

const handleCheckAnswer = () => {
  const feedback = showAnswer(); // Get the correct answers and feedback
  setAnswerFeedback(feedback);
  setIsChecked(true);
};

useEffect(() => {
    setSpecies(''); 
}, [order, family]);

const checkMatching = (orderValue, familyValue, speciesValue) => {
  if ( orderValue?.toLowerCase() === currentSpecies.order?.toLowerCase()){
    setPoints(points => points + 1); // point for each one
  } 
  if (familyValue?.toLowerCase() ===currentSpecies.family?.toLowerCase()){
    setPoints(points => points + 1);
  } 
  if(speciesValue?.toLowerCase() === currentSpecies.comName?.toLowerCase() ){
    setPoints(points => points + 1);
  }
};
    const [currentIndex, setCurrentIndex] = useState(0); 
    const currentSpecies = birds[currentIndex];
  
    // next button
    const handleNext = () => {
      setAnswerFeedback('');
      setIsChecked(false)
        console.log(points);
        setOrder('');
        setFamily('');
        setSpecies('');
      if (currentIndex < birds.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setIsQuizDone(true);
      }
    };

    const handleDone = () => {
      navigate('/final-score', { state: { points, totalPoints: birds.length } });
    }
    useEffect(() => {
      if (currentSpecies && currentSpecies.images?.length > 0) {
        setSelectedImage(
          currentSpecies.images[Math.floor(Math.random() * currentSpecies.images.length)]
        );
      }
    }, [currentIndex, currentSpecies]);
  
    return (
      <div className="quiz-container">
        <h2>Bird Quiz</h2>
  
        {currentSpecies && (
          <div className="quiz-image">
            <h3>What's this bird?</h3>
            <div>
            <label>Order:</label>
            <TextInput
              value={order}
              onChange={(value) => handleOrderSelect(value)}
              disabled={isChecked}
              options={orderOptions}
            />
          </div>
          <div>
            <label>Family:</label>
            <TextInput
              value={family}
              onChange={(value) => handleFamilySelect(value)}
              disabled={isChecked || !order}
              options={familyOptions}
            />
          </div>
          <div>
          <div>
            <label>Species:</label>
            <TextInput
              value={species}
              onChange={(value) => setSpecies(value)}
              disabled={isChecked || !family}
              options={speciesOptions}
            />
          </div>

            <div>
            <button className= "check-answer-btn" onClick={handleCheckAnswer}>Check Answer</button>
{feedback && (
  <div className="feedback">
    <p>{feedback}</p> 
  </div> 
)}</div> 
          </div>
  
            <img
              src={selectedImage}
              alt={currentSpecies.comName}
              className="quiz-image-size"
            />
            <p>Current score: {points}</p>
          </div>
        
        )}
  <div style={{ marginBottom: '10px' }}>
        Question {currentIndex + 1} of {birds.length}
      </div>
  <button onClick={handleNext} disabled={isQuizDone}>Next</button>
  <button onClick={handleDone}>Finish
  </button>

      </div>
    );
  };
export default QuizFreeResponse;