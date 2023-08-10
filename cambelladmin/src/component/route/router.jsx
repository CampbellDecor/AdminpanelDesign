import { createBrowserRouter } from "react-router-dom";
import {Layout} from "./Layout";
import Home from '../../pages/Home';
import Chatapp from '../../pages/Chatapp';

const  router=createBrowserRouter(
        [
            {
                element:<Layout/>,
                caseSensitive:false,
                children:[
                    {
                        path:"/",
                        element:<Home/>
                    },
                    {
                        path:"/chats",
                        element:<Chatapp/>
                    }
                   
                ]
            }
        ]
);

export default router;