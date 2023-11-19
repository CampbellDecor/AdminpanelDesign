import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getAdminChats } from '../Thunks/Adminchats'
const adminadepter = createEntityAdapter({
  selectId: uchatlist => uchatlist.id
})

const AdminChatSlice = createSlice({
  name: 'achats',
  initialState: adminadepter.getInitialState({
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

        adminadepter.upsertMany(state, action.payload)
      })
  }
})

export const {
  selectAll: Alladminchatlist,
  selectIds: chatIds,
  selectById: selectChatUser,
  selectTotal: listcount
} = adminadepter.getSelectors(state => state.uchatlist
);
export default AdminChatSlice.reducer
