import { createBrowserRouter } from "react-router-dom";
import {Layout} from "./Layout";
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Users from '../../pages/USers';
import Chatapp from '../../pages/Chatapp';
import OneUser  from '../../pages/OneUser'
import Services  from '../../pages/Services'
const user={
    username:"Thanu Mahee",
    firstname:"Mahendran",
    lastname:"Thanujan",
    email:"thanumahee440@gmail.com",
    mobile:"0766859048",
    address:{
        line:"02,Raja veeth",city:"jaffna"
    },
    profile:"https://firebasestorage.googleapis.com/v0/b/cambelldecor.appspot.com/o/Cambell%2FLoginbackground.png?alt=media&token=2d8ed75e-a8a7-4581-b968-19ce7afd5069"
}
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
                        element:<OneUser user={user}/>
                    },
                    {
                        path:"/chats",
                        element:<Chatapp/>
                    },
                    {
                        path:"/services",
                        element:<Services/>
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