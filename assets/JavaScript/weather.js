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
let city = document.getElementById('currentDayCity');
let currentTemp = document.getElementById('currentDayTemp');
let currentWind = document.getElementById('currentDayWind');
let currentHumidity = document.getElementById('currentDayHumidity');
let searchBar = document.getElementById('fillBar');
let currentBox = document.getElementById('centerBox');
let button = document.getElementById('submit');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a758775ba6mshcc29d7a6d54b17cp1c01a6jsnafa198b33208',
		'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
	}
};


// The currenDay function is fetching the information from the API and sending it to the displayCurrentData function.
function currentDay() {
	var currentCity = 'https://community-open-weather-map.p.rapidapi.com/weather?units=imperial&q=' + searchBar.value;
	fetch(currentCity, options)
		.then(response => response.json())
		.then(data => displayCurrentData(data))
		.catch(err => console.error(err));

	console.log(currentCity);

}

function getCurrentDate(offset) {
	let day = new Date();
    let today = new Date(day);
    today.setDate(today.getDate() + offset); 
	let dd = String(today.getDate()).padStart(2, '0');
	let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	let yyyy = today.getFullYear();

	today = mm + '/' + dd + '/' + yyyy;
	return today;
}



function displayCurrentData(data) {
	console.log(data);
    city.innerText =  data.name + " (" + getCurrentDate(0) + ")";
    currentTemp.innerText = "Temperature: " + data.main.temp + " \u00B0F";
    currentWind.innerText = "Wind: " + data.wind.speed + " MPH";
	currentHumidity.innerText = "Humidity: " + data.main.humidity + "%";

    fiveDayForecast();
}

// This is the 5 day forecast function
function fiveDayForecast() {
	var currentCity1 = 'https://community-open-weather-map.p.rapidapi.com/forecast?units=imperial&q=' +  searchBar.value;

	fetch(currentCity1, options)
		.then(response => response.json())
		.then(data => {
            dayOneData(data);
            dayTwoData(data);
            dayThreeData(data);
            dayFourData(data);
            dayFiveData(data);
        })
		.catch(err => console.error(err));

	console.log(currentCity1);
}

function dayOneData(data) {
    let day_1 = document.getElementById('dayOneDate');
    let temp_1 = document.getElementById('dayOneTemp');
    let wind_1 = document.getElementById('dayOneWind');
    let humidity_1 = document.getElementById('dayOneHumidity'); 
    console.log(data);
    day_1.innerText  = " (" + getCurrentDate(1) + ")";
    temp_1.innerText = "Temperature: " + data.list[0].main.temp + " \u00B0F";
    wind_1.innerText = "Wind: " + data.list[0].wind.speed + " MPH";
    humidity_1.innerText = "Humidity: " + data.list[0].main.humidity + "%";
}


function dayTwoData(data) {
    let day_2 = document.getElementById('dayTwoDate');
    let temp_2 = document.getElementById('dayTwoTemp');
    let wind_2 = document.getElementById('dayTwoWind');
    let humidity_2 = document.getElementById('dayTwoHumidity'); 
    console.log(data);
    day_2.innerText = " (" + getCurrentDate(2) + ")";
    temp_2.innerText = "Temperature: " + data.list[1].main.temp + " \u00B0F";
    wind_2.innerText = "Wind: " + data.list[1].wind.speed + " MPH";
    humidity_2.innerText = "Humidity: " + data.list[1].main.humidity + "%";
}

function dayThreeData(data) {
    let day_3 = document.getElementById('dayThreeDate');
    let temp_3 = document.getElementById('dayThreeTemp');
    let wind_3 = document.getElementById('dayThreeWind');
    let humidity_3 = document.getElementById('dayThreeHumidity'); 
    console.log(data);
    day_3.innerText = " (" + getCurrentDate(3) + ")";
    temp_3.innerText = "Temperature:" + data.list[2].main.temp + " \u00B0F";
    wind_3.innerText = "Wind: " + data.list[2].wind.speed + " MPH";
    humidity_3.innerText = "Humidity:" + data.list[2].main.humidity + "%";
}

function dayFourData(data) {
    let day_4 = document.getElementById('dayFourDate');
    let temp_4 = document.getElementById('dayFourTemp');
    let wind_4 = document.getElementById('dayFourWind');
    let humidity_4 = document.getElementById('dayFourHumidity'); 
    console.log(data);
    day_4.innerText= " (" + getCurrentDate(4) + ")";
    temp_4.innerText = "Temperature: " + data.list[3].main.temp + " \u00B0F";
    wind_4.innerText = "Wind: " + data.list[3].wind.speed + " MPH";
    humidity_4.innerText = "Humidity: " + data.list[3].main.humidity + "%";
}

function dayFiveData(data) {
    let day_5 = document.getElementById('dayFiveDate');
    let temp_5 = document.getElementById('dayFiveTemp');
    let wind_5 = document.getElementById('dayFiveWind');
    let humidity_5 = document.getElementById('dayFiveHumidity'); 
    console.log(data);
    day_5.innerText = " (" + getCurrentDate(5) + ")";
    temp_5.innerText = "Temperature: " + data.list[4].main.temp + " \u00B0F";
    wind_5.innerText = "Wind: " + data.list[4].wind.speed + " MPH";
    humidity_5.innerText = "Humidity: " + data.list[4].main.humidity + "%";
}
button.addEventListener('click', (evt) => {
	currentDay();
	evt.preventDefault();
});