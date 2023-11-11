import { createSlice } from '@reduxjs/toolkit'
import { AdminChat } from '../Extrareducer/AdminChat'
import { getachat } from '../Thunks/AdminChat'
const adminchat = createSlice({
  name: 'adminchats',
  initialState: {
    load: false,
    chats: [],
    result: ''
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getachat.pending, AdminChat(0))
      .addCase(getachat.fulfilled, AdminChat(1))
      .addCase(getachat.rejected, AdminChat(-1))
  }
})
export default adminchat.reducer
