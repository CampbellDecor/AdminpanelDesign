// @ts-nocheck
import {
  createBrowserRouter
  // redirect
} from 'react-router-dom'
import { Layout, InnerLayout } from './Layout/Layout'
import Home from '../pages/Home'

//chats
import Chatapp from '../pages/chats/Chatapp'
import NormalChatapp from '../pages/chats/UserChatApp'
//Admin
import Admin from '../pages/Admin/Admins'
import OperateAdmin from '../pages/Admin/OperateAdmins'
import AdminProfile from '../pages/Admin/AdminProfile'
//User
import Users from '../pages/Users/Users'
import UserProfile from '../pages/Users/UserProfile'
//Auth
import Login from '../pages/Login'
import ResetPassword from '../pages/ResetPassword'
import Logout from '../pages/Logout'

//Services
import Service from '../pages/Services/Service'
import OprateService from '../pages/Services/OperateService'
//Events
import Events from '../pages/Event/Events'

//packages
import OpratePackage from '../pages/Packages/OperatePackages'
import EditPackage from '../pages/Packages/EditPackages'
import Package from '../pages/Packages/Packages'

import Test from '../function/test'
import Error from '../pages/Bugs/Error'
//Bookings
import Bookings from '../pages/Booking/Bookings'
import OneBooking from '../pages/Booking/OneBooking'

import {
  ProfileLoader,
  addAdminLoader,
  editAdminLoader,
  bookings,
  UserLoader,
  OneBookloads
} from '../function/RouteFunLoader'
import {
OneBookingaction,OneUserAction
} from '../function/Routeraction'

const router = createBrowserRouter([
  {
    element: <Layout/>,
    caseSensitive: false,
    errorElement: <Error/>,
    children: [
      {
        //home
        path: '/home',
        element: <Home />
      },
      {
        //superadminchat
        path: '/chats/admin',
        element: <Chatapp />
      },
      {
        //normal adminchat
        path: 'chats/normal',
        element: <NormalChatapp />

      },
      {
        //user
        path: '/users',
        element: <Users />
      },
      {
        //service
        path: '/service',
        element: <Service />
      },
      {
        //admin
        path: '/admins',
        element: <Admin />
      },
      {
        //events
        path: '/event',
        element: <Events />
      },
      {
        //Bookings
        path: '/booking',
        element: <Bookings />,
        loader:bookings
      },
      {
        path: "/pack",
        element:<Package/>
      },
      {
        element: <InnerLayout />,
        children: [
          {
            //adminprofile
            path: '/admins/profile/:aid',
            element: <AdminProfile />,
            loader: ProfileLoader
          },
          {
            //adminadd
            path: '/admins/add',
            element: <OperateAdmin />,
            loader: addAdminLoader
          },
          {
            //admin edit
            path: '/admins/:aid',
            element: <OperateAdmin />,
            loader: editAdminLoader
          },
          {
            //service add
            path: '/service/add',
            element: <OprateService />
          },
{
            //service edit
            path: '/service/edit',
            element: <OprateService />
          },
          {
            //package add
            path: '/pack/add',
            element: <OpratePackage />
          },
          {
            path:"/pack/edit/:packid",
            element:<EditPackage/>

},
          {
            path: "/booking/:bookcode",
            element: <OneBooking />,
            action: OneBookingaction,
           loader:OneBookloads

          }, {
            path: "/user/profile/:uid",
            element: <UserProfile />,
            loader: UserLoader,
          action:OneUserAction
          }
        ]
      }
    ]
  },
  {
    path: '/',
    element: <Login />,
    ErrorBoundary: <Error/>
  },
  {
    path: '/resetpw',
    element: <ResetPassword />,
    ErrorBoundary: <Error/>
  },
  {
    path: '/logout',
    element: <Logout />,
    ErrorBoundary: <Error />
  },
  {
    path: '/test',
    element: <Test />,
    ErrorBoundary: <Error />
  }
])

export default router
