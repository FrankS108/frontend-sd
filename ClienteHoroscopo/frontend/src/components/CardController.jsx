import React from 'react'
import { Card } from './Card'
export const CardController = (props) => {
  return (
    <>
       {
            props.data ? (
                <div className='test'>
                    <Card key={1} data={props.data}/>
                </div>
                
            ) : null
        }
    </>
  )
}
