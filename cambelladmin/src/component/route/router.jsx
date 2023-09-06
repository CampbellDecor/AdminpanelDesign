import { createBrowserRouter } from "react-router-dom";
import {Layout} from "./Layout";
import Home from '../../pages/Home';
import Chatapp from '../../pages/Chatapp';
import Login from '../../pages/Login';
import Users from "../../pages/Users"
import Service from "../../pages/Service";
import Admin from "../../pages/Admins";
import AddService from "../../pages/AddService";
import AddAdmin from "../../pages/AddAdmins";
import AddEvent from "../../pages/AddEvents"
import AddPackage from "../../pages/AddPackages"
import AddUser from "../../pages/AddUser";
import EditAdmin from "../../pages/EditAdmin";
const  router=createBrowserRouter(
        [
            {
                element:<Layout/>,
                caseSensitive:false,
                children:[
                    {
                        path:"/home",
                        element:<Home/>
                    },
                    {
                        path:"/chats",
                        element:<Chatapp/>
                    },
                    {
                        path:"/users",
                        element:<Users/>
                    },
                    {
                        path:"/service",
                        element:<Service/>
                    },
                    {
                        path:"/admins",
                        element:<Admin/>
                    },
                    {
                        path: "/add_service",
                        element:<AddService/>
                    },{
                        path: "/add_admin",
                        element:<AddAdmin/>
                    },
                    ,{
                        path: "/add_event",
                        element:<AddEvent/>
                    }
                    ,{
                        path: "/add_pack",
                        element:<AddPackage/>
                    }, {
                        path: "/add_user",
                        element:<AddUser/>
                    },
                    ,{
                        path: "/edit_admin",
                        element:<EditAdmin/>
                    },
                    
                   
                ]
            },
            {
                path:"/",
                element:<Login/>
            }
        ]
);

export default router;