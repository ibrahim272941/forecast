import { useState } from 'react';
import './App.css';
import Current from './component/current/Current';
import Forecast from './component/forecast/Forecast';
import Search from './component/search/Search';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const handleOnsearchChange = (searchData) => {
    fetch(
      `${process.env.REACT_APP_WEATHER_API_URL}/weather?q=${searchData}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    )
      .then(async (response) => {
        const weatherResponse = await response.json();

        setCurrentWeather(weatherResponse);
      })
      .catch((err) => console.log(err));
    fetch(
      `${process.env.REACT_APP_WEATHER_API_URL}/forecast?q=${searchData}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    )
      .then(async (response) => {
        const forecast = await response.json();
        setForecast(forecast);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnsearchChange} />
      {currentWeather && <Current data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
