// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit'
import { getuChats } from '../Thunks/userchat'
import { usersChats } from '../Extrareducer/UserChat'
export const userhatslier = createSlice({
  name: 'admin',
  initialState: {
    chats: [],
    uload: false,
    result: ''
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getuChats.rejected, usersChats(-1))
      .addCase(getuChats.fulfilled, usersChats(1))
      .addCase(getuChats.pending, usersChats(0))
  }
})
export default userhatslier.reducer
