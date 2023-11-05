import {
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("gets/user", async () => {
    return axios.get("/api/user").then(response => {
        return response.data;
    });
});


export const getBlockUser = createAsyncThunk("gets/blockuser", async () => {
    return axios.get(`/api/user/block/block`).then(response => {
        return response.data;
    });
})
export const getunBlockUser = createAsyncThunk('gets/unblockuser', async () => {
  return axios.get(`/api/user/block/unblock`).then(response => {
    return response.data
  })
})
export const getReligion = createAsyncThunk('gets/unreligionr', async () => {
  return axios.get(`/api/user/block/unblock`).then(response => {
    return response.data
  })
})