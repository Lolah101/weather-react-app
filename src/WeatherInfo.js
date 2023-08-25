import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  console.log(props.data);
  return (
    <div className="WeatherInfo">
      <span className="current-date">
        <FormattedDate date={props.data.date} />
        Today is Saturday, Aug 19 2023 - 12:23 pm
      </span>
      <h1 className="mb-3">
        {props.data.city} - {props.data.country}
      </h1>
      <div className="row ">
        <div className="col-6 col-md-4 ">
          <div className="main-temperature">
            <WeatherTemperature celsius={props.data.temperature} />

            <span className="details text-capitalize">
              {props.data.description}
            </span>
            <span className="details">
              {" "}
              <strong>
                {Math.round(props.data.maxTemp)}
                <span className="unit-s"> °C</span>
              </strong>{" "}
              {Math.round(props.data.minTemp)}
              <span className="unit-s"> °C</span>{" "}
            </span>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <WeatherIcon code={props.data.icon} />
        </div>
        <div className="col-12 col-md-4 weather-icon-big details">
          <span className="details">
            <i class="fa-solid fa-temperature-three-quarters"></i>
            Feels like: {Math.round(props.data.realFeel)}°c
          </span>

          <span className="details">
            <i class="fa-solid fa-droplet"></i>
            Humidity: {props.data.humidity}%
          </span>
          <span className="details">
            <i class="fa-solid fa-wind"></i>
            Wind : {Math.round(props.data.wind)} km/h
          </span>
        </div>
      </div>
    </div>
  );
}
