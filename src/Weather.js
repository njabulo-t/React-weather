import axios from "axios";
import { useState } from "react";

import "./styles.css";
import "./App.css";

export default function Weather() {
const [city, setCity] = useState(props.defaultCity);
const [loaded, setLoaded] = useState(false);
const [weather, setWeather] = useState({});

function displayWeather(response) {
  setLoaded(true);
  setWeather({
    ready: true,
    city: response.data.name,
    temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    humidity: response.data.main.humidity,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    icon: `http://openweathermap.org/img/wn/${
      response.data.weather[0].icon}@2x.png`,
    description: response.data.weather[0].description
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
  const apiKey = "f8e6a9e3d6fde87cb38868da460b1371";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

function updateCity(event) {
  setCity(event.target.value);
}

let form = (
  <form  onSubmit={handleSubmit}>
    <input className="search-form-input" type="search" placeholder="Enter a city.." onChange={updateCity} />
    <button className="search-form-button" type="Submit">Search</button>
  </form>
);

if (loaded) {
  return (
    <div className="weather-app-details">
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
          <div className="cole-3">
            <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
    </div>
  );
} else {
  return form;
}
}
