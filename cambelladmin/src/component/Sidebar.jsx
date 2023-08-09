import React,{useContext} from 'react';
import { FaTachometerAlt } from "react-icons/fa";
import {TbDeviceAnalytics} from "react-icons/tb";
import {Nav,Navbar,Image}  from 'react-bootstrap';
import {CambellContext} from './AppContext';
//import "../style/admin.scss";


const NavItems=[{
  order:1,
  path:'/home',
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
      <Navbar.Brand className="logo" href="/home">
              <Image src="https://media.vogue.co.uk/photos/64916f00ad4b7de8bf024aa2/16:9/w_1920,h_1080,c_limit/Mia_200623_lascape%20MIA.jpg" className="logo-img me-3" alt="logo" roundedCircle />
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
    <Nav.Link to={path} className="list-group-item list-group-item-action py-2 ripple navlink" aria-current="true" key={order}>
      {itemicon}
    <span>{itemname}</span>
  </Nav.Link>
  )
}