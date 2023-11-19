import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const BASE = '/api/userchat'
export const getAdminChats = createAsyncThunk(
  'get/AdminChats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE}`)
return response.data

    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)

export const getAdminChatsone = createAsyncThunk(
  'get/AdminChatsone',
  async (userid, { rejectWithValue }) =>
  {
    console.log('user',userid)
    try {
      const response = await axios.get(`${BASE}/${userid}`)
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const sendAdminChat = createAsyncThunk(
  'send/AdminChats',
  async (Message, { rejectWithValue }) => {
    try {
      const response = await axios.post(BASE, Message);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
