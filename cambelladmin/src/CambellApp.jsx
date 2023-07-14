import React from 'react';
import { RouterProvider } from "react-router-dom";
import router from './component/route/router';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'mdb-ui-kit/css/mdb.min.css'
import 'mdb-ui-kit/js/mdb.min'
export default function CambellAdmin (){

    return(
        <>
        <RouterProvider router={router}/>
        </>
       

    )

}