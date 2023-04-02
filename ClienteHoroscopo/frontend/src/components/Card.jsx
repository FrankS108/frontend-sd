import React from 'react'


export const Card = (props) => {
    return (
        <div className='card'>
            <p className='card-sign'>{props.data?.sign}</p>
            <div className='card-information'>
                <div className='card-general'>
                    <p className='card-lucky-number'>Numero</p>
                    <p className='result'>{props.data?.luckynumber}</p>
                </div>
                <div className='card-general'>
                    <p className='card-mood'>Mood</p>
                    <p className='result'>{props.data?.mood}</p>
                </div>
            </div>
            
            <div className=''>
                    <p className='card-description'>Description</p>
                    <p className='description'>{props.data?.description}</p>
            </div>
            
        </div>
    )
}
