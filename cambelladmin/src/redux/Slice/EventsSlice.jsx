// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit'
import { getEvents } from '../Thunks/EventThunk'
import { GetAllEvents } from '../Extrareducer/Events'
export const eventslier = createSlice({
  name: 'events',
  initialState: {
    events: [],
    loading: false,
    result: ''
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getEvents.rejected,  GetAllEvents (-1))
      .addCase(getEvents.fulfilled,  GetAllEvents (1))
      .addCase(getEvents.pending,  GetAllEvents (0))
  }
})
export default eventslier.reducer
