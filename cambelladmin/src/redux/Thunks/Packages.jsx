import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const BASE = '/api/pack'
export const getPackages = createAsyncThunk(
  'get/Packages',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE}`)
return response.data

    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const deletePackages = createAsyncThunk(
  'delete/Packages',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const addPackages = createAsyncThunk(
  'add/Packages',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const editPackages = createAsyncThunk(
  'edit/Packages',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const blockPackages = createAsyncThunk(
  'block/Packages',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const unblockPackages = createAsyncThunk(
  'unblock/Packages',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
