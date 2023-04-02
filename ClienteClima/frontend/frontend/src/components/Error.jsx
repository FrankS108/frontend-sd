import React from 'react'

export const Error = ({error}) => {
  return (
    <div className='container-error'>
        <p className='error'>{error}</p>
    </div>
  )
}
