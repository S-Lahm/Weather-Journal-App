# Project Overview
This project combines data from the OpenWeatherMap API and client side (browser) HTML forms, to create a web app that records a weather journal for users.

The project has:  
1. Node project environment (server.js) that contains a server created running on the port, a GET route that returns the projectData object in the server code and a POST route that adds incoming data to projectData.  
2. (app.js) that contains an API credentials from OpenWeatherMap website and async functions that GET, POST and update the UI.

A starter code that has all the elements and CSS needed to complete the project, plus a little help getting started with the JavaScript was provided by Udacity:
https://github.com/udacity/fend/tree/refresh-2019

# API credentials
To successfully run this project, create API credentials on OpenWeatherMap.com and add your personal API key to **const apiKey** inside app.js:  
const apiKey = 'YOUR_API_KEY_HERE';