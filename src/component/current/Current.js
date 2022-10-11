import './current.css';

import React from 'react';

const Current = ({ data }) => {
  return (
    <div className="currentWeather">
      <div className="top">
        <div>
          <p className="city">Adana</p>
          <p className="weatherDescription">Cloudy</p>
        </div>
        <img src="icons/01d.png" alt="weatherIcon" className="weatherIcon" />
      </div>
      <div className="bottom">
        <div className="temprature">14°C</div>
        <div className="details">
          <div className="rowDetails">
            <span className="rowLabel">Details</span>
          </div>
          <div className="rowDetails">
            <span className="rowLabel">Feels like</span>
            <span className="rowValue">12°C</span>
          </div>
          <div className="rowDetails">
            <span className="rowLabel">Wind</span>
            <span className="rowValue">4 m/s</span>
          </div>
          <div className="rowDetails">
            <span className="rowLabel">Humidity</span>
            <span className="rowValue">45 %</span>
          </div>
          <div className="rowDetails">
            <span className="rowLabel">Pressure</span>
            <span className="rowValue">56 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;
