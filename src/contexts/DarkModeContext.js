import React, { createContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();



const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme'));

    const toggleTheme = () => {
        setIsDarkMode(() => isDarkMode === 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
        const html = window.document.documentElement;

        if(isDarkMode === 'dark') {
            html.classList.remove('dark')
            html.classList.add('light')
            window.localStorage.setItem('theme','light')
        } else {
            html.classList.remove('light')
            html.classList.add('dark')
            window.localStorage.setItem('theme','dark')
        }
    }, [isDarkMode])

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export {DarkModeContext, DarkModeProvider}