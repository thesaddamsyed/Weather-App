const apiKey = "c9162bbe1665b5aaaff1a098a04251f1";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&"
// extra = q={city name}&appid={API key}

const inputBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherImage = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(url + `q=${city}&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }

    else {

        var data = await response.json();
        console.log(data);
    
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + `°c`;
        document.querySelector('.humidity').innerHTML = data.main.humidity + ` %`;
        document.querySelector('.wind').innerHTML = data.wind.speed + ` km/h`;
    
        if (data.weather[0].main == "Clouds") {
            weatherImage.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherImage.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherImage.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherImage.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Wind") {
            weatherImage.src = "images/wind.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherImage.src = "images/snow.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherImage.src = "images/mist.png";
        }


        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    
    
    }

}


searchButton.addEventListener("click", () => {
    checkWeather(inputBox.value);
})
