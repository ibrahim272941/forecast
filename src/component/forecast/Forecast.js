import './forecast.css';
import Accordion from 'react-bootstrap/Accordion';

const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  console.log(forecastDays);

  return (
    <div>
      <label className="title">Daily</label>
      <Accordion>
        {data.list.slice(0, 7).map((item, idx) => (
          <Accordion.Item eventKey={idx} key={idx}>
            <Accordion.Header>
              <div className="dailyItem">
                <div className="leftSide">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    className="smallIcon"
                    alt="weather"
                  />
                  <label className="day">{forecastDays[idx]}</label>
                </div>
                <div className="rightSide">
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="minMax">
                    {Math.round(item.main.temp_max)}°C /
                    {Math.round(item.main.temp_min)}°C
                  </label>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body style={{ height: ' fit-content' }}>
              <div className="dailyDetails">
                <div className="detailsLeft">
                  <div className="detailItem">
                    <label>Pressure:</label>
                    <label>{item.main.pressure}hPa</label>
                  </div>
                  <div className="detailItem">
                    <label>Humidity:</label>
                    <label>{item.main.humidity}%</label>
                  </div>
                  <div className="detailItem">
                    <label>Clouds:</label>
                    <label>{item.clouds.all}%</label>
                  </div>
                </div>
                <div className="detailsRight">
                  <div className="detailItem">
                    <label>Wind speed:</label>
                    <label>{item.wind.speed} m/s</label>
                  </div>
                  <div className="detailItem">
                    <label>Sea level:</label>
                    <label>{item.main.sea_level}m</label>
                  </div>
                  <div className="detailItem">
                    <label>Feels like:</label>
                    <label>{item.main.feels_like}°C</label>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Forecast;
