/*const apiKey = "1ca1afc8a53995fd0d1faed56870c996"; // Replace with your actual API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) 
{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.ok) 
    {
        const data = await response.json();

        // Update weather deatails
        cityElement.innerText = data.name;
        tempElement.innerText = Math.round(data.main.temp) + "°C";
        humidityElement.innerText = data.main.humidity + "%";
        windElement.innerText = Math.round(data.wind.speed) + " km/h";

        // Update weather icon correctly
        switch (data.weather[0].main) 
        {
            case "Clouds":
                weatherIcon.src = "image/cloud.png";
                break;
            case "Clear":
                weatherIcon.src = "image/clear.png";
                break;
            case "Rain":
                weatherIcon.src = "image/rain1.png";
                break;
            case "Drizzle":
                weatherIcon.src = "image/drizzle.png";
                break;
            case "Mist":
                weatherIcon.src = "image/mist.png"; 
                break;
            case "Snow":
                weatherIcon.src = "image/snow.png";
                break;
            //default:
                //weatherIcon.src = "image/default.jpg"; 
        }
    } 
    else 
    {
        alert("City not found! Please enter a valid city.");
    }

    document.querySelector(".weather").style.display = "block";
}

// Add event listener to the search button
searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value);
});*/

/*const apiKey = "1ca1afc8a53995fd0d1faed56870c996"; // Replace with your actual API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (!response.ok) {
            throw new Error("City not found! Please enter a valid city.");
        }

        const data = await response.json();

        console.log("Weather Data:", data); // Debugging API response

        // Update weather details
        cityElement.innerText = data.name;
        tempElement.innerText = Math.round(data.main.temp) + "°C";
        humidityElement.innerText = data.main.humidity + "%";
        windElement.innerText = Math.round(data.wind.speed) + " km/h";

        // Weather condition mapping
        const weatherCondition = data.weather[0].main;
        console.log("Weather Condition:", weatherCondition); // Debugging weather condition

        const weatherImages = {
            "Clouds": "./image/cloud.png",
            "Clear": "./image/clear.png",
            "Rain": "./image/rain1.png",
            "Drizzle": "./image/drizzle.png",
            "Mist": "./image/mist.png",
            "Snow": "./image/snow.png"
        };

        // Set image if condition exists, otherwise use default
        if (weatherImages[weatherCondition]) {
            weatherIcon.src = weatherImages[weatherCondition];
            weatherIcon.alt = weatherCondition;
        } else {
            weatherIcon.src = "./image/default.png"; // Fallback image
            weatherIcon.alt = "Default Weather";
        }

        document.querySelector(".weather").style.display = "block";

    } catch (error) {
        console.error("Error:", error);
        alert(error.message);
    }
}

// Add event listener to the search button
searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value.trim());
});*/

const apiKey = "1ca1afc8a53995fd0d1faed56870c996"; // Replace with your actual API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (!response.ok) {
            throw new Error("City not found! Please enter a valid city.");
        }

        const data = await response.json();

        console.log("Weather Data:", data); // Debugging API response

        // Update weather details
        cityElement.innerText = data.name;
        tempElement.innerText = Math.round(data.main.temp) + "°C";
        humidityElement.innerText = data.main.humidity + "%";
        windElement.innerText = Math.round(data.wind.speed) + " km/h";

        // Get weather condition & icon
        const weatherCondition = data.weather[0].main;
        const iconCode = data.weather[0].icon; // Example: "10d", "03n"
        console.log("Weather Condition:", weatherCondition, "Icon Code:", iconCode);

        // Determine if it's day or night (API gives "d" for day, "n" for night)
        const isDay = iconCode.includes("d");

        // Weather images for day and night
        const weatherImages = {
            "Clouds": isDay ? "./image/cloud.png" : "./image/cloud-night.png",
            "Clear": isDay ? "./image/clear.png" : "./image/clear-night.png",
            "Rain": isDay ? "./image/rain.png" : "./image/rain-night.png",
            "Drizzle": isDay ? "./image/drizzle.png" : "./image/drizzle-night.png",
            "Mist": isDay ? "./image/mist.png" : "./image/mist-night.png",
            "Snow": isDay ? "./image/snow.png" : "./image/snow-night.png"
        };

        // Set image if condition exists, otherwise use default
        if (weatherImages[weatherCondition]) {
            weatherIcon.src = weatherImages[weatherCondition];
            weatherIcon.alt = weatherCondition;
        } else {
            weatherIcon.src = isDay ? "./image/default.jpg" : "./image/clear-night.png";
            weatherIcon.alt = "Default Weather";
        }

        document.querySelector(".weather").style.display = "block";

    } catch (error) {
        console.error("Error:", error);
        alert(error.message);
    }
}

// Add event listener to the search button
searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value.trim());
});

