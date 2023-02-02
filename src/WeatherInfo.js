import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          Updated on:
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3 mb-3">
        <div className="col p-0 main-weather">
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="main-weather-icon"
          />
        </div>
        <div className="col main-weather">
          {Math.round(props.data.temperature)}
          <span className="main-unit">°F</span>
        </div>

        <div className="col mb-3 ">
          <ul>
            <li>Feels like: {Math.round(props.data.feelsLike)} °F</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
