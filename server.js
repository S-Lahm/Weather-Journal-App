// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;

const server = app.listen(port, listening);

function listening() {
  console.log(`server running on localhost: ${port}`);
};

// Respond with JS object when a GET request is made to the homepage
app.get('/all', get)

function get(req, res) {
  res.send(projectData)
}

app.post('/store', post)

function post(req, res) {
  projectData['temperature'] = req.body.temperature;
  projectData['date'] = req.body.date;
  projectData['user_response'] = req.body.user_response;
  res.send(projectData);
  console.log(projectData)
}
