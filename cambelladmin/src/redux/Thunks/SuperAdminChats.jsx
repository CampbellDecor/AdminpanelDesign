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
export const deleteSAdminChats = createAsyncThunk(
  'delete/SAdminChats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const addSAdminChats = createAsyncThunk(
  'add/SAdminChats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
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
