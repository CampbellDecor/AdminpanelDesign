import React, { createContext, useContext, useRef } from 'react'

const UIContext = createContext(null)
export default function UIContextProvider ({ childern }) {
  const splittoggle = useRef(null)
    const responsivetoggle = useRef(null)


  return (
    <UIContext.Provider value={{ splittoggle,responsivetoggle }}>
      {childern}
    </UIContext.Provider>
  )
}

export function useUIContext () {
  return useContext(UIContext)
}
