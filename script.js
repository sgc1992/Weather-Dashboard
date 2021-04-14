var locationInput = document.querySelector("#search");
var searchButton = document.querySelector("#submit");
var locationSpan = document.querySelector("#location-span");
var submitButton = document.querySelector("#submit")

submitButton.addEventListener('click', function (name) {
var locationInput = document.querySelector("#locationInput")
console.log(locationInput.value)

  fetch('https://api.openweathermap.org/data/2.5/weather?q='+locationInput+'&appid='+'07d0c65f5c20674ff54bcddb4b9e892f')
    .then(response => response.json())
    .then(data => {
     console.log(data) 

    })
  })