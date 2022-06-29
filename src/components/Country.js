import React from 'react'

const Country = (props) => {
  
  return (
    <div className='shadow-md'>
        <div className='flag'>
            <img src={props.flag} alt={props.name} />
        </div>
        <div className='content p-6'>
            <h4>{props.name}</h4>
        </div>
    </div>
  )
}

export default Country