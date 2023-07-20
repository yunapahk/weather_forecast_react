import React from 'react';

function WeatherForecast({ img, conditions, time }) {
  return (
    <div>
      <img src={img} alt="Weather Icon" />
      <p>Conditions: {conditions}</p>
      <p>Time: {time}</p>
    </div>
  );
}

export default WeatherForecast;
