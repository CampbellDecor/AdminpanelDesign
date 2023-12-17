import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const BASE = '/api/event'
export const getEvents = createAsyncThunk(
  'get/Events',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE}`)
return response.data

    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const deleteEvents = createAsyncThunk(
  'delete/Events',
  async (eventid, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${BASE}/${eventid}`);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const addEvents = createAsyncThunk(
  'add/Events',
  async (event, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE}`, event);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const editEvents = createAsyncThunk(
  'edit/Events',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.put(BASE, data);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
