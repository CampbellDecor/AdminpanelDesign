import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUserChatList = createAsyncThunk('usechat/getChat', async () => {
  const response = await axios.get('http://localhost:5000/api/userchat')
    return response.data

})
