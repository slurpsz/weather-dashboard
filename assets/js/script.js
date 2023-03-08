// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
var rootUrl = 'https://api.openweathermap.org';
var apiKey = '529a4a77591cd797917d95ed3b0a882f';

function fetchWeather(location) {
  var { lat } = location;
  var { lon } = location;
  var city = location.name;
  var apiUrl = `${rootUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(function(res) {
      return res.json();
    })
    .then(function (data){
      renderItems(city, data);
    })
    .catch(function (err) {
      console.error(err);
    });
}


var searchBtn = document.querySelector(".btn")

searchBtn.addEventListener("click", event => {
  console.log("testing")

  var cityName = document.getElementById("cityName").value 
  console.log(cityName);

  fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=529a4a77591cd797917d95ed3b0a882f`)
    .then(res=>{
      console.log(res.data)
    })

})