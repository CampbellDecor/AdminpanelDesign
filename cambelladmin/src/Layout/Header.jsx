import React from 'react';
import ReactSwitch from 'react-switch';
import { Navbar, Nav, Container, Badge, Form, FormControl, Button,Image} from 'react-bootstrap';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { useUserContext } from '../contexts/UserContext';
import { useThemeContext } from '../contexts/ThemeContext'
import { useUIContext } from '../contexts/UiContext'

export default function Header (){

const {currentuser}=useUserContext();


    return(
      <>
        <Navbar id="main-navbar"  expand="sm" sticky="top">
          <Container fluid>
            <Form className="d-none d-md-flex input-group w-auto my-auto searchbar">
              <FormControl
                type="search"
                placeholder="Search.."
                style={{ minWidth: '225px' }}
                autoComplete="off"
              />
              <Button variant="secondary" className='btn' >
                <i className="fas fa-search text-dark fw-bolder"></i>
              </Button>

            </Form>
            <Nav className="ms-auto d-sm-flex  w-sm-100 w-md-25 justify-content-md-end justify-content-sm-around align-items-lg-center">
              <Nav.Item className=" d-none  d-sm-block mx-sm-3" id="navbarDropdownMenuLink">
                <span>
                    <i className="fas fa-bell text-white"></i>
                    <Badge className="badge-notification" pill bg="danger">1</Badge>
                </span>
              </Nav.Item>

              <Nav.Item className="d-none  d-sm-block mx-sm-3">
              <ModeChangeBtn/>
              </Nav.Item>
              <Nav.Item className="d-sm-block mx-sm-3">
                  <Image
                    src={currentuser?.profile||"https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"}
                    height="41"
                    alt="profile"
                    loading="lazy"
                    roundedCircle
                    className="d-none d-md-block"

                  />
              </Nav.Item>
            </Nav>

          </Container>

        </Navbar>

        </>
      );

}

function ModeChangeBtn ()
{
  const { mode, setmode } = useThemeContext();
  const { splittoggle } = useUIContext();

  const changeMode=()=>{
    if(mode==="dark"){
     setmode("light");
     splittoggle.current.classList.remove("dark-page");
    }else{
     setmode("dark");
     splittoggle.current.classList.add("dark-page");
    }


  }

  return (
    <ReactSwitch
    checked={mode==="light"}
    checkedHandleIcon={<BsFillSunFill color="#ffff00" style={{marginLeft:"5px",marginBottom:"5px"}}/>}
    uncheckedHandleIcon={<BsFillMoonFill color="#000"  style={{margin:"5px",marginBottom:"10px"}}/>}
    onHandleColor="#250368"
    offHandleColor="#969696"
     onColor="#527DF3"
     offColor="#000"
     uncheckedIcon={false}
     checkedIcon={true}
     handleDiameter={25}
     height={20}
     width={48}
     onChange={changeMode}
     />
  )
}
