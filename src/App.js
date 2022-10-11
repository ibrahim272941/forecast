import { useState } from 'react';
import './App.css';
import Current from './component/current/Current';
import Search from './component/search/Search';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const handleOnsearchChange = (searchData) => {
    fetch(
      `${process.env.REACT_APP_WEATHER_API_URL}/weather?q=${searchData}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    )
      .then(async (response) => {
        const weatherResponse = await response.json();

        setCurrentWeather(weatherResponse);
      })
      .catch((err) => console.log(err));
  };

  console.log(currentWeather);
  return (
    <div className="container">
      <Search onSearchChange={handleOnsearchChange} />
      <Current data={currentWeather} />
    </div>
  );
}

export default App;
