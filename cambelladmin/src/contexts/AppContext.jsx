// @ts-nocheck
import { Provider } from 'react-redux'
import { Store} from "../store/store";
import React, { createContext, useState, useRef } from 'react';
import logo from "../images/logo.png";

export const CambellContext=createContext();

export default function AppContext ({childern}){
const [cambell,setcambell]=useState({
        Appname:"CampbellDecor",
        Applogo:logo
    });

    const[mode,setmode]=useState("light");
    const splittoggle=useRef(null);
    const responsivetoggle=useRef(null);
    const [ isSuper, setSuper ] = useState( JSON.parse(sessionStorage.getItem( "current" ))?.isSuper??false);
    const [ islogin, setLogin ] = useState( sessionStorage.getItem( "current" ) != null  );
    const [ currentuser, setCurrentUser ] = useState(  JSON.parse( sessionStorage.getItem( "current" ) )??null );
    const LoginFunction = () =>
    {
        setLogin( sessionStorage.getItem( "current" ) != null );
        setCurrentUser( JSON.parse( sessionStorage.getItem( "current" ) ) );
    }
    const  authfun=(path)=>{
        return islogin?path:"/";
    }

    return(
        <CambellContext.Provider value={{
authfun,
        cambell,
        setcambell,
        mode,
        setmode,
        splittoggle,
        responsivetoggle,
        islogin,
        setLogin,
            currentuser,
            setCurrentUser,
            isSuper, setSuper,
            LoginFunction
        } }>
            <Provider store={Store}>
            {childern}
            </Provider>
           
        </CambellContext.Provider>

    )

}