import { createBrowserRouter } from "react-router-dom";
import {Layout} from "./Layout";
import Home from '../../pages/Home';
import Users from '../../pages/USers';
import Chatapp from '../../pages/Chatapp';
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
                        path:"/",
                        element:<Chatapp/>
                    },
                    {
                        path:"/analsis",
                        element:< Analytics/>

                    }
                   
                ]
            }
        ]
);
export default router;