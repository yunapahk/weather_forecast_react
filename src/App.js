import React from 'react';
import './styles.css';
import weatherData from './weatherData';
import WeatherForecast from './components/WeatherForecast';
import WeatherData from './components/WeatherData';

console.log(weatherData)

function App() {
  return (
    <div>
      {weatherData.map((data, index) => (
        <WeatherForecast
          key={index}
          img={data.img}
          conditions={data.conditions}
          time={data.time}
        >
          <WeatherData
            conditions={data.conditions}
            time={data.time}
          />
        </WeatherForecast>
      ))}
    </div>
  );
}

export default App;
