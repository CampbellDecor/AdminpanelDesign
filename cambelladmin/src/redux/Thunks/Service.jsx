import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const BASE='/api/userchat'
export const getServices = createAsyncThunk(
  'get/Services',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE}`);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const deleteServices = createAsyncThunk(
  'delete/Services',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const addServices = createAsyncThunk(
  'add/Services',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const editServices = createAsyncThunk(
  'edit/Services',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const blockServices = createAsyncThunk(
  'block/Services',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const unblockServices = createAsyncThunk(
  'unblock/Services',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
