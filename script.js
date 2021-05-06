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
      var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      var newImage = document.createElement("img") //make an img tag.
      newImage.setAttribute('src', icon)
      document.getElementById("icon").append(newImage);
      document.getElementById("current-location").textContent = data.name;
      document.getElementById("current-temp").textContent = data.main.temp;
      document.getElementById("wind").textContent = data.wind.speed;
      document.getElementById("humidity").textContent = data.main.humidity;
      
    });
    
  
})

// fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + locationInput.value + '&appid=' + 'accd5d59f380f6347ac44664ded3ecef')
//     .then(response => response.json())
//     .then(data => {
//       console.log('5 day')
//       console.log(data)
//       for (let i = 0; i < data.list.length; i = i + 9) {
//         // this gets the forecast every 24 hours for 5 days
//         // use this to generate the 5 day forecast elements in the html
//         console.log(data.list[i])
//       }
//     });