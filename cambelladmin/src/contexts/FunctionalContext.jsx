import React,{createContext} from 'react';
import AuthCo
export const FunctionalContext = createContext( null );

const  authfun=(islogin,path)=>{
    return islogin?path:"/";
}
export default function FunctionalContextDemo (  )
{
    
    return (
        <FunctionalContext.Provider value={authfun}>
            
        </FunctionalContext.Provider>
    )
}