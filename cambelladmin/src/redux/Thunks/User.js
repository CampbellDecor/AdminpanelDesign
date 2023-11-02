import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("gets/user", async () => {
    return axios.get("/api/user").then(response => {
        return response.data;
    });
});


export const getBlockUser = createAsyncThunk("gets/blockuser", async (block) => {
    return axios.get(`/api/user/block/${block}`).then(response => {
        return response.data;
    });
})
