import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const BASE = '/api/payment'
export const getPayment = createAsyncThunk(
  'get/payment',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE}`)
      return response.data
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
