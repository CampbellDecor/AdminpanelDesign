import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import {
    MDBBreadcrumb,
    MDBBreadcrumbItem,
  MDBContainer,

} from 'mdb-react-ui-kit';
export default function BreadCrumb ()
{
  const location = useLocation();



    return(
 <div className='px-5 py-2 bg-light mb-4'>
        <h2 className='pagename'>Cambell</h2>
 <MDBContainer fluid>
   <MDBBreadcrumb bold>

      <MDBBreadcrumbItem active>
        <Link to={location.pathname} className='text-black text-capitalize text-decoration-none'>
          Pages
        </Link>
      </MDBBreadcrumbItem>
;<MDBBreadcrumbItem>
  <Link
    to={location.pathname}
    className='text-black text-capitalize text-decoration-none'
  >
    Pages
  </Link>
</MDBBreadcrumbItem>


   </MDBBreadcrumb>
 </MDBContainer>
</div>
    )

}
