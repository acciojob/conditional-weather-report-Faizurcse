import React from "react";

function WeatherDisplay({ weatherData }) {
  const { temperature, conditions } = weatherData;
  const temperatureColor = temperature > 20 ? 'red' : 'blue';

  return (
    <span>
      <p style={{ color: temperatureColor }}>Temperature: {temperature}°C</p>
      <p>Conditions: {conditions}</p>
    </span>
  );
}

export default WeatherDisplay;
