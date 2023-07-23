import { createBrowserRouter } from "react-router-dom";
import {Layout} from "./Layout";
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Users from '../../pages/USers';
import Chatapp from '../../pages/Chatapp';
import {NotFound} from  '../../pages/Error/404';
import Analytics from "../../pages/Analytics";

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
                        path:"/chats",
                        element:<Chatapp/>
                    },
                    {
                        path:"/analsis",
                        element:< Analytics/>

                    }
                   
                ]
            },
            {
                path:"/",
                element:<Login/>
            },
            {
                path:"/*",
                element:<NotFound/>
            }
        ]
);
export default router;