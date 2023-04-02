import React, { useState } from 'react'
import { CardController } from './CardController'

const WS_URL = 'ws://localhost:8080/horoscopo'

const signs = [
    {
        sign: "Sagitario",
        dayStart: 23,
        dayEnd: 20,
        monthStart: 11,
        monthEnd: 12
    },
    {
        sign: "Capricornio",
        dayStart: 21,
        dayEnd: 19,
        monthStart: 12,
        monthEnd: 1
    },
    {
        sign: "Acuario",
        dayStart: 20,
        dayEnd: 18,
        monthStart: 1,
        monthEnd: 2
    },
    {
        sign: "Piscis",
        dayStart: 19,
        dayEnd: 20,
        monthStart: 2,
        monthEnd: 3
    },
    {
        sign: "Aries",
        dayStart: 21,
        dayEnd: 20,
        monthStart: 3,
        monthEnd: 4
    },
    {
        sign: "Tauro",
        dayStart: 21,
        dayEnd: 20,
        monthStart: 4,
        monthEnd: 5
    },
    {
        sign: "Géminis",
        dayStart: 21,
        dayEnd: 20,
        monthStart: 5,
        monthEnd: 6
    },
    {
        sign: "Cáncer",
        dayStart: 21,
        dayEnd: 20,
        monthStart: 6,
        monthEnd: 7
    },
    {
        sign: "Leo",
        dayStart: 21,
        dayEnd: 21,
        monthStart: 7,
        monthEnd: 8
    },
    {
        sign: "Virgo",
        dayStart: 22,
        dayEnd: 22,
        monthStart: 8,
        monthEnd: 9
    },
    {
        sign: "Libra",
        dayStart: 23,
        dayEnd: 22,
        monthStart: 9,
        monthEnd: 10
    },
    {
        sign: "Escorpio",
        dayStart: 23,
        dayEnd: 22,
        monthStart: 10,
        monthEnd: 11
    },
]

export const FormInput = () => {

    const [date, setDate] = useState("")

    const [data, setData] = useState({})

    let sign = "";

    let jsonData = {};
    const Connect = () => {
        const ws = new WebSocket(WS_URL);
        ws.onopen = () => {
            console.log(date + "!!");
            console.log("Conectado");
            getSign();
            ws.send(sign);
        }

        ws.onmessage = (message) => {
            messageJSON(message);
            ws.close();
        }
    }

    const messageJSON = (message) => {
        const json = JSON.parse(message.data);
        copyJson(json);
    }

    const copyJson = (json) => {
        jsonData = {...json};
        setData(jsonData)
    }

    const getSign = () => {
        if(date == ""){
            console.log("Error")
            return;
        }
    
        const objectDate = new Date(date);
        const objectSign = signs.filter( element => {
            if(objectDate.getDate() >= element.dayStart){
                if(element.monthStart == (objectDate.getMonth() + 1)){
                    return element;
                }
            }else if(objectDate.getDate() <= element.dayEnd){
                if((objectDate.getMonth() + 1) == element.monthEnd){
                    return element;
                }
            }
        });

        console.log("El object sign contiene " + objectSign[0].sign);
        
        const signString = objectSign[0].sign;
        sign = signString;
        console.log(sign)
    }

    const update = (value) => {
        setDate(value);
    }

    return (
        <div>
            <div className='container-select'>
                <input type='date'
                    onChange={e => update(e.target.value)}/>
                <button className='button' onClick={Connect}>OBTENER</button>
            </div>
            {data && <CardController data={data}/>}
        </div>
    )
}
