var fivedayEl = document.querySelector('#fiveday');
var buttonEl = document.querySelector('#searchcity');
var cityNameEl = document.querySelector('#cityname');
var currentDay = document.querySelector('#daily');

// Empty array to store past cities into
var cityHistory = []
var searchHistory = document.querySelector('#searchHistory');
var researchBtnEl = document.querySelector('#research-btn');


///get API based on city name through concatenation 
var callCity = function (cityname) {
var apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&appid=825f8c44f819c519c3d1ebb993400003&units=imperial";


//Creating variables to store different API calls
var currentCity, onecall;

//Fetching first API
fetch(apiURL)
.then(function (response){
    return response.json();
})
.then(function (data) {
    console.log(data);
    //Getting Lat/Lon from this API
    var cityLat = data.city.coord.lat;
    var cityLon = data.city.coord.lon;
    //Assigning this API's data to a variable
    currentCity = data;
    //Requesting another variable (not necessary as I could just use one but for experience gains I'm using two)
    return fetch("https://api.openweathermap.org/data/3.0/onecall?lat=" + cityLat + "&lon=" + cityLon + "&exclude=minutely,hourly&appid=825f8c44f819c519c3d1ebb993400003&units=imperial")
})
.then(function (response){
        return response.json();
})
.then (function (data){
    console.log(data);
    //Assigning the second API to a variable
    onecall = data;

    //Naming our weather box  from our first API
    var actualName = currentCity.city.name;

    //Converting the onecall date from unix time
   var currentDate = new Date(onecall.current.dt * 1000);
   var currentDateText = currentDate.toLocaleDateString("en-US");



    //Getting icon codes/url
    var iconcode = onecall.current.weather[0].icon
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

    //Setting main display box to display proper name and proper date
    $(cityNameEl).text(actualName + " (" + currentDateText + ")");
    $('#weathericon').attr("src", iconurl);

    //Empty all previous data and append new
    $(currentDay).empty()
    $(currentDay).append("<p> Temp: " + onecall.current.temp + "°F </p>");
    $(currentDay).append("<p> Wind: " + onecall.current.wind_speed + " MPH </p>");
    $(currentDay).append("<p> Humidity: " + onecall.current.humidity + " % </p>");
    $(currentDay).append("<p> UV Index: <span class=uvi>" + onecall.daily[0].uvi + "</span></p>");
    
    //If else for current day UVI
    if (onecall.current.uvi < 3){
        $(".uvi").addClass("uvi-low");
    } else if (onecall.current.uvi  >= 3 && onecall.current.uvi  <= 5){
        $(".uvi").addClass("uvi-moderate");
    } else if (onecall.current.uvi  >= 6 && onecall.current.uvi  <= 7){
        $(".uvi").addClass("uvi-high");
    } else if (onecall.current.uvi  >= 8 && onecall.current.uvi  <= 10){
        $(".uvi").addClass("uvi-very");
    } else $(".uvi").addClass("uvi-xtreme");

    //For loop to iterate through 5 day forecast
    $(".fivedaycard").remove()
    for (let i = 1; i < 6; i++) {
        var dayId= "#" + i;
        var formatDate = new Date(onecall.daily[i].dt * 1000);
        var dateEl = formatDate.toLocaleDateString("en-Us");

        // Looping through API call to get temp, wind speed and so forth for 5 days
        $(fivedayEl).append("<div class='fivedaycard' id= "+ i + "></div>");
        $(dayId).append("<h3>" + dateEl + "</h3>");
        $(dayId).append("<img src=http://openweathermap.org/img/w/" + onecall.daily[i].weather[0].icon + ".png </img>");
        $(dayId).append("<p> Temp: " + onecall.daily[i].temp.day + "°F </p>");
        $(dayId).append("<p> Wind: " + onecall.daily[i].wind_speed + " MPH </p>");
        $(dayId).append("<p> Humidity: " + onecall.daily[i].humidity + " % </p>");
        $(dayId).append("<p class=uvi> UV Index: " + onecall.daily[i].uvi + "</p>");

        // UVI styling depending on API call UVI value
        if (onecall.daily[i].uvi < 3){
            $(".uvi").addClass("uvi-low");
        } else if (onecall.daily[i].uvi >= 3 && onecall.daily[i].uvi < 6){
            $(".uvi").addClass("uvi-moderate");
        } else if (onecall.daily[i].uvi >= 6 && onecall.daily[i].uvi <= 7){
            $(".uvi").addClass("uvi-high");
        } else if (onecall.daily[i].uvi >= 8 && onecall.daily[i].uvi <= 10){
            $(".uvi").addClass("uvi-very");
        } else $(".uvi").addClass("uvi-xtreme");
    };

  

});
};


// Search button on click event
var buttonClickHandler = function (event) {
    event.preventDefault();
    var cityInput = document.querySelector('#cityinput').value;
    if (cityInput === undefined) {
        return;
    } else {
    callCity(cityInput);
    console.log(cityInput);

    // Working on this local storage saving at the moment!
    if (cityHistory.indexOf(cityInput) === -1) {
    cityHistory.push(cityInput);
    $(searchHistory).append("<button id=research class='btn btn-secondary'>"+ cityInput + "</button>");
    }
    localStorage.setItem('history', JSON.stringify(cityHistory));
    console.log(cityHistory);
    }
};

// Creating button for searched cities function
var createCityButton = function () {
    var callHistory = JSON.parse(localStorage.getItem('history')) || [];
    console.log(callHistory);
    for (let i = 0; i < callHistory.length; i++) {
    $('#searchHistory').append("<button id=research-btn class='btn btn-secondary'>"+ callHistory[i] + "</button>");
}};

// Re-search button click function
function researchButtonClick (event) {
    event.preventDefault();
    var cityResearch = event.target.innerText;
    if (!event.target.matches('#research-btn')) {
        return;
    } else {
    callCity(cityResearch);
    console.log(cityResearch);
}};


//Calling function to recall local storage items
createCityButton();

//First on search button event listener
buttonEl.addEventListener("click", buttonClickHandler);

//Click event for re-search buttons / locally stored buttons
searchHistory.addEventListener("click", researchButtonClick);
