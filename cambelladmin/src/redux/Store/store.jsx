import {
    configureStore
} from "@reduxjs/toolkit";
import User from "../Slice/UserSlice.jsx";
import Admin from "../Slice/AdminSlice.jsx";
import ServiceCat from "../Slice/ServiceCategorySlice.jsx";
import Service from "../Slice/ServiceSlice.jsx";
import Religion from "../Slice/ReligionSlice.jsx";
import adminChat from '../Slice/AdminChatSlice.jsx';
import userchatlist from '../Slice/UserChatSlice.jsx';
export const Store = configureStore({
    reducer: {
        "user": User,
        "admin": Admin,
        "ServiceCat": ServiceCat,
        "service": Service,
        "religion": Religion,
        "adminchat": adminChat,
        'userchatlist':userchatlist
    }
});
