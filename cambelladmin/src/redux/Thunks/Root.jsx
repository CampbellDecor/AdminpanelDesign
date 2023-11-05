import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getReligions = createAsyncThunk('gets/religion', async () => {
  return axios.get('/api/root/religionNames').then(response => {
    return response.data
  })
})
