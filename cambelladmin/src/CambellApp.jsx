import React, { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './route/router'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'mdb-ui-kit/css/mdb.min.css'
import Cambell from './contexts/CambellContext'
import LoadingPage from './pages/Bugs/Loding'
import { Provider } from 'react-redux'
import { Store } from './redux/Store/store'
import {getUser} from './redux/Thunks/User'
import {getadmin} from './redux/Thunks/Admin'
import {getEvents} from './redux/Thunks/EventThunk'
import {getPack} from './redux/Thunks/PackThnuk'
import {getServiceCat} from './redux/Thunks/ServiceCategory'
import {getservice} from './redux/Thunks/Service'
import {getadminchatList} from './redux/Thunks/AdminChat'
import {getUserChatList} from './redux/Thunks/userchat'
Store.dispatch(getUser())
Store.dispatch(getadmin())
Store.dispatch(getEvents())
Store.dispatch(getServiceCat())
Store.dispatch(getPack())
Store.dispatch(getservice())
Store.dispatch(getadminchatList())
Store.dispatch(getUserChatList())
export default function CambellAdmin () {

  return (
    <Cambell
      childern={
        <Provider store={Store}>
          <Suspense fallback={<LoadingPage />}>
            <RouterProvider router={router} />
          </Suspense>
        </Provider>
      }
    />
  )
}
