import React, { useId} from 'react'
import axios from 'axios';
import { Nav, Navbar, Image} from 'react-bootstrap'
import { useAppContext } from '../../contexts/AppContext'
import { useUIContext } from '../../contexts/UiContext'
import { LiaSignOutAltSolid } from 'react-icons/lia'
import { NavItems } from '../NavaItems'

export default function SideBar () {
  const { Appname, Applogo } = useAppContext()
  const { responsivetoggle } = useUIContext()

  return (
    <Nav
      id='sidebarMenu'
      variant='pill'
      className='d-none d-sm-block'
      ref={responsivetoggle}
    >
      <Navbar.Brand className='logo' href='/home'>
        <Image
          src={Applogo}
          className='logo-img me-3'
          alt='logo'
          roundedCircle
        />
        <span>{Appname}</span>
      </Navbar.Brand>
      <div className='position-sticky'>
        <div className='list-group mx-auto mx-md-0 list-group-flush mt-2'>
          {NavItems.map((item, index) => (
            <NavItem {...item} key={index} />
          ))}
          <NavItem
            Class='sticky-bottom'
            path='/logout'
            itemname='Logout'
            itemicon={<LiaSignOutAltSolid size={25} className='me-3' />}
            key={useId()}
          />
        </div>
      </div>
    </Nav>
  )
}

function NavItem ({ path, itemname, itemicon, Class = '', onClick = null })
{

  return (

    <Nav.Link
      href={path}
      className={
        'list-group-item list-group-item-action py-3 ripple navlink ' + Class
      }
      aria-current='true'
      onClick={onClick}
    >
      {itemicon}

      <span>{itemname}</span>


    </Nav.Link>
  )
}
