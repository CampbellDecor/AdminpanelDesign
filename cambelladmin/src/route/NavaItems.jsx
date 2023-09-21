import React from "react";
import { BsFillChatFill, BsFillCalendarDateFill } from "react-icons/bs";
import { MdEventSeat, MdAdminPanelSettings, MdHomeRepairService } from "react-icons/md";
import { FaTachometerAlt,FaUsers } from "react-icons/fa";
import { TbPackages, TbDeviceAnalytics } from "react-icons/tb";

const is=25;
export const NavItems = [ {
    path: '/',
    itemname: "DashBoard",
    itemicon: <FaTachometerAlt size={ is } className="me-3" />
  },
  {
    path: "/admins",
    itemname: "Admin",
    itemicon: <MdAdminPanelSettings size={ is } className="me-3" />
  },
  {
    path: '/',
    itemname: "Analysis",
    itemicon: <TbDeviceAnalytics size={ is } className="me-3" />
  }, {

    path: '/chats',
    itemname: "Chats",
    itemicon: <BsFillChatFill size={ is } className="me-3" />
  }, {
    path: "/event",
    itemname: "Events",
    itemicon: <MdEventSeat size={ is } className="me-3" />
  },
  {
    path: "/book",
    itemname: "Orders",
    itemicon: <BsFillCalendarDateFill size={ is } className="me-3" />
  },
  {
    path: "/pack",
    itemname: "Packages",
    itemicon: <TbPackages size={ is } className="me-3" />
  },
  {
    path: "/service/cat",
    itemname: "ServiceCategory",
    itemicon: <MdHomeRepairService size={ is } className="me-3" />
  }, 
  {
    path: "/service",
    itemname: "Services",
    itemicon: <MdHomeRepairService size={ is } className="me-3" />
  }, {
    path: "/users",
    itemname: "Users",
    itemicon: <FaUsers size={ is } className="me-3" />
  }
  ]