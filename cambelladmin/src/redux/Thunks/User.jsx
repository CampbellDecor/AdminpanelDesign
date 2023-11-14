import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUser = createAsyncThunk('gets/user', async (_,{rejectWithValue}) => {
  return axios.get('/api/user').then(response => {
    return response.data
  }).catch(err =>
    rejectWithValue(err.response.data)
    );
})
export const getBookUser = createAsyncThunk('gets/bookuser', async (uid,{rejectWithValue}) => {
  return axios.get('/api/user/bookDetails/'+uid).then(response => {
    return response.data
  }).catch(err =>
  {
    rejectWithValue(err.response.data)
  })
})

export const getBlockUser = createAsyncThunk('gets/blockuser', async (_,{rejectWithValue}) => {
  return axios.get(`/api/user/block/block`).then(response => {
    return response.data
  }).catch(err =>
  {
    rejectWithValue(err.response.data)
  })
})
export const getunBlockUser = createAsyncThunk('gets/unblockuser', async (_,{rejectWithValue}) => {
  return axios.get(`/api/user/block/unblock`).then(response => {
    return response.data
  }).catch(err =>
  {
    rejectWithValue(err.response.data)
  })
})
export const getReligion = createAsyncThunk('gets/unreligionr', async () => {
  return axios.get(`/api/user/block/unblock`).then(response => {
    return response.data
  })
})
export const getUSerOne = createAsyncThunk('gets/oneUser', async (uid) => {
  return axios.get(`/api/user/${uid}`).then(response => {
    return response.data
  })
})

export const getsearchUser = createAsyncThunk(
  'gets/search',
  async searchtext =>
  {


    return axios.get('/api/user/search/'+"pi").then(response => {
      return response.data
    })
  }
)
