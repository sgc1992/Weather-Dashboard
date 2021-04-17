var locationInput = document.querySelector("#search");
var locationSpan = document.querySelector("#location-span");
var submitButton = document.getElementById("submit")

submitButton.addEventListener('click', function (name) {
  var locationInput = document.querySelector("#locationInput")
  console.log(locationInput.value)

  fetch('http://api.openweathermap.org/data/2.5/weather?q=' + locationInput.value + '&appid=' + '07d0c65f5c20674ff54bcddb4b9e892f')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      document.getElementById("icon").attr('src', icon);
      document.getElementById("current-location").textContent = data.name;
      document.getElementById("current-temp").textContent = data.main.temp;
      document.getElementById("wind").textContent = data.wind.speed;
      document.getElementById("humidity").textContent = data.main.humidity;
      // document.getElementById("uv-index").textContent = data.main.humidity;
    })
  fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + locationInput.value + '&appid=' + '07d0c65f5c20674ff54bcddb4b9e892f')
    .then(response => response.json())
    .then(data => {
      console.log(data)

    })
})