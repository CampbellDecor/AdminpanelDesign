import React,{useContext} from 'react';
import { FaTachometerAlt,FaUsers } from "react-icons/fa";
import {TbPackages,TbDeviceAnalytics} from "react-icons/tb";
import {Nav,Navbar,Image}  from 'react-bootstrap';
import {CambellContext} from '../contexts/AppContext';
import {BsFillChatFill,BsFillCalendarDateFill} from "react-icons/bs"
import {MdEventSeat,MdAdminPanelSettings,MdHomeRepairService} from "react-icons/md"
const is=25;
const NavItems=[{
  order:1,
  path:'/',
  itemname:"DashBoard",
  itemicon:<FaTachometerAlt size={is} className="me-3"/>
},
{
  order:2,
  path:"/admins",
  itemname:"Admin",
  itemicon:<MdAdminPanelSettings size={is} className="me-3"/>
},
{
  order:3,
  path:'/',
  itemname:"Analysis",
  itemicon:<TbDeviceAnalytics size={is} className="me-3"/>
},{
  order:4,
  path:'/chats',
  itemname:"Chats",
  itemicon:<BsFillChatFill  size={is}  className="me-3"/>
},{
  order:5,
  path:"/event",
  itemname:"events",
  itemicon:<MdEventSeat  size={is}  className="me-3"/>
},
{
  order:6,
  path:"/book",
  itemname:"Orders",
  itemicon:<BsFillCalendarDateFill  size={is} className="me-3"/>
},
{
  order:7,
  path:"/pack",
  itemname:"Packages",
  itemicon:<TbPackages  size={is} className="me-3"/>
},
{
  order:8,
  path:"/service",
  itemname:"Services",
  itemicon:<MdHomeRepairService  size={is} className="me-3"/>
},{
  order:9,
  path:"/users",
  itemname:"Users",
  itemicon:<FaUsers  size={is} className="me-3"/>
}
];


export default function SideBar() {
  const {cambell,responsivetoggle,setLogin}=useContext(CambellContext);
setLogin(true);
const {Appname}=cambell;
  return (
    <Nav id="sidebarMenu" variant="pill" className="d-none d-sm-block" ref={responsivetoggle}>
      <Navbar.Brand className="logo" href="/home">
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
  const {authfun}=useContext(CambellContext);
  return(
    <Nav.Link href={authfun(path)} className="list-group-item list-group-item-action py-3 ripple navlink" aria-current="true" key={order}>
      {itemicon}
    <span>{itemname}</span>
  </Nav.Link>
  )
}