import React from "react"
function WeatherDisplay({weatherData}){
    
    const a = weatherData.temperature>20?'red':'blue'
    return(
        <>
        <div>
            <p style={{color:a}}>Current Temperature : {weatherData.temperature}°C</p>
            <p>Conditions : {weatherData.conditions}</p>
        </div>
        </>
    )
}

export default  WeatherDisplay