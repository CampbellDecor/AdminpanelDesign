// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit'
import { getservice } from '../Thunks/Service'
import { getServices } from '../Extrareducer/Service'
export const serviceSlier = createSlice({
  name: 'service',
  initialState: {
    services: [],
    loading: false,
    result: ''
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getservice.fulfilled, getServices(1))
      .addCase(getservice.rejected, getServices(-1))
      .addDefaultCase(getservice.pending, getServices(0))
  }
})
export default serviceSlier.reducer
