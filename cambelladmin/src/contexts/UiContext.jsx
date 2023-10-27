import React, { createContext, useContext, useRef,useReducer } from 'react'
import { Breadcrumbreducer } from '../function/Uihandle'
const UIContext = createContext(null)
export default function UIContextProvider ({ childern }) {
  const splittoggle = useRef(null)
    const responsivetoggle = useRef(null)
const [BreadCrumbcom, SetBearcrumbs] = useReducer(Breadcrumbreducer, {
  urlpath: '',
  pageTitle: ''
})


  return (
    <UIContext.Provider value={{ splittoggle,responsivetoggle,BreadCrumbcom, SetBearcrumbs}}>
      {childern}
    </UIContext.Provider>
  )
}

export function useUIContext () {
  return useContext(UIContext)
}
