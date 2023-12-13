import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getEvents,addEvents,deleteEvents } from '../Thunks/Events'
import { useSelector } from 'react-redux';
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
      }).addCase(addEvents.pending, (state, action) => {
        state.loading = true
      })
      .addCase(addEvents.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.data;
      })
      .addCase(addEvents.fulfilled, (state, action) => {
        state.loading = false
        eventadepter.addOne(state,action.payload);
      }).addCase(deleteEvents.pending, (state, action) => {
        state.loading = true
      })
      .addCase(deleteEvents.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.data;
      })
      .addCase(deleteEvents.fulfilled, (state, action) => {
        state.loading = false
        console.log(action.payload);
        eventadepter.removeOne(state,action.payload);
      })
  }
})
export const {
  selectAll: allEvents,
  selectById: OneEvent,
  selectEntities: Eventlist,
  selectTotal: eventCount,
  selectIds: eventset
} = eventadepter.getSelectors(state => state.events);


export const EventBySearchName = (name) =>
{
  const Events = useSelector(allEvents);
  return Events.find(ele => ele.name === name);
}
export default EventSlice.reducer;
