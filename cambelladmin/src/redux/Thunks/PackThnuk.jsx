import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getPack = createAsyncThunk('getget/psck', async () => {
  const response = await axios.get('/api/pack')
  return response.data
})

export const getOnePackByName = createAsyncThunk('get/getOnepackage', async (name) =>
{
  const response = await axios.get('/api/pack/' + name);
  return response.data;
})
