import React, { useMemo, useRef } from 'react'
import { Nav, Navbar, Image } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { useAppContext } from '../../contexts/AppContext'
import { useUIContext } from '../../contexts/UiContext'
import { useUserContext } from '../../contexts/UserContext'
import { LiaSignOutAltSolid } from 'react-icons/lia'
import { SuperNavItems, NavItems } from '../NavaItems'
// import { IoBalloon } from 'react-icons/io5'

const NavItem = props => {
  const { path, itemname, itemicon, className = '' } = props
  const { pathname } = useLocation()
  const pathref = useRef(null)
  return useMemo(
    () => (
      <Nav.Link
        ref={pathref}
        href={path}
        className={
          `list-group-item list-group-item-action py-3 ripple navlink ${pathname.includes(path)&&'active shadow'} ${
className}`
        }
        aria-current='true'
      >
        {itemicon}

        <span>{itemname} </span>
        {/* <IoBalloon size={19} className='shadow-lg balloon' /> */}

      </Nav.Link>
    ),
    []
  )
}
export default function SideBar () {
  const { Appname, Applogo } = useAppContext()
  const { responsivetoggle } = useUIContext()
  const { isSuper } = useUserContext()
  return useMemo(
    () => (
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
            {isSuper
              ? SuperNavItems.map((item, index) => (
                  <NavItem {...item} key={index} />
                ))
              : NavItems.map((item, index) => (
                  <NavItem {...item} key={index} />
                ))}
            <NavItem
              className='sticky-bottom'
              path='/logout'
              itemname='Logout'
              itemicon={<LiaSignOutAltSolid size={25} className='me-3' />}
            />
          </div>
        </div>
      </Nav>
    ),
    [responsivetoggle]
  )
}
