import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from '../../pages/Home';
import Login from '../../pages/Login';
const  router=createBrowserRouter(
        [
            {
                element:<Layout/>,
                caseSensitive:false,
                children:[
                    {
                        path:"/home",
                        element:<Home/>
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