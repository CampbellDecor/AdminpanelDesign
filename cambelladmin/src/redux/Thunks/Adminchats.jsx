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
export const deleteAdminChats = createAsyncThunk(
  'delete/AdminChats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const addAdminChats = createAsyncThunk(
  'add/AdminChats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const editAdminChats = createAsyncThunk(
  'edit/AdminChats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const blockAdminChats = createAsyncThunk(
  'block/AdminChats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const unblockAdminChats = createAsyncThunk(
  'unblock/AdminChats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
