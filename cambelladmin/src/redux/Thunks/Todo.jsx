import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getTodo = createAsyncThunk('gets/todo', async (bookid) =>
{
  return axios.get('/api/booking/todoTask/'+bookid).then(response => {
    return response.data
  }).catch(console.error)
})
