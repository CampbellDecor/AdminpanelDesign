import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './route/router';
import Cambell from './contexts/CambellContext';
import LoadingPage from './pages/Bugs/Loding';
import { Provider } from 'react-redux';
import { Store } from './redux/Store/store';
import { getEvents } from './redux/Thunks/Events'
import { getPackages } from './redux/Thunks/Packages'
import { getServices } from './redux/Thunks/Service'
import { getUsers } from './redux/Thunks/User'
import {getBooking,allTaskList} from "./redux/Thunks/Booking"
import { getauth } from "./redux/Thunks/Admins"
import { getPayment } from "./redux/Thunks/Payment"



export default function CambellAdmin () {

  return (
    <Cambell
      childern={
        <Provider store={Store}>
          <Suspense fallback={<LoadingPage/>}>
            <RouterProvider router={router} />
          </Suspense>
        </Provider>
      }
    />
  )
}
Store.dispatch(getauth())
Store.dispatch(getBooking())
Store.dispatch(getEvents())
Store.dispatch(getPackages())
Store.dispatch(getServices())
Store.dispatch(getUsers())
Store.dispatch(getPayment());
Store.dispatch(allTaskList())
