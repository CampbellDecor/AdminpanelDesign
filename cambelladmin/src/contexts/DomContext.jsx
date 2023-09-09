import React, { createContext } from 'react';
import FunctionalContextDemo from './FunctionalContext';

const Domcontext = createContext(null);
export default function contexts (){

    return(

        <Domcontext.Provider value={{}} >
            <FunctionalContextDemo/>
        </Domcontext.Provider>

    )

}