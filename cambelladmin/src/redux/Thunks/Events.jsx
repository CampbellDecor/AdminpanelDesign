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
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const addEvents = createAsyncThunk(
  'add/Events',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const editEvents = createAsyncThunk(
  'edit/Events',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const blockEvents = createAsyncThunk(
  'block/Events',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const unblockEvents = createAsyncThunk(
  'unblock/Events',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
