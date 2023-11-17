import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getBooking } from '../Thunks/Booking'
const bookingadepter = createEntityAdapter({
  selectId:(booking)=>booking.bookid
})

const BookingSlice = createSlice({
  name: 'booking',
  initialState: bookingadepter.getInitialState({
    loading: false,
    error: ''
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getBooking.pending, (state, action) =>
      {
        console.log(action);
        state.loading = true
      })
      .addCase(getBooking.rejected, (state, action) => {
        state.loading = false
        console.log(action)

        state.error = action.data
      })
      .addCase(getBooking.fulfilled, (state, action) => {
        state.loading = false
        console.log(action)
       bookingadepter.upsertMany(state,action.payload)
      })
  }
})
export default BookingSlice.reducer;
