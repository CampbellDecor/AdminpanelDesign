import React from 'react';
import { RouterProvider } from "react-router-dom";
import router from './route/router';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'mdb-ui-kit/css/mdb.min.css'
import Cambell from'./contexts/AppContext';

export default function CambellAdmin (){
   
    return(
     
        <Cambell
            childern={
                <RouterProvider router={ router } />
            }
        />
       
    )

}
