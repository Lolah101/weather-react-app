import React, { useState } from "react";
import axios from "axios";

import "./WeatherForecast.css";

import WeatherIconD from "./WeatherIconD";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function handleError() {
    return "Loading...";
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast ">
        <div className="row mt-3">
          <div className="col">
            <div className="WeatherForecast-day">{forecast[0].time} </div>

            <div className="week-forecast-icon mb-2">
              <WeatherIconD image={forecast[0].condition.icon_url} />
            </div>

            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">
                {forecast[0].temperature.maximum}°
              </span>{" "}
              <span className="WeatherForecast-temperature-min">
                {forecast[0].temperature.minimum}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "343956b42t678f23abfoa30906bf4370";
    //let apiKey = "3c2bf98f1595a35c95c1c79689018255";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse).catch(handleError);

    return null;
  }
}
