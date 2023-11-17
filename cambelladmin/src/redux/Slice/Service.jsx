import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getServices } from '../Thunks/Service'
const serviceadepter = createEntityAdapter({
  selectId: chats => chats.chatid
})

const ServiceSlice = createSlice({
  name: 'service',
  initialState: serviceadepter.getInitialState({
    loading: false,
    error: ''
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getServices.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getServices.rejected, (state, action) => {
        state.loading = false
        state.error = action.data
      })
      .addCase(getServices.fulfilled, (state, action) => {
        state.loading = false

      })
  }
})
export default ServiceSlice.reducer
