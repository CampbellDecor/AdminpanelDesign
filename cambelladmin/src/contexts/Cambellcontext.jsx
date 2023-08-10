import React,{createContext,useState,useRef} from 'react';

export const BaseContext=createContext();

export default function AppContext ({childern}){
    const [cambell,setcambell]=useState({
        Appname:"CampbellDecor",
        Applogo:"../style/logo.png"
    });

    const[mode,setmode]=useState("light");
    const splittoggle=useRef(null);
    const responsivetoggle=useRef(null);
    
    return(
        <BaseContext.Provider value={{cambell,setcambell,mode,setmode,splittoggle,responsivetoggle}}>
            {childern}
        </BaseContext.Provider>

    )

}