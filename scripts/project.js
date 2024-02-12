const apiKey = "34d7400a1942ff57342855f830d021c5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=";

const input = document.querySelector(".search input");
const inputBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const popularCities = ["Rexburg", "Provo", "Salt Lake City", "Boise", "Pocatello", "Idaho Falls", "New York", "Toronto"];

const randomIndex = Math.floor(Math.random() * popularCities.length);
const randomCity = popularCities[randomIndex];
getWeather(randomCity);

async function getWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
    }
    else {
        var data = await response.json();
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
        document.querySelector(".feels-like").innerHTML = "It feels like " + Math.round(data.main.feels_like) + "°F";
        
        if(data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"
        }
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png"
        }
        
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none";
    }
}

inputBtn.addEventListener("click", ()=> {
    getWeather(input.value);
})