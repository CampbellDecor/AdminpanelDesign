import {configureStore } from "@reduxjs/toolkit";
import User from "../Slice/UserSlice";
import Admin from "../Slice/AdminSlice";
import ServiceCat from "../Slice/ServiceCategorySlice";
import Service from "../Slice/ServiceSlice";
export const Store = configureStore( {
    reducer: {
        "user": User,
        "admin": Admin,
        "ServiceCat": ServiceCat,
        "service":Service
    }
});