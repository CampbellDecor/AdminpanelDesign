import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getAdminChats } from '../Thunks/Adminchats'
const adminchatadepter = createEntityAdapter({
  selectId: chats => chats.chatid
})

const AdminChatoneSlice = createSlice({
  name: 'achats',
  initialState: adminchatadepter.getInitialState({
    loading: 'true',
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
        adminchatadepter.upsertMany(state, action.payload)
      })
  }
})

export default AdminChatoneSlice.reducer;
