import React from 'react'
import { Card } from './Card'

export const CardController = (props) => {
    
    return (
        <div className='container-card-controller'>
           {
                props.data?.map((element, index) => (
                    <Card key={index} objectDay={element}/>
                ))
            }
        </div>
    )
}
