import {configureStore } from "@reduxjs/toolkit";
import User from "../Slice/UserSlice";
export const Store = configureStore( {
    reducer: {
        "user":User
    }
});