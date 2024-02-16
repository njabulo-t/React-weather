import axios from "axios";
import { useState } from "react";
import "./styles.css";

export default function Weather() {
const [city, setCity] = useState("");
const [loaded, setLoaded] = useState(false);
const [weather, setWeather] = useState({});

function displayWeather(response) {
  setLoaded(true);
  setWeather({
    temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    icon: `http://openweathermap.org/img/wn/${
      response.data.weather[0].icon}@2x.png`,
    description: response.data.weather[0].description
  });
}

function handleSubmit(event) {
  event.preventDefault();
  let apiKey = "f8e6a9e3d6fde87cb38868da460b1371";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

function updateCity(event) {
  setCity(event.target.value);
}

let form = (
  <form onSubmit={handleSubmit}>
    <input type="search" placeholder="Enter a city.." onChange={updateCity} />
    <button type="Submit">Search</button>
  </form>
);

if (loaded) {
  return (
    <div>
      {form}
      <ul>
        <li>Temperature: {Math.round(weather.temperature)}°C</li>
        <li>Description: {weather.description}</li>
        <li>Humidity: {weather.humidity}%</li>
        <li>Wind: {weather.wind}km/h</li>
        <li>
          <img src={weather.icon} alt={weather.description} />
        </li>
      </ul>
    </div>
  );
} else {
  return form;
}
}
