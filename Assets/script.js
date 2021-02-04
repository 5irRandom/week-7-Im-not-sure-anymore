var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?"
var oneCallUrl = "http://api.openweathermap.org/data/2.5/onecall?";
var weatherSpot = document.getElementById("weathergohere");
var apiKey = "&appid=659660cdca079a5b2e09f0e6f6f1bc87";
var search = "";
var coords = {
    lon: '',
    lat: '',
    comb: ''
}

function weather(search) {
    fetch(weatherUrl + search + "&units=imperial" + apiKey)
    .then(response => {
        return response.json()
    })
    .then (data => {
        console.log(data)
        coords.lon = data.coord.lon
        coords.lat = data.coord.lat
        coords.comb = "lat=" + coords.lat + "&lon=" + coords.lon
        //Put local storage thing for city here
        oneCall(coords.comb)
    })
    .catch(error => {
        console.log("Error: " + error)
    });
}

function oneCall(input) {
    fetch(oneCallUrl + input + "&units=imperial" + apiKey)
    .then(response => {
        return response.json()
    })
    .then (data => {
        console.log(data)
        var temp = data.current.temp
        yep = weatherSpot.append(temp + "°F")
        weatherSpot.appendChild(document.createElement('br'))
    })
    .catch(error => {
        console.log("Error: " + error)
    })
}

searchButton.addEventListener("click", function (thing) {
    input = document.getElementById("search").value;
    search = "q=" + input;
    weather(search);
});