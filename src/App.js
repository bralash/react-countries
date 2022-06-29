import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Countries from './components/Countries'
import Navbar from './components/Navbar'
import { DarkModeProvider } from './contexts/DarkModeContext'

const App = () => {
  return (
    <DarkModeProvider>
        <Navbar />
        <BrowserRouter>
            <Countries />
        </BrowserRouter>
    </DarkModeProvider>
  )
}

export default App