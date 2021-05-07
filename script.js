//created a variable and getting first element with query selector
var locationInput = document.querySelector("#search");
var locationSpan = document.querySelector("#location-span");
//created a variable and getting element by id from the index html
var submitButton = document.getElementById("submit")
var displayResults = document.getElementById("card")

//created a function for click wth addEvent listener
submitButton.addEventListener('click', function (name) {
  var locationInput = document.querySelector("#locationInput")
  console.log(locationInput.value)

//fetching the data from the open weather api with api Key with units of measurement as metric
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + locationInput.value + '&appid=' + '07d0c65f5c20674ff54bcddb4b9e892f' + '&units=metric')
    .then(response => response.json())
    .then(data => {
//Using template Literals with placeholder
      const html = `
      <div>Current-Weather</div>
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
      </div>`
//getting element by id and adding content to the html element
      document.getElementById("current-weather").innerHTML = html;

      return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=07d0c65f5c20674ff54bcddb4b9e892f&units=metric`);
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);


//created a for loop for 5 days forecast from the fetch that returns 7 days forecast
      for (var i = 0; i < 5; i++) {
        console.log(data.timezone);
        console.log(data.daily[i].weather[0].icon);
        console.log(data.daily[i].temp.day);
        console.log(data.daily[i].humidity);
        console.log(data.daily[i].wind_speed);

        const html = `
      <div class="card text-white bg-dark mb-3" style="max-width: 10rem;">
      <div id="icon"><img src="https://openweathermap.org/img/w/${data.daily[i].weather[0].icon}.png"/></div>
      <label>Location</label>
      <label>Temperature</label>
      <p id="current-temp">${data.daily[i].temp.day}</p>
      <label>Wind</label>
      <p id="wind">${data.daily[i].wind_speed}</p>
      <label>Humidity</label>
      <p id="humidity">${data.daily[i].humidity}</p>
      <label>UV Index</label>
      <p id="uv-index"></p></div>`
        document.getElementById("5 Days Forecast").innerHTML += html;
      }
      


    });


})

