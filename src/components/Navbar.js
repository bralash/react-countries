import React from 'react'
import Toggle from './Toggle'

const Navbar = () => { 
  return (
    <div className='navbar flex flex-row justify-between py-7 px-20 shadow dark:bg-nav-dark dark:text-white'>
        <div className="brand font-extrabold text-2xl dark:text-white">Where in the world?</div>
        {/* <div className="control text-base cursor-pointer"> <BsMoon className="inline-block mr-2" /> Dark Mode</div> */}
        <Toggle />
    </div>
  )
}

export default Navbar