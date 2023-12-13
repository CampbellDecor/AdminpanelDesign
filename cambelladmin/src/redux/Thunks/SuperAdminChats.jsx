import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const BASE = '/api/adminchat'

export const getSAdminChats = createAsyncThunk(
  'get/SAdminChats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE}`);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const getOneSAdminChats = createAsyncThunk(
  'get/SAdminChatsone',
  async (aid, { rejectWithValue }) =>
  {
    try {
      const response = await axios.get(`${BASE}/${aid}`)
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const sendSAdminChats = createAsyncThunk(
  'add/SAdminChats',
  async (message, { rejectWithValue }) => {
    try {
      const response = await axios.post(BASE, message);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const editSAdminChats = createAsyncThunk(
  'edit/SAdminChats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const blockSAdminChats = createAsyncThunk(
  'block/SAdminChats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const unblockSAdminChats = createAsyncThunk(
  'unblock/SAdminChats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
