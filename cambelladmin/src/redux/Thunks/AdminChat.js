import {
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";
export const getadminchatHints = createAsyncThunk("gets/getadminchatHints", async () => {
    return axios.get("/api/adminchat").then(response => {
        return response.data;
    });
})
export const getadminchatChats = createAsyncThunk("gets/getadminchat", async () => {
    return axios.get("/api/adminchat").then(response => {
        return response.data;
    });
})

export const getadminchats = createAsyncThunk("get/adminchats", async (senderid) =>
{
    return axios.get(`/api/adminchat/:${senderid}`)
    .then(response =>
    {
        return response.data;
    })
})
