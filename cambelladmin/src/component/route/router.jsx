import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Users from '../../pages/USers';
import OneUser  from '../../pages/OneUser'
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
                        path:"/users",
                        element:<Users/>
                    },
                    {
                        path:"/users/id=1",
                        element:<OneUser/>
                    }
                ]
            },
            {
                path:"/",
                element:<Login/>
            }
        ]
);
export default router;