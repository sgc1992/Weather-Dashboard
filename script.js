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
      varKey = "location";
      varValue = data.name;
      window.localStorage.setItem(varKey, varValue);
      var cityName=localStorage.getItem("location");
      var div =document.createElement("div");
      div.textContent=cityName
      displayResults.appendChild(div);

      
      varKey = "temperature";
      varValue = data.main.temp;
      window.localStorage.setItem(varKey, varValue);
      var temp=localStorage.getItem("temperature")
      var div =document.createElement("div");
      div.textContent=temp
      displayResults.appendChild(div);


      varKey = "wind";
      varValue = data.wind.speed;
      window.localStorage.setItem(varKey, varValue);
      var wind=localStorage.getItem("wind")
      var div =document.createElement("div");
      div.textContent=wind
      displayResults.appendChild(div);

    })


  fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + locationInput.value + '&appid=' + '07d0c65f5c20674ff54bcddb4b9e892f'+ '&units=metric')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      // for (var i = 0; i < data.list.length; i++) {
      //   console.log(data.list[i])
      //   if (data.list[i] >=startDate &&dailyForecast[i]< endDate){
      //     renderForecastCard(data.list[i])
      //   }
      //   var time = moment(data.list[i].dt)
      //   console.log(time)
      // }

    })
})