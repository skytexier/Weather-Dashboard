var fivedayEl = document.querySelector('#forecastdata');
var buttonEl = document.querySelector('#searchcity');
var cityNameEl = document.querySelector('#cityname');


var callCity = function (cityname) {
var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=825f8c44f819c519c3d1ebb993400003";
fetch(apiURL)
.then(function (response){
    return response.json();
})
.then(function (data) {
    console.log(data);
    console.log(data.name);


});
};



var buttonClickHandler = function (event) {
    var cityInput = document.querySelector('#cityinput').value;
    if (cityInput === undefined) {
        return;
    } else {
    callCity(cityInput);
    cityNameEl.textContent = cityInput;
    $(event.currentTarget.parentElement).append("<button id="+cityInput+">"+ cityInput + "</button>");
    }

    console.log(cityInput);

};

buttonEl.addEventListener("click", buttonClickHandler);