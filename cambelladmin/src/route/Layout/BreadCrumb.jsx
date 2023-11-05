import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import {
    MDBBreadcrumb,
    MDBBreadcrumbItem,
  MDBContainer,

} from 'mdb-react-ui-kit';
import {useUIContext} from '../../contexts/UiContext'
export default function BreadCrumb ()
{
  const { BreadCrumbcom, SetBearcrumbs } = useUIContext();
  const { urlset, pageTitle} = BreadCrumbcom;
  const location = useLocation();
  const { pathname} = location;
  useEffect(() =>
  {
    if (location.pathname.split('/').includes('self'))
      SetBearcrumbs({ type: "SELFADMIN", payload: pathname });
    else if (location.pathname.includes('admins') && !location.pathname.includes('self') && location.pathname.includes('profile')

)
    {
      SetBearcrumbs({ type: 'ONEADMIN', payload:pathname })

    }else if (location.pathname.includes('admins') && !location.pathname.includes('self')

)
    {
      SetBearcrumbs({ type: 'EDITADMIN', payload:pathname })

    }
    else if (location.pathname.includes('admins') && location.pathname.includes('add')
)
    {
      SetBearcrumbs({ type: 'AddADMIN', payload:pathname })

    }
    else
    {
      SetBearcrumbs({ type: 'NONE', payload:pathname })

    }
  }, []);


    return(
 <div className='px-5 py-2 bg-light mb-4'>
        <h2 className='pagename'>{pageTitle}</h2>
 <MDBContainer fluid>
   <MDBBreadcrumb bold>
            {
   urlset&&urlset.map(({path, name, isactive})=>(
      isactive?(
      <MDBBreadcrumbItem active>
        <Link to={path} className='text-black text-capitalize text-decoration-none'>
          {name}
        </Link>
      </MDBBreadcrumbItem>):(
 <MDBBreadcrumbItem>
 <Link to={path} className='text-reset'>
   {name}
 </Link>
</MDBBreadcrumbItem>
      )

                  ))
            }
   </MDBBreadcrumb>
 </MDBContainer>
</div>
    )

}
