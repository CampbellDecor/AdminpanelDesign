import React from "react";
import { FaCalendarDay, FaUsers, FaCoins } from "react-icons/fa";
import {TbPackages} from "react-icons/tb"
export const countpanel = [
    {  title: "Users", idenity: <FaUsers className="icon" />, count: 10 ,path:"/users"},
    { title: "Earn", idenity: <FaCoins className="icon" />, count: 12 ,path:"/users"},
    {  title: "Booking", idenity: <FaCalendarDay className="icon" />,count: 20 ,path:"/users"},
    {title: "Packages", idenity: <TbPackages className="icon" />, count: 5 ,path:"/users"}
    ]