import React, { useCallback, useMemo } from 'react'
import ReactSwitch from 'react-switch'
import { Navbar, Nav, Container, Badge, Image } from 'react-bootstrap'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { useUserContext } from '../../contexts/UserContext'
import { useThemeContext } from '../../contexts/ThemeContext'
import { useUIContext } from '../../contexts/UiContext'
import SearchBox from '../../component/Util/SearchBox'
export default function Header () {
  const { currentuser } = useUserContext()
  return useMemo(()=>(
      <>
        <Navbar id='main-navbar' expand='sm' sticky='top'>
          <Container fluid>
            <SearchBox />

            <Nav className='ms-auto d-sm-flex  w-sm-100 w-md-25 justify-content-md-end justify-content-sm-around align-items-lg-center'>
              <Nav.Item
                className=' d-none  d-sm-block mx-sm-3'
                id='navbarDropdownMenuLink'
              >
                <span>
                  {/* <i className='fas fa-bell text-white'></i>
                  <Badge className='badge-notification' pill bg='danger'>
                    1
                  </Badge> */}
                </span>
              </Nav.Item>

              <Nav.Item className='d-none  d-sm-block mx-sm-3'>
                <ModeChangeBtn />
              </Nav.Item>

              <Nav.Item
                as='a'
                href='/admins/profile/self'
                className='d-sm-block mx-sm-3'
              >
                <Image
                  src={
                    currentuser?.profile ??
                    'https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg'
                  }
                  height='41'
                  alt='profile'
                  loading='lazy'
                  roundedCircle
                  className='d-none d-md-block'
                />
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
      </>
    ),[currentuser])

}

function ModeChangeBtn () {
  const { mode, setmode } = useThemeContext()
  const { splittoggle } = useUIContext()

  const changeMode =useCallback( () => {
    if (mode === 'dark') {
      setmode('light')
      splittoggle.current.classList.remove('dark-page')
    } else {
      setmode('dark')
      splittoggle.current.classList.add('dark-page')
    }
  },[mode])

  return useMemo(
    () => (
      <ReactSwitch
        checked={mode === 'light'}
        checkedHandleIcon={
          <BsFillSunFill
            color='#ffff00'
            style={{ marginLeft: '5px', marginBottom: '5px' }}
          />
        }
        uncheckedHandleIcon={
          <BsFillMoonFill
            color='#000'
            style={{ margin: '5px', marginBottom: '10px' }}
          />
        }
        onHandleColor='#250368'
        offHandleColor='#969696'
        onColor='#527DF3'
        offColor='#000'
        uncheckedIcon={false}
        checkedIcon={true}
        handleDiameter={25}
        height={20}
        width={48}
        onChange={changeMode}
      />
    ),
    [mode,changeMode]
  )
}
