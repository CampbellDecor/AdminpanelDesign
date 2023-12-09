import React from "react";
import { BsFillChatFill, BsFillCalendarDateFill } from "react-icons/bs";
import { MdEventSeat, MdAdminPanelSettings, MdHomeRepairService } from "react-icons/md";
import { FaTachometerAlt,FaUsers } from "react-icons/fa";
import { TbPackages, TbDeviceAnalytics } from "react-icons/tb";

const is=25;
export const NavItems =[
  {
    path: '/home',
    itemname: 'DashBoard',
    itemicon: <FaTachometerAlt size={is} className='me-3' />,
  },
  {
    path: '/sys',
    itemname: 'System',
    itemicon: <FaTachometerAlt size={is} className='me-3' />,
  },
  // {
  //   path: '/analysis',
  //   itemname: "Analysis",
  //   itemicon: <TbDeviceAnalytics size={ is } className="me-3" />
  // },
  {
    path: '/chats/normal',
    itemname: 'Chats',
    itemicon: <BsFillChatFill size={is} className='me-3' />
  },
  {
    path: '/event',
    itemname: 'Events',
    itemicon: <MdEventSeat size={is} className='me-3' />
  },
  {
    path: '/booking',
    itemname: 'Orders',
    itemicon: <BsFillCalendarDateFill size={is} className='me-3' />
  },
  {
    path: '/pack',
    itemname: 'Packages',
    itemicon: <TbPackages size={is} className='me-3' />
  },
  {
    path: '/service',
    itemname: 'Services',
    itemicon: <MdHomeRepairService size={is} className='me-3' />
  },
  {
    path: '/users',
    itemname: 'Users',
    itemicon: <FaUsers size={is} className='me-3' />
  }
]
const navbar=[...NavItems].map(ele => {
  if (ele.itemname === 'Chats') {
    return {
      path: '/chats/admin',
      itemname: 'Chats',
      itemicon: <BsFillChatFill size={is} className='me-3' />
    }
  } else {
    return ele
  }
})

export const SuperNavItems =[...navbar.slice(0,1) ,{
    path: '/admins',
    itemname: 'Admin',
    itemicon: <MdAdminPanelSettings size={is} className='me-3' />
},...navbar.slice(1,navbar.length)]
