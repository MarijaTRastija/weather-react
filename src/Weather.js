import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div class="container">
      <div class="weather-app-wrapper">
        <div class="weather-app">
          <form id="search-form" class="mb-3">
            <div class="row">
              <div class="col-9">
                <input
                  type="search"
                  placeholder="Type a city..."
                  class="form-control"
                  id="city-input"
                  autocomplete="off"
                />
              </div>
              <div class="col-3">
                <input
                  type="submit"
                  value="Search"
                  class="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <div class="overview">
            <h1 id="city">Zagreb</h1>
            <ul>
              <li>
                Last updated: <span id="date">Sunday 17:00</span>
              </li>
              <li id="description">Sunny</li>
            </ul>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="clearfix weather-temperature">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt="Sunny"
                  id="icon"
                  class="float-left"
                />
                <div class="float-left">
                  <strong id="temperature">32</strong>
                  <span class="units"> °C </span>
                </div>
              </div>
            </div>
            <div class="col-6">
              <ul>
                <li>
                  Humidity: <span id="humidity">62</span>%
                </li>
                <li>
                  Wind: <span id="wind">2</span> km/h
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="weather-forecast" id="forecast"></div>
            <div class="card-group">
              <div class="col">
                <div class="card">
                  <small class="text-muted">Wed</small>
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text">2°C /</p>

                    <h5 class="card-title">9°C</h5>
                    <p class="card-text"></p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <small class="text-muted">Thu</small>
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text">5°C /</p>
                    <h5 class="card-title">15°C</h5>
                    <p class="card-text"></p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <small class="text-muted">Fri</small>
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text">6°C /</p>
                    <h5 class="card-title">18°C</h5>
                    <p class="card-text"></p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <small class="text-muted">Sat</small>
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text">8°C /</p>
                    <h5 class="card-title">16°C</h5>
                    <p class="card-text"></p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <small class="text-muted">Sun</small>
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text">7°C /</p>
                    <h5 class="card-title">14°C</h5>
                    <p class="card-text"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <small>
        <a
          href="https://github.com/MarijaTRastija/Weather-app-vanilla"
          target="_blank"
          rel="noreferrer"
        >
          Open source code
        </a>{" "}
        by Marija Tržić Rastija
      </small>
    </div>
  );
}
