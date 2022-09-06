var fivedayEl = document.querySelector('#forecastdata');
var buttonEl = document.querySelector('#searchcity');
var cityNameEl = document.querySelector('#cityname');
var currentDay = document.querySelector('#daily');

// Function to call city, get API based on city name through concatenation 
var callCity = function (cityname) {
var apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&appid=825f8c44f819c519c3d1ebb993400003&units=imperial";
fetch(apiURL)
.then(function (response){
    return response.json();
})
.then(function (data) {
    console.log(data);
    console.log(data.city.name);

    //Getting icon codes/url
    var iconcode = data.list[0].weather[0].icon
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

    //Setting main display box
    $(cityNameEl).text(cityname);
    $('#weathericon').attr("src", iconurl);

    //Empty all previous data and append new
    $(currentDay).empty()
    $(currentDay).append("<p> Temp: " + data.list[0].main.temp + "°F </p>");
    $(currentDay).append("<p> Wind: " + data.list[0].wind.speed + " MPH </p>");
    $(currentDay).append("<p> Humidity: " + data.list[0].main.humidity + "</p>");
    $(currentDay).append("<p> UV Index: " + data.list[0].main.temp + "</p>");
    
    //5 day forecast
    $(fivedayEl).append("<p> Temp: " + data.list[0].main.temp + "°F </p>");


});
};



var buttonClickHandler = function (event) {
    var cityInput = document.querySelector('#cityinput').value;
    if (cityInput === undefined) {
        return;
    } else {
    callCity(cityInput);
    $(event.currentTarget.parentElement).append("<button id="+cityInput+" class='btn btn-secondary'>"+ cityInput + "</button>");
    
    }

};

buttonEl.addEventListener("click", buttonClickHandler);