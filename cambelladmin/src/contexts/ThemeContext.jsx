import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext(null);
export default function ThemeContextProvider ({childern}){
const [mode, setmode] = useState('light')

  return (
    <ThemeContext.Provider value={{ mode, setmode }} >
{childern}
    </ThemeContext.Provider>
  )
}

export function useThemeContext ()
{
  return useContext(ThemeContext);
 }
