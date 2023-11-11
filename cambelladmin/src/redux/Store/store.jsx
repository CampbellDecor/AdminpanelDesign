import { configureStore } from '@reduxjs/toolkit'
import User from '../Slice/UserSlice.jsx'
import Admin from '../Slice/AdminSlice.jsx'
import ServiceCat from '../Slice/ServiceCategorySlice.jsx'
import Service from '../Slice/ServiceSlice.jsx'
import Religion from '../Slice/ReligionSlice.jsx'
import adminChatlist from '../Slice/AdminChatListSlice.jsx'
import userchatlist from '../Slice/NormalChatlistSlice.jsx'
import adminchats from '../Slice/AdminChats'
import userchats from '../Slice/UserChats'
export const Store = configureStore({
  reducer: {
    user: User,
    admin: Admin,
    ServiceCat: ServiceCat,
    service: Service,
    religion: Religion,
    adminchatlist: adminChatlist,
    adminchats: adminchats,
    userchatlist: userchatlist,
    userChats: userchats
  }
})
