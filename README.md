
# Weather Dashboard

## Description
This weather dashboard was built to help me better understand how multiple API calls can work together inside a script. While this dashboard only uses OpenWeather, it does use two different API calls to filter a user's input and expand their search. As stated the primary motivation behind this application was furthering my understanding of fetching API data, but also how JQuery and Javascript can store, transform and display this data in a myriad of ways.

This application mirrors many web-based weather apps a user might encounter, namely Weather.com or MSN's weather application. Like those pages this one too displays current data, a five day forecast and so on. However the appeal of this application in particular is its ability to navigate between different cities in the U.S. easily and display that data quickly. This application focuses on the simplicity of looking for other cities, where for most weather applications or web pages one must navigate quite a bit to find a different weather forecast.

Through the development of this application I learned how to store API calls in unique variables, making the retrieval of that data much easier. Similarly this project deepened my understanding of API navigation, DOM navigation and so forth.

The biggest issue I faced was creating the local storage for the called data, but after a bit of brainstorming and help from my lecturer we found a solution which involved stringifying, parsing and storing data in an array.

A side issue that I noticed on OpenWeather's end is that their UV Index sometimes differs dramatically between their data for the current day and forecast days in their Onecall/Current API. For example a current day's UVI might appear to be 1 or 2 when the next day it's 6. Perhaps UV changes this dramatically depending on the weather?


Overall this project helped me develop a better grasp on storage techniques for both API and local data. For future developments I would like to spend more time with the styling of this application and perhaps to implement a feature to clear searched cities with a button, however for now most of my work revolved around the script and to that end it does the job called for. 

## Table of Contents
- [Installation] (#installation)
- [Link to live url] (#live)
- [Usage/Examples] (#usage)
- [Credits] (#credits)
- [License] (#license)
## Live
- [https://skytexier.github.io/Weather-Dashboard/](https://skytexier.github.io/Weather-Dashboard/)

## Installation

For proper installation or usage of the website include index.html and assets folder. Script is found in develop folder.
No installation required unless modifying code, in such case proper git pulling from the repo and importing into editing software required.

There is currently no button or function to clear local storage for this dashboard, so in order to reset the cities one would have to enter their local storage in a web browser and clear local storage.
    
## Usage/Examples

Upon loading the page a user will see a search card (and if they've previously searched a city then also buttons for those previous cities). 

![alt text](/Assets/Images/main.png)

Upon typing in a specific city a new button will append with that city name. This search input will work regardless of capitalization as the first API call will fetch that city's latitude and longitude for the next API call.

After clicking search the page will fetch the data for that city (it may take a few seconds). Then the page will display the current day's data in the main weather box and a five day forecast in the box below. The API call will then dynamically update the page and append the data for that city to the individual cards. 

This is pictured below!

![alt text](/Assets/Images/citysearch.png)

## Credits
API's used:
- jQuery [https://jquery.com/](https://jquery.com/)
- Bootstrap [https://getbootstrap.com/](https://getbootstrap.com/)
- OpenWeather [https://openweathermap.org/api/one-call-3](https://openweathermap.org/api/one-call-3)
[https://openweathermap.org/forecast5](https://openweathermap.org/forecast5)

For sources on actual script execution and APi implementation I used:
- jQuery API Documentation [https://api.jquery.com/](https://api.jquery.com/)
- Bootstrap Documentation [https://getbootstrap.com/docs/4.6/getting-started/introduction/](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
- W3Schools [https://www.w3schools.com/jquery/default.asp](https://www.w3schools.com/jquery/default.asp)
- Stack Overflow [https://stackoverflow.com/](https://stackoverflow.com/)
- EPA.gov [https://www.epa.gov/sunsafety/uv-index-1](https://www.epa.gov/sunsafety/uv-index-1)
- Go Make Thins [https://gomakethings.com/how-to-use-the-fetch-method-to-make-multiple-api-calls-with-vanilla-javascript/](https://gomakethings.com/how-to-use-the-fetch-method-to-make-multiple-api-calls-with-vanilla-javascript/)
- Tutorial Republic [https://www.tutorialrepublic.com/faq/how-to-convert-a-unix-timestamp-to-time-in-javascript)](https://www.tutorialrepublic.com/faq/how-to-convert-a-unix-timestamp-to-time-in-javascript)

## License
MIT License
 
Copyright (c) [2022] [Sky Hamilton Texier]
 
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
 
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

