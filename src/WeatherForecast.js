import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";

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

  useEffect(() => {
    // set loaded false
    setLoaded(false);
  }, [props.coordinates]);
  // if the cooridinates change

  function load() {
    let apiKey = "de2c40e370d58e257faf07ba4ea95840";
    //let apiKey = "3c2bf98f1595a35c95c1c79689018255";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse).catch(handleError);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast ">
        <div className="row mt-3">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
