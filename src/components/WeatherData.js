import React from 'react';

function WeatherData({ conditions, time }) {
  return (
    <div>
      <p>Conditions: {conditions}</p>
      <p>Time: {time}</p>
    </div>
  );
}

export default WeatherData;