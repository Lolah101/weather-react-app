import React, { useState, useEffect } from "react";
import axios from "axios";

import "./WeatherForecast.css";

import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
  }
  function handleError() {
    return "Loading...";
  }

  useEffect(() => {
    setLoaded(true);
  }, [props.coordinates]);

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast ">
        <div className="row mt-3">
          <div className="col">
            <div className="WeatherForecast-day">day</div>

            <div className="week-forecast-icon mb-2">
              <WeatherIcon code="01d" size={56} />
            </div>

            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">23°</span>{" "}
              <span className="WeatherForecast-temperature-min">89°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "3c2bf98f1595a35c95c1c79689018255";
    //let apiKey = "3c2bf98f1595a35c95c1c79689018255";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse).catch(handleError);

    return null;
  }
}
