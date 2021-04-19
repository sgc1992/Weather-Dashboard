var locationInput = document.querySelector("#search");
var locationSpan = document.querySelector("#location-span");
var submitButton = document.getElementById("submit")

submitButton.addEventListener('click', function (name) {
  var locationInput = document.querySelector("#locationInput")
  console.log(locationInput.value)

  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + locationInput.value + '&appid=' + '07d0c65f5c20674ff54bcddb4b9e892f' + '&units=metric')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      var newImage = document.createElement("img") //make an img tag.
      newImage.setAttribute('src', icon)
      document.getElementById("icon").append(newImage);
      document.getElementById("current-location").textContent = data.name;
      document.getElementById("current-temp").textContent = data.main.temp;
      document.getElementById("wind").textContent = data.wind.speed;
      document.getElementById("humidity").textContent = data.main.humidity;
      // document.getElementById("uv-index").textContent = data.main.humidity;
      window.localStorage.setItem('current-location', 'data.name');
      window.localStorage.setItem('current-temp', 'data.main.temp');
      window.localStorage.setItem('current-location', 'data.wind.speed');
      window.localStorage.setItem('current-location', 'data.main.humidity');
    })


  fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + locationInput.value + '&appid=' + '07d0c65f5c20674ff54bcddb4b9e892f')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      for (var i = 0; i < data.list.length; i++) {
        console.log(data.list[i])
        var time = moment(data.list[i].dt)
        console.log(time)
      }

    })
})