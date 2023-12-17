import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getAdmins, addAdmins } from '../Thunks/Admins'
const adminadepter = createEntityAdapter({
  selectId: admin => admin.aid
})

const AdminSlice = createSlice({
  name: 'achats',
  initialState: adminadepter.getInitialState({
    loading: false,
    error: ''
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAdmins.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getAdmins.rejected, (state, action) => {
        state.loading = false
        state.error = action.data
      })
      .addCase(getAdmins.fulfilled, (state, action) => {
        state.loading = false
        adminadepter.upsertMany(state, action.payload)
      })
      .addCase(addAdmins.pending, (state, action) => {
        state.loading = true
      })
      .addCase(addAdmins.rejected, (state, action) => {
        state.loading = false
        state.error = action.data
      })
      .addCase(addAdmins.fulfilled, (state, action) => {
        state.loading = false
        adminadepter.addOne(state, action.payload.storeData);
      })
  }
})
export const {
  selectAll: AllAdmins,
  selectById: OneAdmin,
  selectIds: AdminIDs
} = adminadepter.getSelectors(state => state.admin)

export default AdminSlice.reducer
