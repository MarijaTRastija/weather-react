import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form id="search-form" className="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control"
                  id="city-input"
                  autocomplete="off"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <div className="overview">
            <h1 id="city">Zagreb</h1>
            <ul>
              <li>
                Last updated: <span id="date">Sunday 17:00</span>
              </li>
              <li id="description">Sunny</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt="Sunny"
                  id="icon"
                  className="float-left"
                />
                <div className="float-left">
                  <strong id="temperature">32</strong>
                  <span className="units"> °C </span>
                </div>
              </div>
            </div>
            <div className="col-6">
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
          <div className="row">
            <div className="weather-forecast" id="forecast"></div>
            <div className="card-group">
              <div className="col">
                <div className="card">
                  <small className="text-muted">Wed</small>
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">2°C /</p>

                    <h5 className="card-title">9°C</h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <small className="text-muted">Thu</small>
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">5°C /</p>
                    <h5 className="card-title">15°C</h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <small className="text-muted">Fri</small>
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">6°C /</p>
                    <h5 className="card-title">18°C</h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <small className="text-muted">Sat</small>
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">8°C /</p>
                    <h5 className="card-title">16°C</h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <small className="text-muted">Sun</small>
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">7°C /</p>
                    <h5 className="card-title">14°C</h5>
                    <p className="card-text"></p>
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
        by Marija Tržić Rastija, hosted on{" "}
        <a
          href="https://dulcet-creponne-cb40c0.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </small>
    </div>
  );
}
