import React, { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './route/router'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'mdb-ui-kit/css/mdb.min.css'
import Cambell from './contexts/CambellContext'
import LoadingPage from './pages/Bugs/Loding'
import { Provider } from 'react-redux'
import {Store} from './redux/Store/store'
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
