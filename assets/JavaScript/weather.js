// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

// all of the global variables that are used for the box displaying the current day's weather conditions
var city = document.getElementById('currentDayCity');
var currentTemp = document.getElementById('currentDayTemp');
var currentWind = document.getElementById('currentDayWind');
var currentHumidity = document.getElementById('currentDayHumidity');
var currentUV = document.getElementById('currentDayUV');
var searchBar = document.getElementById('fillBar');
var currentBox = document.getElementById('centerBox');
var button = document.getElementById('submit');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a758775ba6mshcc29d7a6d54b17cp1c01a6jsnafa198b33208',
		'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
	}
};


// Calling the city name 
// when the user types in information into the search bar the api uses the city name to display the information in the black box
// user types in information into the bar 
// user clicks search 
// the website pulls information from the API 
// The data is returned to the website and displayed 

function currentDay() {
    console.log(searchBar.getvalue);
    var currentCity = 'https://community-open-weather-map.p.rapidapi.com/weather?q=' + searchBar.value;
    fetch(currentCity, options)
    .then(response => response.json())
	.then(data => console.log(data))

	.catch(err => console.error(err));
    
    console.log(currentCity);
// the website requests the data form the API
// The website displays the data that the API returned
};

button.addEventListener('click', currentDay());

function displayCurrentData(data) {
    city.innerText = ""

}