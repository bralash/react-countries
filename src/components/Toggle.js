import React, { useContext } from 'react'
import { DarkModeContext } from '../contexts/DarkModeContext'
import { BsMoon, BsMoonFill } from 'react-icons/bs'

const Toggle = (props) => {
  const { isDarkMode, toggleTheme } = useContext(DarkModeContext)
  const theme = isDarkMode ===  'light' ? (<><BsMoon className="inline-block mr-2" /> Light Mode</>) : (<><BsMoonFill className='inline-block mr-2' /> Dark Mode</>)
  const handleClick = () => {
    toggleTheme()
  }
  return (
      <div onClick={handleClick}>
        {theme}
      </div>
  )
}

export default Toggle