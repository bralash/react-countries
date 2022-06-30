import React from 'react'

const Country = (props) => {
  
  return (
    <div className='shadow-md h-ch rounded-md'>
        <div className='flag h-1/2 w-full'>
            <img src={props.flag} alt={props.name} className='w-full h-full object-cover rounded-t-md' />
        </div>
        <div className='content p-6'>
            <h4 className='text-lg font-extrabold mb-4'>{props.name}</h4>
            <div>
                <span className='font-semibold'>Population:</span> <span>{props.population}</span>
            </div>
            <div>
                <span className='font-semibold'>Region:</span> <span>{props.region}</span>
            </div>
            <div>
                <span className='font-semibold'>Capital:</span> <span>{props.capital}</span>
            </div>
            
        </div>
    </div>
  )
}

export default Country