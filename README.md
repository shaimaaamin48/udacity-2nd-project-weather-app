# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI.

## Project Requirements:

1. Setting up *Node & Express* Environment on local machine
2. Project Dependencies (*body-parser, json, cors*).
3. Setting up *Local server* and running it then producing a feedback to the console.
4. Creating an API credentials on *Openweathermap.org* website.
5. APP API Endpoint: assign an Object called (projectData) in the `server.js` file.
6. Integrating OpenWeatherMap API.
7. Return endpoint data in *Server Side* and *Client Side* by setting a *"Get Route"* in each side.
8. Post Route: set up on the *Server Side* and be executed in the *Client Side*
9. Update UI.


## Steps & Techniques used:

**Setting up Node & Express**

 1. use the 1st link that written under my *Links* to download *node.js* for windows and the 2nd link to now how to install *Node Package Manager-npm* and use it.
 2. using *npm cmd* which is the terminal to install *Express*.
 3. In the `server.js`, I required the *Express* package by assigning a variable called "express" to it.

 **Project Dependencies**

1. Use npm install commands to install our used packages *body-parser, json, cors*
2. On the *Server side* in the `server.js` file , I required the body-parser package by assigning a variable called "bodyParser" to it.
3. I made our instance app use the body-parser as a middleware by using "use" method.
4. After that I required *cors* package by assigning a variable to it and then allow our app to use it by "Use" method.

**Setting up "Local Server"**

1. Assign a port to my server which is *8000*
2. Use *listen* method in our app and assign 2 arguments to it. The 1st parameter is the port that the server will listen to it, and the 2nd parameter is the callback function to be executed after listening to the port.
3. I used a callback function named *listening* to print to the console a message that confirms our server is running after we use the following command on the terminal: *node server.js*

**Creating an API Credentials**
* Signup on the *Openweathermap.org* website by creating an account to generate an *APIKey* to use it in the project.

**APP API Endpoint**
* It was already created by default in the `server.js` file.

**Integrating OpenWeatherMap API**
1. In the `website/app.js` file, setting up a variables that contains (*baseURL, personal APIkey, Zipcode*)
2. Following the steps that were in *"Udacity Development Strategy"* & *"project rubrics"* by using the asynchronous function *(fetch, try, catch)* and setting its parameters to use the API data.

**Return endpoint data in Server Side**
* In the `server.js` file, use *.get()* method to get the route and *.send()* method to return our JS object "projectData".

**Return endpoint data in Client Side**
* In the `website/app.js` file, use asynchronous function *(fetch)* to fetch data from our app created endpoint.

**Post Route**
   *On Server Side*
    * As written in the project rubrics  ,I created a new entry (the name is JS object *projectData*) then use console.log to see the new entry.
   *On client Side*
    * i made asynchronous function called *postData*
## Links, Resources & References:
1. https://nodejs.org/en/download/
2. https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
3. https://openweathermap.org/current#zip
4. https://home.openweathermap.org/api_keys
5. https://review.udacity.com/#!/rubrics/2655/view
6. https://classroom.udacity.com/nanodegrees/nd001-mena-nfp2/parts/5c546e88-361e-4c4d-8fbd-1ad6dee27810/modules/42f360ec-ea7d-4619-8780-882642a3edd3/lessons/346b2d26-5c1e-4d05-b442-26222f2c93e1/concepts/58e551fe-9a86-4f82-89bc-ab737f5a399e.

##  Notes:
1. I've added "https://" before the *baseURL variable* after the feedback from the reviewer that he couldn't review the project.
2. Also I've created a new APIkey on the Openweathermap.org which is *c954cc4bc7f97065d78125053bb7cf65* .
//3. In the 2 variables (baseURL&APIKey), I've replaced the single quote with backtick (`) character.
