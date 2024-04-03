import React from "react"
function WeatherDisplay({weatherData}){
    
    const a = weatherData.temperature>20?'red':'blue'
    return(
        <>
        <div>
            <h2 style={{color:a}}>Current Temperature : {weatherData.temperature}°C</h2>
            <h3>Conditions : {weatherData.conditions}</h3>
        </div>
        </>
    )
}

export default  WeatherDisplay