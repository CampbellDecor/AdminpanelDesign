import React,{useContext, useEffect} from 'react';
import ReactSwitch from 'react-switch';
import { Navbar, Nav, Container, Badge, Form, FormControl, Button,Image} from 'react-bootstrap';
import '../style/admin.scss';
import {BsFillMoonFill,BsFillSunFill} from 'react-icons/bs'
import {CambellContext} from '../contexts/AppContext';
export default function Header (){
 
const {mode,splittoggle,setmode,currentuser}=useContext(CambellContext);
useEffect(()=>{
  console.log(currentuser?.currentUser.firstname);
})
const changeMode=()=>{
  if(mode==="dark"){
   setmode("light");
   splittoggle.current.classList.remove("dark-page");
  }else{
   setmode("dark");
   splittoggle.current.classList.add("dark-page");
  }
  
  
}

     
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
              </Nav.Item>
              <Nav.Item className="d-sm-block mx-sm-3">
                  <Image
                    src={currentuser?.currentUser.profile||"https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"}
                    height="41"
                    alt=""
                    loading="lazy"
                    roundedCircle
                    className="d-none d-lg-block"

                  />
                  <Image
                    src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                    height="30"
                    alt=""
                    loading="lazy"
                    roundedCircle
                    className="d-block d-lg-none"
                  />
              </Nav.Item>
            </Nav>
          
          </Container>
         
        </Navbar>
        
        </>
      );

}