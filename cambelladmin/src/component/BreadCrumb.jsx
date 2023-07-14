import React from 'react';
import {
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBContainer,
   
  } from 'mdb-react-ui-kit';
export default function component (){

    return(
 
 <div className='p-5 bg-light mb-4'>
 <h1>Dashboard</h1>
 <MDBContainer fluid>
   <MDBBreadcrumb bold>
     <MDBBreadcrumbItem>
       <a href='' className='text-reset'>
         Home
       </a>
     </MDBBreadcrumbItem>
     <MDBBreadcrumbItem>
       <a href='' className='text-reset'>
         Analytics
       </a>
     </MDBBreadcrumbItem>
     <MDBBreadcrumbItem>
       <a href='' className='text-reset'>
         <u>Dashboard</u>
       </a>
     </MDBBreadcrumbItem>
   </MDBBreadcrumb>
 </MDBContainer>
</div>
    )

}