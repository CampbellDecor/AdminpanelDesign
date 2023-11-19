import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import {getAdminChatsone,sendAdminChat} from '../Thunks/Adminchats'
const UserChatOneadepter = createEntityAdapter({
  selectId: (uchats) => uchats.chatid
})

const UserChatOneSlice = createSlice({
  name: 'userchatall',
  initialState: UserChatOneadepter.getInitialState({
    loading: false,
    error: ''
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAdminChatsone.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getAdminChatsone.rejected, (state, action) => {
        state.loading = false
        state.error = action.data
      })
      .addCase(getAdminChatsone.fulfilled, (state, action) => {
        state.loading = false
        UserChatOneadepter.setAll(state, action.payload);
      })
      .addCase(sendAdminChat.pending, (state, action) => {
        state.loading = true
      })
      .addCase(sendAdminChat.rejected, (state, action) => {
        state.loading = false
        state.error = action.data
      })
      .addCase(sendAdminChat.fulfilled, (state, action) => {
        state.loading = false
        console.log(action.payload);
        UserChatOneadepter.addOne(state, action.payload);
      })
  }
})
export const {
selectAll:allChatOne
} = UserChatOneadepter.getSelectors(state => state.uchats);
export default UserChatOneSlice.reducer;
