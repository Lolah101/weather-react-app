import React from "react";
import "./Weather.css";
import Signature from "./Signature";

export default function Weather() {
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
      <h1 className="mb-3">New York</h1>
      <div className="main-temperature">
        <span className="temperature"> 6</span>
        <span className="unit"> °C</span>
      </div>
      <div className="row ">
        <div className="col-6 col-md-4 ">
          <ul>
            <li>Mostly Cloudy</li>
            <li>23°C 21°C</li>
          </ul>
        </div>
        <div className="col-6 col-md-4 ">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Clear"
          />
        </div>
        <div className="col-12 col-md-4 weather-icon-big ">
          <ul>
            <li>Percipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind : 13km/h</li>
          </ul>
        </div>
      </div>
      <Signature />
    </div>
  );
}
