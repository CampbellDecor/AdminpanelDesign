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
export const allTaskList = createAsyncThunk(
  'edit/Booking',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE}/todoTask/all/todoList`);
      return response.data
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const getTasks = createAsyncThunk(
  'get/Tasks',
  async (taskid, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE}/todoTask/${taskid}`);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const addNewTask = createAsyncThunk(
  'add/newTask',
  async (task, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE}/todoTask`, task);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
