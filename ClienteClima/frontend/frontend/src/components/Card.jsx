import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDroplet, faWind } from '@fortawesome/free-solid-svg-icons'

export const Card = (objectDay) => {

    //Obtener día
    const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    const { datetime, precip, max_temp, min_temp, wind_spd } = objectDay.objectDay;
    const date = new Date(datetime);
    const day = days[date.getDay()];


    return (
        <div className='container-card'>
            <p className='day'>{day}</p>
            <p className='probability'><FontAwesomeIcon icon={faDroplet} style={{color: "#ffffff",}} /> {Math.floor(precip)}%</p>

            <p className='temperature'>{max_temp}°</p>
            <p className='temperature'>{min_temp}°</p>
            <p className='wind'><FontAwesomeIcon icon={faWind} style={{color: "#ffffff",}} />  {wind_spd}mph</p>
        </div>
    )
}

