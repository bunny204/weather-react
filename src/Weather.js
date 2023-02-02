import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  let [city, setCity] = useState("");

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "e9ebedb4bfa99ca278a76b676b4da9da";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(showTemperature);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <h1>New York</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={changeCity}
        ></input>
        <input
          type="submit"
          value="Search"
          className="btn btn-primary w-100"
        ></input>
      </form>
      <ul>
        <li>Temperature: {temperature}°F</li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind: {wind}km/h</li>
        <li>
          <img src={icon} alt="weather icon" />
        </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="cloudy"
          />{" "}
          39°F
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 90%</li>
            <li>Humidity: 73%</li>
            <li>Wind: 10 MPH </li>
          </ul>
        </div>
      </div>
      <footer>
        <small class="name">
          <a
            href="https://github.com/bunny204/weather-react.git"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by Shavondra Lynch
        </small>
      </footer>

      <script src="src/index.js"></script>
    </div>
  );
}
