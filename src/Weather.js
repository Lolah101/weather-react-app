import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Signature from "./Signature";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      icon: response.data.weather[0].icon,
      realFeel: response.data.main.feels_like,
      coordinates: response.data.coord,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row mb-3">
          <div className="col-11 search">
            <form className="input-group">
              <button
                className="btn btn-outline-secondary location-icon"
                type="button"
              >
                <i className="fa-solid fa-location-dot"></i>
              </button>
              <input
                type="search"
                placeholder="Enter a city . . ."
                className="form-control search-bar"
              />
              <button
                className="btn btn-outline-secondary search-icon"
                type="submit"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
          <div className="col-1">
            <i className="fa-solid fa-temperature-low icon"></i>
          </div>
        </div>
        <h5> Today is Saturday, Aug 19 2023 - 12:23 pm</h5>
        <h1 className="mb-3">
          {weatherData.city} - {weatherData.country}
        </h1>
        <div className="row ">
          <div className="col-6 col-md-4 ">
            <div className="main-temperature">
              <span className="temperature">
                {" "}
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit"> °C</span>

              <span className="details text-capitalize">
                {weatherData.description}
              </span>
              <span className="details">
                {" "}
                <strong>
                  {Math.round(weatherData.maxTemp)}
                  <span className="unit-s"> °C</span>
                </strong>{" "}
                {Math.round(weatherData.minTemp)}
                <span className="unit-s"> °C</span>{" "}
              </span>
            </div>
          </div>
          <div className="col-6 col-md-4 ">
            <img src={weatherData.icon} alt={weatherData.description} />
          </div>
          <div className="col-12 col-md-4 weather-icon-big details">
            <span className="details">
              <i class="fa-solid fa-temperature-three-quarters"></i>
              Feels like: {Math.round(weatherData.realFeel)}°c
            </span>

            <span className="details">
              <i class="fa-solid fa-droplet"></i>
              Humidity: {weatherData.humidity}%
            </span>
            <span className="details">
              <i class="fa-solid fa-wind"></i>
              Wind : {Math.round(weatherData.wind)} km/h
            </span>
          </div>
        </div>
        <Signature />
      </div>
    );
  } else {
    const apiKey = "3c2bf98f1595a35c95c1c79689018255";

    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading page ......";
  }
}
