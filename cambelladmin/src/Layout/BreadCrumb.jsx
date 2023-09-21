import React from 'react';
import { Link } from 'react-router-dom'
import {
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBContainer,
   
  } from 'mdb-react-ui-kit';
export  function BreadCrumb ({path}){
    return(
 <div className='p-5 bg-light mb-4'>
 <h2 className='pagename'>Customer</h2>
 <MDBContainer fluid>
   <MDBBreadcrumb bold>
    {path.map(({path,name,isactive})=>(
      isactive?(
      <MDBBreadcrumbItem active>
        <Link to={path} className='text-black'>
          {name}
        </Link>
      </MDBBreadcrumbItem>):(
 <MDBBreadcrumbItem>
 <Link to={path} className='text-reset'>
   {name}
 </Link>
</MDBBreadcrumbItem>
      )
      
    ))}
   </MDBBreadcrumb>
 </MDBContainer>
</div>
    )

}