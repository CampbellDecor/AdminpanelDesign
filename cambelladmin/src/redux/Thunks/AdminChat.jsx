import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const getadminchatList = createAsyncThunk(
  'gets/getadminchatList',
  async () => {
    return axios.get('/api/adminchat').then(response => {
      return response.data
    })
  }
)
