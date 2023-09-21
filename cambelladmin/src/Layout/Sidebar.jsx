import React, {
  useContext
} from 'react';

import { Nav, Navbar, Image } from 'react-bootstrap';
import { CambellContext } from '../contexts/AppContext';
import { NavItems } from "../route/NavaItems";




export default function SideBar ()
{
  const { cambell, responsivetoggle } = useContext( CambellContext );
  const { Appname } = cambell;
  return (
    <Nav id="sidebarMenu" variant="pill" className="d-none d-sm-block" ref={ responsivetoggle }>
      <Navbar.Brand className="logo" href="/home">
        <Image src={ cambell?.Applogo } className="logo-img me-3" alt="logo" roundedCircle />
        <span>{ Appname }</span>
      </Navbar.Brand>
      <div className="position-sticky">
        <div className="list-group mx-auto mx-md-0 list-group-flush mt-2">
          { NavItems.map( ( item, index ) => (
            <NavItem { ...item } key={index} />
          )
          )
          }
        </div>
      </div>
    </Nav>
  );
}

function NavItem ( { path, itemname, itemicon } )
{
  return (
    <Nav.Link href={ path } className="list-group-item list-group-item-action py-3 ripple navlink" aria-current="true" >
      { itemicon }
      <span>{ itemname }</span>
    </Nav.Link>
  );
}