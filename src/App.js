import React from 'react'
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