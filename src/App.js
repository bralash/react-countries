import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import { DarkModeProvider } from './contexts/DarkModeContext'

const App = () => {
  return (
    <DarkModeProvider>
        <Navbar />
    </DarkModeProvider>
  )
}

export default App