import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getEvents } from '../Thunks/Events'
const eventadepter = createEntityAdapter({
  selectId: (events) => events.eventid
})

const EventSlice = createSlice({
  name: 'events',
  initialState: eventadepter.getInitialState({
    loading: false,
    error: ''
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getEvents.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getEvents.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.data;
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.loading = false
        eventadepter.upsertMany(state, action.payload);
      })
  }
})
export const {
  selectAll: allEvents,
  selectById: OneEvent,
  selectEntities: Eventlist,
  selectTotal: eventCount,
  selectIds:eventset
}=eventadepter.getSelectors(state=>state.events)
export default EventSlice.reducer;
