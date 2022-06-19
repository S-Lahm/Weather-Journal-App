/* Global Variables */
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip='; // Base URL taken from OpenWeatherMap website documentation
const apiKey = 'YOUR_API_KEY_HERE'; // API credentials acquired from OpenWeatherMap website

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 +'.'+ d.getDate()+'.'+ d.getFullYear();

// An event listener for the element with the id: generate, with a callback function to execute when it is clicked.
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  const zip = document.getElementById('zip').value;
  const feeling = document.getElementById('feelings').value;

if (zip !== '') {
        promise1(baseUrl, zip, apiKey)
            .then(function(data) {
                // Add data
                promise2('/store', {temperature: data.main.temp, date: newDate, user_response: feeling} );
            }).then(function() {
                // call uodate to update browser content
                promise3();
            });
          }
        }

// An async function that uses fetch() to make a GET request to the OpenWeatherMap API
const promise1 = async function (baseUrl, zip, apiKey) {
  const response = await fetch(baseUrl+zip+apiKey)
  try {
    // Transform into JSON
    const data = await response.json();
    console.log(data)
    return data;
    // Appropriately handle the error
  } catch(error) {
    console.log("error", error);
  }
}

// Async POST
const promise2 = async function (url = '', data = {}) {
  console.log(data);
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  console.log(data);
  try {
    // Transform into JSON
    const data = await response.json();
    console.log(data)
    return data;
  // Appropriately handle the error
  }catch(error) {
    console.log("error", error);
  }
}

const promise3 = async function () {
  const response = await fetch('/all')
  try {
    // Transform into JSON
    const data = await response.json();
    console.log(data);
    document.getElementById('temp').innerHTML = data.temperature
    document.getElementById('date').innerHTML = data.date
    document.getElementById('content').innerHTML = data.user_response
  // Appropriately handle the error
  }catch(error) {
    console.log("error", error);
  }
}
