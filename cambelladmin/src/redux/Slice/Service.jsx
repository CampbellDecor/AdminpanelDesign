import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getServices } from '../Thunks/Service'
const serviceadepter = createEntityAdapter({
  selectId: service => service.servicecode

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
        serviceadepter.upsertMany(state, action.payload);

      })
  }
})
export const {
  selectAll: allService,
  selectById: oneService,
  selectEntities: serviceEntries,
  selectIds: serviceset,
  selectTotal: serviceCount
} = serviceadepter.getSelectors(state => state.service)

export default ServiceSlice.reducer
