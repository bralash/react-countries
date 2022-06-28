import React, { createContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();



const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState('dark');

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

        // const prevTheme = isDarkMode === 'dark'? 'light' : 'dark';
        // html.classList.remove(prevTheme);

        // const nextTheme = isDarkMode === 'light' ? 'dark' : 'light';
        // html.classList.add(nextTheme);

        // localStorage.setItem('theme',nextTheme);

    }, [isDarkMode])

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export {DarkModeContext, DarkModeProvider}