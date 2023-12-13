import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getOneSAdminChats, sendSAdminChats } from '../Thunks/SuperAdminChats'
const adminoneadepter = createEntityAdapter({
  selectId: achats => achats.chatid
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
      .addCase(getOneSAdminChats.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getOneSAdminChats.rejected, (state, action) => {
        state.loading = false
        state.error = action.data
      })
      .addCase(getOneSAdminChats.fulfilled, (state, action) => {
        state.loading = false
        adminoneadepter.setAll(state, action.payload)
      })
      .addCase(sendSAdminChats.pending, (state, action) => {
        state.loading = true
      })
      .addCase(sendSAdminChats.rejected, (state, action) => {
        state.loading = false
        state.error = action.data
      })
      .addCase(sendSAdminChats.fulfilled, (state, action) => {
        state.loading = false
        adminoneadepter.addOne(state, action.payload)
      })
  }
})
export const {
  selectId: chatById,
  selectAll: allChats
} = adminoneadepter.getSelectors(state => state.achats)
export default AdminChatoneSlice.reducer
