// @ts-nocheck
import { Provider } from 'react-redux'
import { Store} from "../store/store";
import React, { createContext, useState,useContext } from 'react';
import logo from "../images/logo.png";


export const CambellContext=createContext();

export default function AppContext ({childern}){
    const [Appname, setAppname] = useState("Cambell Decor");
    const [Applogo, setApplogo] = useState(logo);


    return(
        <CambellContext.Provider value={{Appname, setAppname,Applogo, setApplogo


} }>
            <Provider store={Store}>
            {childern}
            </Provider>

        </CambellContext.Provider>

    )

}
export function useAppContext () {
  return useContext(CambellContext)
}
