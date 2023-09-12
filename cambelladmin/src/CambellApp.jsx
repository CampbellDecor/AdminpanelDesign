import React from 'react';
import { RouterProvider } from "react-router-dom";
import router from './component/route/router';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'mdb-ui-kit/css/mdb.min.css'
import Cambell from'./contexts/AppContext';
//import { CookiesProvider } from 'react-cookie';
// import { transitions, positions, Provider as AlertProvider } from 'react-alert';
// import AlertTemplate from 'react-alert-template-basic';
// const options = {
//   // you can also just use 'bottom center'
//   position: positions.BOTTOM_CENTER,
//   timeout: 5000,
//   offset: '30px',
//   // you can also just use 'scale'
//   transition: transitions.SCALE
// }
export default function CambellAdmin (){
   
    return(
        <>
        {/* <AlertProvider template={AlertTemplate} {...options}> */}
      <Cambell childern={<RouterProvider router={router}/>}/>
{/* </AlertProvider> */}
        </>
       
    )

}
