import { configureStore } from '@reduxjs/toolkit'
import Thunk from 'redux-thunk'
import logger from 'redux-logger'
import UserSlice from '../Slice/User'
import AdminSlice from '../Slice/Admins'
import AdminChatsSlice from '../Slice/Adminchats'
import SuperAdminchatSlice from '../Slice/SuperAdminChats'
import EventsSlice from '../Slice/Events'
import PackageSlice from '../Slice/Packages'
import ServiceSlice from '../Slice/Service'
import BookingSlice from '../Slice/Booking'
import AdminChatsoneSlice from '../Slice/AdminChatsaone'
import UserChatsoneSlice from '../Slice/UserChatone'
import AuthSlice from '../Slice/Auth'
import TodoSlice from '../Slice/Todo'
import PaymentHisSlice from '../Slice/PaymentHis'
import TaskSlice from '../Slice/TaskList'

export const Store = configureStore({
  reducer: {
    user: UserSlice,
    admin: AdminSlice,
    service: ServiceSlice,
    booking: BookingSlice,
    events: EventsSlice,
    packs: PackageSlice,
    achatlis: SuperAdminchatSlice,
    uchatlist: AdminChatsSlice,
    achats: AdminChatsoneSlice,
    uchats: UserChatsoneSlice,
    auth: AuthSlice,
    todo: TodoSlice,
    payhis:PaymentHisSlice,
    task:TaskSlice
  },
  middleware: [Thunk]
})
