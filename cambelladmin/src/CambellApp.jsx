import React from 'react';
import { RouterProvider } from "react-router-dom";
import router from './component/route/router';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'mdb-ui-kit/css/mdb.min.css'
import Cambell from'./component/AppContext';


export default function CambellAdmin (){
   
    return(
        <>
      <Cambell childern={<RouterProvider router={router}/>}/>
        </>
       
    )

}
