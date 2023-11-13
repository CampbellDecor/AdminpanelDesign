// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit'
import { getrecentbookings } from '../Thunks/Booking'
import { getBookingrecentReducer } from '../Extrareducer/Booking'
export const BookingSlicer = createSlice({
  name: 'bookings',
  initialState: {
    bookings: [],
    loading: false,
    result: ''
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getrecentbookings.fulfilled,getBookingrecentReducer(1))
      .addCase(getrecentbookings.rejected, getBookingrecentReducer(-1))
      .addCase(getrecentbookings.pending, getBookingrecentReducer(0))
  }
})
export default BookingSlicer.reducer
