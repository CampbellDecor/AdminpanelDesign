import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const BASE = '/api/cat'

export const getCategory = createAsyncThunk(
  'get/Category',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE}`);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const deleteCategory = createAsyncThunk(
  'delete/Category',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const addCategory = createAsyncThunk(
  'add/Category',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const editCategory = createAsyncThunk(
  'edit/Category',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const blockCategory = createAsyncThunk(
  'block/Category',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const unblockCategory = createAsyncThunk(
  'unblock/Category',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
