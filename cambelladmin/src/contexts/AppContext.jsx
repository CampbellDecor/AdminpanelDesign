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
    
    const [ islogin, setLogin ] = useState( false );
    const user = sessionStorage.getItem( "current" ) || null;
    const [ currentuser, setCurrentUser ] = useState( user !== null ? JSON.parse( user ) : null );
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
            setCurrentUser
        } }>
            
            {childern}
        </CambellContext.Provider>

    )

}