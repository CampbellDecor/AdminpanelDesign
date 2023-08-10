import React,{createContext,useState,useRef} from 'react';

export const CambellContext=createContext();

export default function AppContext ({childern}){
    const [cambell,setcambell]=useState({
        Appname:"CampbellDecor",
        Applogo:"../style/logo.png"
    });

    const[mode,setmode]=useState("light");
    const splittoggle=useRef(null);
    const responsivetoggle=useRef(null);
    
    return(
        <CambellContext.Provider value={{cambell,setcambell,mode,setmode,splittoggle,responsivetoggle}}>
            {childern}
        </CambellContext.Provider>

    )

}