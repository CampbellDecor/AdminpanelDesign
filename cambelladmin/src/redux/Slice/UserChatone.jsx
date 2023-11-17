import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getAdminChats } from '../Thunks/Adminchats'
const UserChatOneadepter = createEntityAdapter({
  selectId: chats => chats.chatid
})

const UserChatOneSlice = createSlice({
  name: 'chatall',
  initialState: UserChatOneadepter.getInitialState({
    loading: false,
    error: ''
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAdminChats.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getAdminChats.rejected, (state, action) => {
        state.loading = false
        state.error = action.data
      })
      .addCase(getAdminChats.fulfilled, (state, action) => {
        state.loading = false

      })
  }
})

export default UserChatOneSlice.reducer;
