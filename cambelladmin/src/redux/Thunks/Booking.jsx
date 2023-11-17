import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const BASE = '/api/booking'

export const getBooking = createAsyncThunk(
  'get/Booking',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE}/all`)
      return response.data
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const deleteBooking = createAsyncThunk(
  'delete/Booking',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const addBooking = createAsyncThunk(
  'add/Booking',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const editBooking = createAsyncThunk(
  'edit/Booking',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const blockBooking = createAsyncThunk(
  'block/Booking',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const unblockBooking = createAsyncThunk(
  'unblock/Booking',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
