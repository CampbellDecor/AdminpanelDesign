import React,{createContext, useState} from 'react';

const AuthContext = createContext( null );
export default function Contexts (){
    const [ login, setLogin ] = useState( false );
    const [ currentuser, setcurrentUser ] = useState( null );
    const [ isSuper, setisSuper ] = useState( false );
    return(

        <AuthContext.Provider value={ { login, setLogin, currentuser, setcurrentUser, isSuper, setisSuper } }>
            
        </AuthContext.Provider>

    )

}
