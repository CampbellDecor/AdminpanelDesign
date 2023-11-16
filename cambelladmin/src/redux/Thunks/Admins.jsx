import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const BASE="/api/admin"
export const getAdmins = createAsyncThunk("get/admins", async (_,{rejectWithValue}) =>
{
    try {
       const response = await axios.get(`${BASE}`)
return response.data

    } catch (error) {
        rejectWithValue(error.response.data);
    }
})
export const deleteAdmins = createAsyncThunk("delete/admins", async (_,{rejectWithValue}) =>
{
    try {
        const response = await axios.get();
    } catch (error) {
        rejectWithValue(error.response.data);
    }
})
export const addAdmins = createAsyncThunk("add/admins", async (_,{rejectWithValue}) =>
{
    try {
        const response = await axios.get();
    } catch (error) {
        rejectWithValue(error.response.data);
    }
})
export const editAdmins = createAsyncThunk("edit/admins", async (_,{rejectWithValue}) =>
{
    try {
        const response = await axios.get();
    } catch (error) {
        rejectWithValue(error.response.data);
    }
})
export const blockAdmins = createAsyncThunk("block/admins", async (_,{rejectWithValue}) =>
{
    try {
        const response = await axios.get();
    } catch (error) {
        rejectWithValue(error.response.data);
    }
})
export const unblockAdmins = createAsyncThunk("unblock/admins", async (_,{rejectWithValue}) =>
{
    try {
        const response = await axios.get();
    } catch (error) {
        rejectWithValue(error.response.data);
    }
})
