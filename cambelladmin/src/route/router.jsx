// @ts-nocheck
import {
  createBrowserRouter
  // redirect
} from 'react-router-dom'
import { Layout, InnerLayout } from './Layout/Layout'
import Home from '../pages/Home'
import Chatapp from '../pages/Chatapp'
import NormalChatapp from '../pages/UserChatApp';
//Admin
import Admin from '../pages/Admin/Admins'
import AddAdmin from '../pages/Admin/AddAdmins'
import AdminProfile from '../pages/Admin/AdminProfile'
//User
import Users from '../pages/Users/Users'
import AddUser from '../pages/Users/AddUser'
//Auth
import Login from '../pages/Login'
import ResetPassword from '../pages/ResetPassword'
import Logout from '../pages/Logout'
//Services
import Service from '../pages/Services/Service'
import AddService from '../pages/Services/AddService'
//Events
import AddEvent from '../pages/Event/AddEvents'
import AddPackage from '../pages/AddPackages'

import Test from '../function/test'
import EditAdmin from '../pages/Admin/EditAdmin'
import Error from '../pages/Bugs/Error'
import Events from '../pages/Event/Events';
import ServiceCat from '../pages/Category';
import ToDo from '../pages/Booking/TodoList';


import { ProfileLoader } from '../function/RouteFunLoader'
const router = createBrowserRouter([
  {
    element: <Layout />,
    caseSensitive: false,
    errorElement: <Error />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/chats',
        element: <Chatapp />
      },
      {
        path: '/todo',
        element: <ToDo />
      },
      {
        path: '/users',
        element: <Users />
      },
      {
        path: '/service',
        element: <Service />
      },
      {
        path: '/admins',
        element: <Admin />
      },
      {
        element: <InnerLayout />,
        children: [
          {
            path: '/admins/profile/:aid',
            element: <AdminProfile />,
            loader: ProfileLoader
          },
          {
            path: '/admins/add',
            element: <AddAdmin />
          },
          {
            path: '/admins/edit',
            element: <EditAdmin />
          }
        ]
      },
      {
        path: '/add_service',
        element: <AddService />
      },
      {
        path: '/add_event',
        element: <AddEvent />
      },
      {
        path: '/add_pack',
        element: <AddPackage />
      },
      {
        path: '/add_user',
        element: <AddUser />
      },
      {
        path: '/event/*',
        element: <Events />
      },
      {
        path: '/service/cat',
        element: <ServiceCat />
      }, {
        path: 'chat/admin',
        element:<NormalChatapp/>
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
