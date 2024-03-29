// @ts-nocheck
import React, { createContext, useState,useContext } from 'react';
import logo from "../images/logo.png";


export const CambellContext=createContext();

export default function AppContext ({childern}){
    const [Appname, setAppname] = useState("Campbell Decor");
    const [Applogo, setApplogo] = useState(logo);
    const [website,setWebsite]=useState('')


    return(
        <CambellContext.Provider value={{Appname, setAppname,Applogo, setApplogo,website, setWebsite

} }>
            {childern}

        </CambellContext.Provider>

    )

}
export function useAppContext () {
  return useContext(CambellContext)
}
