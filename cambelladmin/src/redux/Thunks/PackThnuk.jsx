import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getPack = createAsyncThunk('getget/psck', async () => {
  const response = await axios.get('/api/pack')
  return response.data
})
