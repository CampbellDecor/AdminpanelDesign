import React,{useContext} from 'react';
import { FaTachometerAlt } from "react-icons/fa";
import {TbDeviceAnalytics} from "react-icons/tb";
import {Nav,Navbar,Image}  from 'react-bootstrap';
import {CambellContext} from '../contexts/AppContext';
//import "../style/admin.scss";


const NavItems=[{
  order:1,
  path:'/',
  itemname:"DashBoard",
  itemicon:<FaTachometerAlt  className="me-3"/>
},{
  order:2,
  path:'/',
  itemname:"Analysis",
  itemicon:<TbDeviceAnalytics  className="me-3"/>
},{
  order:3,
  path:'/chats',
  itemname:"Chats",
  itemicon:<TbDeviceAnalytics  className="me-3"/>
}];


export default function SideBar() {
  const {cambell,responsivetoggle}=useContext(CambellContext);
 
const {Appname}=cambell;
  return (
    <Nav id="sidebarMenu" variant="pill" className="d-none d-sm-block" ref={responsivetoggle}>
      <Navbar.Brand className="logo" href="/">
              <Image src="https://play-lh.googleusercontent.com/WCwcq3DvY0pbaTqUfU1ToySB2s5mmqAUxcLcTN3Y2J5l-sDwS2L2z6_qmCYNX9wdXg" className="logo-img me-3" alt="logo" roundedCircle />
              <span>{Appname}</span>
      </Navbar.Brand>
      <div className="position-sticky">
        <div className="list-group mx-auto mx-md-0 list-group-flush mt-2">
          { NavItems.map(item=>(
          <NavItem {...item}/>
          )
          )
          }
        </div>
      </div>
    </Nav>
  );
}

function NavItem({order,path,itemname,itemicon}){
  return(
    <Nav.Link href={path} className="list-group-item list-group-item-action py-2 ripple navlink" aria-current="true" key={order}>
      {itemicon}
    <span>{itemname}</span>
  </Nav.Link>
  )
}