var fivedayEl = document.querySelector("#forecastdata");
var buttonEl = document.querySelector("#searchcity");
var cityNameEl = document.querySelector("#cityname");
var currentDay = document.querySelector("#daily");

// Function to call city, get API based on city name through concatenation
var callCity = function (cityname) {
  var apiURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityname +
    "&appid=825f8c44f819c519c3d1ebb993400003&units=imperial";
  fetch(apiURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      //Naming our weather box
      var actualName = data.city.name;

      //Converting unix time
      var currentDate = new Date(data.list[0].dt * 1000);
      var currentDateText = currentDate.toLocaleDateString("en-US");

      //Getting icon codes/url
      var iconcode = data.list[0].weather[0].icon;
      var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

      //Setting main display box
      $(cityNameEl).text(actualName + "(" + currentDateText + ")");
      $("#weathericon").attr("src", iconurl);

      //Empty all previous data and append new
      $(currentDay).empty();
      $(currentDay).append("<p> Temp: " + data.list[4].main.temp + "°F </p>");
      $(currentDay).append(
        "<p> Wind: " + data.list[4].wind.speed + " MPH </p>"
      );
      $(currentDay).append(
        "<p> Humidity: " + data.list[4].main.humidity + "</p>"
      );
      $(currentDay).append("<p> UV Index: " + data.list[4].main.temp + "</p>");

      const unixTime = data.list[4].dt;
      const date = new Date(unixTime * 1000);
      //5 day forecast
      $(fivedayEl).add("<div>");
      $(fivedayEl).append("<h3>" + date.toLocaleDateString("en-US") + "</h3>");
      $(fivedayEl).append(
        "<img src=http://openweathermap.org/img/w/" +
          data.list[4].weather[0].icon +
          ".png </img>"
      );
      $(fivedayEl).append("<p> Temp: " + data.list[4].main.temp + "°F </p>");
      $(fivedayEl).append("<p> Wind: " + data.list[4].wind.speed + " MPH </p>");
      $(fivedayEl).append(
        "<p> Humidity: " + data.list[4].main.humidity + "</p>"
      );
      $(fivedayEl).append("<p> UV Index: " + data.list[4].main.temp + "</p>");

      newDayArray = data.list.filter(function (el) {
        return el.dt_text >= "2022-09-06";
      });

      console.log(newDayArray);
    });
};

// Search button on click event
var buttonClickHandler = function (event) {
  var cityInput = document.querySelector("#cityinput").value;
  if (cityInput === undefined) {
    return;
  } else {
    callCity(cityInput);
    $(event.currentTarget.parentElement).append(
      "<button id=" +
        cityInput +
        " class='btn btn-secondary'>" +
        cityInput +
        "</button>"
    );
  }
};

buttonEl.addEventListener("click", buttonClickHandler);
