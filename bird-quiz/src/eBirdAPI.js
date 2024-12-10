//this file contains different ebird API calls
import API_KEYS from "./APIKey.js";


const API_BASE_URL = "https://api.ebird.org/v2";


//getting a list of all species
function fetchSpeciesData(regionCode, sightingsOption){

  let URLEnd = "";

  //tjis is to set up the right URL because it's two different requests
  try{ 
  console.log("sightingsOption:", sightingsOption);
  if(sightingsOption ==="yearRound"){
    URLEnd = `product/spplist/${regionCode}`;
  } else if (sightingsOption==="recentlySighted"){
    URLEnd = `data/obs/${regionCode}/recent?back=30`;
  } else {
    throw new Error("messed up with sightings options");
  }
  console.log("Constructed URL:", URLEnd);
} catch(error){
  console.log(error)
}
  return fetchFromEbird(URLEnd);
}

//making API call
async function fetchFromEbird(URLEnd){
  let data = [];
  try {
      
    /*const response = await fetch(`${API_BASE_URL}/${URLEnd}`, {
      headers: {
      'x-ebirdapitoken': API_KEYS["API_EBIRD"]
      },
    }); */
    
    // const response = await fetch(`${API_BASE_URL}/${URLEnd}`, { 
    //     method: "GET", 
    //     mode: 'cors',
    //     headers: { 'Content-Type': 'application/json', 
    //     'X-eBirdApiToken': API_KEYS["API_EBIRD"]}
    // });

    let myHeaders = new Headers();
    myHeaders.append("X-eBirdApiToken", API_KEYS["API_EBIRD"]);

    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    let response = await fetch(`${API_BASE_URL}/${URLEnd}`, requestOptions)

    console.log(response)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    data = await response.json();

  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
    data = ["error"];
  } 
  //console.log(data);
  return data;
}



//making API call

/* async function fetchFromEbird(URLEnd){
let data = [];
try {
      
  /*const response = await fetch(`${API_BASE_URL}/${URLEnd}`, {
    headers: {
      'x-ebirdapitoken': API_KEYS["API_EBIRD"]
    },

  }); 

  const response = await fetch(`${API_BASE_URL}/${URLEnd}`, { 
    method: "GET", 
    headers: {
    'x-ebirdapitoken': API_KEYS["API_EBIRD"]}
  });


    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    data = await response.json();
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
    data = ["error"];
  }

  return data;

}

  /*

  async function fetchFromEbird(URLEnd) {
   const URL = `${API_BASE_URL}/${URLEnd}`;
   console.log(URL);
    try {
      
       const response = await fetch(URL, {
        headers: {
          'X-eBirdApiToken': API_KEY
        }
        });

        if (!response.ok){
          throw new Error(`problem with response otself`)
        }
        //console.log(response[0]);
        return await response.json();
        
    } catch (error){
      console.error("error with request:", error);
      throw error;
    }
  }
    
*/ 

    



  //function: pass list of birds, return 10 randomly selected with order + family
  function getQuizBirds(data){

    const dataLength = data.length;
    const randomIndices = new Set();

    while (randomIndices.size < 20) {
      const randomIndex = Math.floor(Math.random() * dataLength);
      randomIndices.add(randomIndex); // add unique index to the set
    }

    // 10 birds for the quiz
    const quizBirds = [];
    randomIndices.forEach(index => {
      quizBirds.push(data[index]);
    });

  return quizBirds;
  }
  



  export {fetchSpeciesData, getQuizBirds};



