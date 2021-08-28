/* Global Variables */

/*The API  information (URL, Key. Zipcode)*/

// The base URL of access data from the API by the zip code-- got it form Open weather website.
const baseURL= 'https://api.openweathermap.org/data/2.5/weather?zip='; // I've added https:// before the link after the feedback from the reviwer that he can't review the project.
// my API Key that i got after signing up in the website.
const apiKey= '&appid=c954cc4bc7f97065d78125053bb7cf65';// I've created a new api on the openweathermap websit --i hope this works
// assign a variable for getting the zipcode entered by user from the html element that has the zip as an id.
let zipCode= document.getElementById('zip');// I've removed .value from it as the instructor said in the 2 nd webinar
// assign a variabkle for getting the fellings that user typed
let content= document.getElementById('feelings');// I've removed . value from it.

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1 +'.'+ d.getDate()+'.'+ d.getFullYear(); // I've added 1 to the month as the instructor adviced in the webinar

/*then I added an event listener which is a "click" on the generate button that will callback the function "actionTaken"
 inside that function "actionTaken" we will callback our (asynchronous fetch API) function */
document.getElementById('generate').addEventListener('click', actionTaken);

// the 1st callback function "actionTaken"
function actionTaken(){
 // assign a variable for zipCode.value -- which means the entered zip by user
   let zip= zipCode.value;
  // asynchronous fetch API callback function with the three arguments (baseurl, zipcode. value ,APIkey)
   getZipCode(baseURL, zip, apiKey);//  here i added the value to be get from zipCode element.
   .then(function(data){
      console.log(data);
     // call postData function:
      postData('/ourSavedData', {temp: data.main.temp, date: d , userContent: data.main.feels_like});// edited according to the openweather data
    });// end of then backfunction
};// end of actionTaken function.

// the 2nd callback function "getZipCode"
const getZipCode= async (baseURL, zip, apiKey) =>{
  // fetch API info
  const response= await fetch (baseURL+zip+apiKey);
  try{
      const data= await response.json();
      console.log(data);// to check the result in the console
      return data; // as required in the project rubrics.
    }// end of try
    catch (error){
    console.log('error', error);// to trace the error in the console to handle it.
  };// end of catch error
  // I may return here and add some code to this function like posting data but until now i'm following the "Udacity Development Strategy"
}// end of "getZipCode" function

// Get RouteII using async fetch the data from the app endpoint
 const retrieveEndpointData= async (url='/getNewData')=>{
  // fetching the data from the url which is (the route i made in the server side in Get RouteI)
   const request= await fetch (url);
   try {
     const allData= await request.json(); // transforming data using json
   }// end of try
   catch(error){
     console.log("error", error); // handling the error
   }// end of catch
 };// end of async function-- I'm not sure is it the correct way to do it or not.

 // Post RouteII
const postData= async(url='', data={})=>{ // has 2 argument the path to make postr to and a data object
   const response= await fetch(url,{
     method: POST,
     credentials: 'same-origin',
     header: {
       'Content-Type': 'application/json' ,
     },
     body: json.stringify(data)
   }); // end of fetch function
};// end of postData function--there's an error appears in the console in line 58 but i don't know how to fix it

/*
//I'll call the postData function in line 27 and see what will happen.
postData('/ourSavedData', {temp: data.main.temp, date:newDate, userContent: content});*/
