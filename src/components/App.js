
import React, { useEffect, useState } from "react";
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  const [weatherData, setWeatherData] = useState({ temperature: 0, conditions: "" });
  
  useEffect(() => {
    const initialWeatherData = { temperature: 25, conditions: "Sunny" };
    setWeatherData(initialWeatherData);
  }, []);
  
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherDisplay weatherData={weatherData}/>
    </div>
  );
}

export default App;
