// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require ('express'); // assign a variable  the express node package after installing its package by npm cmd

// Start up an instance of app
const app = express();

/* Middleware*/

const bodyParser= require('body-parser');// require body-parse package after installing its package by npm cmd
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

const cors= require ('cors');  // assign a variable for the cors package after also installing its package by npm cmd
app.use(cors()); // let our app to use cors

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server

const port= 8000; //  assign a port for our server that we will use by the localhost

const server= app.listen(port, listening); // make our server use the assigned port by using listen method an put 2 arguments for it.
//The 1st parameter is the port that the server will listen to it, and the 2nd parameter is the callback function to be executed after listening to the port.
 function listening(){ //The callback function "listening" that we use it for debuging and indicator that the server is running.
   console.log ('Server is running on localhost: '+ port); // the message that will appear in console when we run our Server
 }; // end of our listening call backfunction-- it works.

// Get RouteI
// the 1st argument is a string naming the route & 2nd argument is the callback function "returnData"
app.get('/getNewData', returnData);
// the callback function "returnData"
function returnData(req, res){
 res.send(projectData);// returning our JS object "projectData"
};// end of Get RouteI

// Post RouteI
app.post('/ourSavedData', (req, res)=>{
  /*projectData= { // our new entry is JS object that will
   temperature: req.body.temp,
   date: req.body.date,
   content: req.body.content,
 };// end of the Object -- This was the old way that i used to define the propertites of object projectData*/
//console.log(req.body); // this line for test -- Thank God it works.
 // Different way to set projectData properties according to second webinar
 projectData['temp']= req.body.temp;// edited according to reviewer advice
 projectData['date']= req.body.date;
 projectData['content']= req.body.feeling;//edited according to reviewer advice
 res.send(projectData); // the response that will be send
 console.log('Post received is:'); //for test
 console.log(projectData); // to see the new entry in the console.
}); // end of Post RouteI
