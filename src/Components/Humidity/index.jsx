import React from 'react'
import { UseWeatherAPPContext } from '../../Context/context'

export const HumidityComponents = () => {
    let {state:{current, city}} = UseWeatherAPPContext()
 
    const uvLevel = (uvIndex) => {
        if (uvIndex <= 2) return "Low";
        if (uvIndex <= 5) return "Medium";
        if (uvIndex <= 7) return "High";
        if (uvIndex > 7) return "Very High";
    };

    return (
        <>
        {
            current ? <div className='humidityWrap'>
            <div className='humidityData'>
                <div className='title'>UV Index </div>
                <div className='value'>{Math.round(current.uvi)} ({uvLevel(Math.round(current.uvi))})</div>
            </div>
            <div className='humidityData'>
                <div className='title'>Humidity </div>
                <div className='value'>{current.humidity} %</div>
            </div>
            <div className='humidityData'>
                <div className='title'>Wind </div>
                <div className='value'>{Math.round(current.wind_speed)} km/h</div>
            </div>
            <div className='humidityData'>
                <div className='title'>Population</div>
                <div className='value'>{parseFloat(city.population).toLocaleString('en')}</div>
            </div>
        </div>: ''
        }
            
        </>
    )
}
