import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const getachat = createAsyncThunk('gets/getadminchat', async aid => {
  return axios.get('/api/adminchat/' + aid).then(response => {
    return response.data
  })
})

export const getadminchatList = createAsyncThunk(
  'gets/getadminchatList',
  async () => {

    return axios.get('/api/adminchat').then(response =>
    {
      return response.data
    })
  }
)
