var locationInput = document.querySelector("#search");
var locationSpan = document.querySelector("#location-span");
var submitButton = document.getElementById("submit")
var displayResults = document.getElementById("card")

submitButton.addEventListener('click', function (name) {
  var locationInput = document.querySelector("#locationInput")
  console.log(locationInput.value)

  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + locationInput.value + '&appid=' + '07d0c65f5c20674ff54bcddb4b9e892f' + '&units=metric')
    .then(response => response.json())
    .then(data => {
      const html = `
      <div class="card text-white bg-dark mb-3" style="max-width: 10rem;">
      <div id="icon"><img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png"/></div>
      <label>Location</label>
      <p id="current-location">${data.name}</p>
      <label>Temperature</label>
      <p id="current-temp">${data.main.temp}</p>
      <label>Wind</label>
      <p id="wind">${data.wind.speed}</p>
      <label>Humidity</label>
      <p id="humidity">${data.main.humidity}</p>
      <label>UV Index</label>
      <p id="uv-index"></p></div>`

      document.getElementById("current-weather").innerHTML = html;

      return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=07d0c65f5c20674ff54bcddb4b9e892f`);
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);

      // data.daily has the 7 day forecast
      
    });
    
  
})

