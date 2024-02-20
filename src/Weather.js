import axios from "axios";
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";

import "./styles.css";
import "./App.css";

export default function Weather(props) {
const [city, setCity] = useState(props.defaultCity);;
const [weather, setWeather] = useState({ ready: false });

function displayWeather(response) {
  setWeather({
    ready: true,
    city: response.data.name,
    coordinates: response.data.coord,
    temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    humidity: response.data.main.humidity,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
  });
}

function handleSubmit(event) {
  event.preventDefault();
  search();
}

function handleCityChange(event) {
  setCity(event.target.value);
}

function search() {
  const apiKey = "6bfa54f242cbb59343d4e58db578dc61";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

if (weather.ready) {
  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input type= "search"
            placeholder="Enter a city.."
            className="form-control"
            autoFocus="on"
            onChange={handleCityChange}
            />
          </div>
          <div className="col-3">
            <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <WeatherInfo data={weather} />
  
    </div>
  );
} else {
  search();
  return "Loading....";
}
}
