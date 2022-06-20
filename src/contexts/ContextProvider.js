import React, { createContext, useContext, useState, useEffect } from "react"

const StateContext = createContext()

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState(localStorage.getItem('colorMode') ? localStorage.getItem('colorMode') : '#03C9D7')
    const [currentMode, setCurrentMode] = useState(localStorage.getItem('themeMode') ? localStorage.getItem('themeMode') : 'Light')
    const [themeSettings, setThemeSettings] = useState(false)

    const setMode = ({ target }) => {
        setCurrentMode(target.value)
        localStorage.setItem('themeMode', target.value)
        setThemeSettings(false)
    }


    const setColor = (color) => {
        setCurrentColor(color)
        localStorage.setItem('colorMode', color)
        setThemeSettings(false)
    }


    const handleClick = (clicked) => {
            setIsClicked({ ...initialState, [clicked]: true })
    }

    const resetIsClicked = () => {
        setIsClicked({...initialState})
    }

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                resetIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                setMode, setColor,
                currentColor, currentMode,
                themeSettings, setThemeSettings
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)