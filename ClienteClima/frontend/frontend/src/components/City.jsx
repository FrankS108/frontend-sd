import React, { useState } from 'react'
import Select from 'react-select'
import { Error } from './Error'
import { CardController } from './CardController'


const WS_URL = 'ws://localhost:8080/clima'
export const City = () => {

    
    const [city, setCity] = useState("");
    const [error, setError] = useState("");
    const [data, setData] = useState({})

    let jsonData = {};
    const Connect = () => {

        if(city == ""){
            setError("Tienes que selecciona una ciudad");
            setTimeout(() => {
                setError("");
            }, 5000)
        }

        const ws = new WebSocket(WS_URL);

        ws.onopen = () => {
            ws.send(city.value);
        }

        ws.onmessage = (message) => {
            const json = JSON.parse(message.data);
            copyJson(json)
        }

        
    }

    const copyJson = (data) => {
        jsonData = {...data};
        setData(jsonData);
    }

    const options = [
        { value: "ensenada", label: "Ensenada"},
        { value: "tijuana", label: "Tijuana"},
        { value: "mexicali", label: "Mexicali"},
        { value: "rosarito", label: "Rosarito"},
        { value: "Tecate", label: "Tecate"},
        { value: "sanquintin", label: "San Quintin"},
        { value: "sanfelipe", label: "San Felipe"},
    ]

    return (
        <div className="select">       
            <h1>Revisa el clima en tu ciudad</h1>
            {error && <Error error={error}/>}
            <Select options={options} onChange={e => setCity(e)}/>
            <button className='button' onClick={Connect}>Buscar</button>
            {data && <CardController data={data.data}/>}
        </div>
    )
}
