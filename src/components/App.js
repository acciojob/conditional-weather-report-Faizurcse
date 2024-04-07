
// import React, { useEffect, useState } from "react";
// import WeatherDisplay from './WeatherDisplay';

// const App = () => {
//   const [weatherData, setWeatherData] = useState({ temperature: 0, conditions: "" });
  
//   useEffect(() => {
//     const initialWeatherData = { temperature: 19, conditions: "Sunny" };
//     setWeatherData(initialWeatherData);
//   }, []);
  
//   return (
//     <div className="App">
//       <h1>Weather App</h1>
//       <WeatherDisplay weatherData={weatherData}/>
//     </div>
//   );
// }

// export default App;


import React from "react";
import './../styles/App.css';

const WeatherReport = ({ weather }) => {
  const temperatureColor = weather.temperature > 20 ? 'red' : 'blue';

  return (
    <div>
      <h2>Weather Report</h2>
      <p>
        Temperature: <span style={{ color: temperatureColor }}>{`${weather.temperature}`}</span>
      </p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
};

const App = () => {
  // Sample weather data
  const weatherData = { temperature: 25, conditions: 'Sunny' };

  return (
    <div>
      <WeatherReport weather={weatherData} />
    </div>
  );
};

export default App
