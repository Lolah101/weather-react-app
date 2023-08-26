import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import Signature from "./Signature";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      country: response.data.sys.country,
      icon: response.data.weather[0].icon,
      realFeel: response.data.main.feels_like,
      coordinates: response.data.coord,
    });
  }

  function search() {
    const apiKey = "3c2bf98f1595a35c95c1c79689018255";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //search for a city
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row mb-3">
          <div className="col-11 search">
            <form className="input-group" onSubmit={handleSubmit}>
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
                onChange={handleCityChange}
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
        </div>{" "}
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
        <Signature />
      </div>
    );
  } else {
    search();
    return "Loading page ......";
  }
}
