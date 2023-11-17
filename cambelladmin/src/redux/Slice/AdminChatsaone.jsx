import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getAdminChatsone } from '../Thunks/Adminchats'
const adminoneadepter = createEntityAdapter({
  selectId: chats => chats.chatid
})

const AdminChatoneSlice = createSlice({
  name: 'achatsone',
  initialState: adminoneadepter.getInitialState({
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
        
      })
  }
})

export default AdminChatoneSlice.reducer;
