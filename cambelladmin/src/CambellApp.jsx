import React from 'react';
import { RouterProvider } from "react-router-dom";
import router from './component/route/router';
export default function CambellAdmin (){

    return(
        <>
        <RouterProvider router={router}/>
        </>
       

    )

}