import './current.css';

import React from 'react';

const Current = ({ data }) => {
  return (
    <div className="currentWeather">
      <div className="top">
        <div>
          <p className="city">{data.name}</p>
          <p className="weatherDescription">{data.weather[0].description}</p>
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="weatherIcon"
          className="weatherIcon"
        />
      </div>
      <div className="bottom">
        <div className="temprature">{Math.floor(data.main.temp)}°C</div>
        <div className="details">
          <div className="rowDetails">
            <span className="rowLabel">Details</span>
          </div>
          <div className="rowDetails">
            <span className="rowLabel">Feels like</span>
            <span className="rowValue">
              {Math.floor(data.main.feels_like)}°C
            </span>
          </div>
          <div className="rowDetails">
            <span className="rowLabel">Wind</span>
            <span className="rowValue">{data.wind.speed} m/s</span>
          </div>
          <div className="rowDetails">
            <span className="rowLabel">Humidity</span>
            <span className="rowValue">{data.main.humidity} %</span>
          </div>
          <div className="rowDetails">
            <span className="rowLabel">Pressure</span>
            <span className="rowValue">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;
