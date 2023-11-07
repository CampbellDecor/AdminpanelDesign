// @ts-nocheck
import {
  createBrowserRouter
  // redirect
} from 'react-router-dom'
import { Layout, InnerLayout } from './Layout/Layout'
import Home from '../pages/Home'
import Chatapp from '../pages/Chatapp'
import NormalChatapp from '../pages/UserChatApp'
//Admin
import Admin from '../pages/Admin/Admins'
import OperateAdmin from '../pages/Admin/OperateAdmins'
import AdminProfile from '../pages/Admin/AdminProfile'
//User
import Users from '../pages/Users/Users'
import AddUser from '../pages/Users/AddUser'
//Auth
import Login from '../pages/Login'
import ResetPassword from '../pages/ResetPassword'
import Logout from '../pages/Logout'
//ServiceCategory
import ServiceCat from '../pages/ServiceCategory/Category'

//Services
import Service from '../pages/Services/Service'
import AddService from '../pages/Services/AddService'
//Events
import AddEvent from '../pages/Event/AddEvents'
import Events from '../pages/Event/Events'

//packages
import AddPackage from '../pages/Packages/AddPackages'

import Test from '../function/test'
import Error from '../pages/Bugs/Error'
//Bookings
import Bookings from '../pages/Booking/Bookings'
import OneBooking from '../pages/Booking/OneBooking'
import {
  ProfileLoader,
  addAdminLoader,
  editAdminLoader,
  adminchatList,
  adduserLoader,
  edituserLoader,normalchatList
} from '../function/RouteFunLoader'
const router = createBrowserRouter([
  {
    element: <Layout />,
    caseSensitive: false,
    errorElement: <Error />,
    children: [
      {
        //home
        path: '/home',
        element: <Home />
      },
      {
        //superadminchat
        path: '/chats/admin',
        element: <Chatapp />,
        loader: adminchatList
      },
      {
        //normal adminchat
        path: 'chats/normal',
        element: <NormalChatapp />,
        loader:normalchatList

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
        //service Category
        path: '/servicecat',
        element: <ServiceCat />
      },
      {
        //Bookings
        path: '/booking',
        element: <Bookings />
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
            element: <AddService />
          },
          {
            //event add
            path: '/event/add',
            element: <AddEvent />
          },
          {
            //user add
            path: '/users/add',
            element: <AddUser />,
            loader:adduserLoader
          },
          {//user edit
            path: '/users/:uid',
            element: <AddUser />,
            loader:edituserLoader
          },
          {
            //package add
            path: '/pack/add',
            element: <AddPackage />
          }, {
            path: "/booking/:bookcode",
            element:<OneBooking/>
          }
        ]
      }
    ]
  },
  {
    path: '/',
    element: <Login />,
    ErrorBoundary: <Error />
  },
  {
    path: '/resetpw',
    element: <ResetPassword />,
    ErrorBoundary: <Error />
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
