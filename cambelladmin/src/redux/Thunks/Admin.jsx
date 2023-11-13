import {
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";
export const getadmin = createAsyncThunk("gets/admin", async () =>
{
    return axios.get("/api/admin").then(response => {
        return response.data;
    }).catch(error =>
    {
        return error;
    });
})

export const addadmin = createAsyncThunk('add/admin', async (data) => {
  const response = await axios.post('/api/admin/add', data);
  return response.data;
})
export const updateadmin = createAsyncThunk('add/admin', async data => {
  const response = await axios.post('/api/admin/add', data)
  return response.data
})

export const OneUser = createAsyncThunk('get/userone', async (uid) =>
{
  const response = await axios.get("/api/user/" + uid)
  return response.data
})
