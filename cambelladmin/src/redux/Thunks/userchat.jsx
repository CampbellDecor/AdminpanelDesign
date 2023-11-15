import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUserChatList = createAsyncThunk('usechat/getChat', async (_,{rejectWithValue}) => {
  return  axios.get('/api/userchat').then(response =>
  {
    return response.data
  }).catch(error =>
  {
    console.log(error);
    rejectWithValue(error.response.data);
  })


})
export const getuChats = createAsyncThunk("userchat/one", async (uid) =>
{
  const response = await axios.get("/api/userchat/"+uid)
  return response.data;
})
