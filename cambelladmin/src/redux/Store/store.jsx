import { configureStore } from '@reduxjs/toolkit'
import Thunk from 'redux-thunk'
import logger from 'redux-logger'
import user from '../Slice/UserSlice.jsx'
import admin from '../Slice/AdminSlice.jsx'
import ServiceCat from '../Slice/ServiceCategorySlice.jsx'
import service from '../Slice/ServiceSlice.jsx'
import Book from '../Slice/Book.jsx'
import adminchatlist from '../Slice/AdminChatListSlice.jsx'
import userchatlist from '../Slice/NormalChatlistSlice.jsx'
import adminchats from '../Slice/AdminChats'
import userChats from '../Slice/UserChats'
import events from '../Slice/EventsSlice'
import packs from '../Slice/Packages.jsx'
import userOne from '../Slice/OneUser.jsx'
import OneBook from '../Slice/OneBooking'
import todo from '../Slice/TodoSlice'
import onePackage from '../Slice/OnePackage'
export const Store = configureStore({
  reducer: {
    user,
    admin,
    ServiceCat,
    service,
    Book,
    adminchatlist,
    adminchats,
    userchatlist,
    userChats,
    events,
    packs,
    userOne,
    OneBook,
    todo,
    onePackage
  },
middleware:[Thunk,logger]
})
