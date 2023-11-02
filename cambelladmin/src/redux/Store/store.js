import {
    configureStore
} from "@reduxjs/toolkit";
import User from "../Slice/UserSlice";
import Admin from "../Slice/AdminSlice";
import ServiceCat from "../Slice/ServiceCategorySlice";
import Service from "../Slice/ServiceSlice";
import religionname from "../Slice/ReligionSlice.jsx";
import adminChat from '../Slice/AdminChatSlice';
import userchatlist from '../Slice/UserChatSlice';
export const Store = configureStore({
    reducer: {
        "user": User,
        "admin": Admin,
        "ServiceCat": ServiceCat,
        "service": Service,
        "religionname": religionname,
        "adminchat": adminChat,
        'userchatlist':userchatlist
    }
});
