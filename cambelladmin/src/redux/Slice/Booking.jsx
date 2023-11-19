import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getBooking } from '../Thunks/Booking'
import { useSelector } from 'react-redux'
import { allEvents } from './Events'
import {allPacks } from './Packages'
const bookingadepter = createEntityAdapter({
  selectId: booking => booking.bookid
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
      .addCase(getBooking.pending, (state, action) => {
        console.log(action)
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
        bookingadepter.upsertMany(state, action.payload)
      })
  }
})
export const {
  selectAll: AllBookings,
  selectById: OneBooking,
  selectTotal: bookingcount,
  selectIds: bookingIds,
  selectEntities: bookentries
} = bookingadepter.getSelectors(state => state.booking)

export const UserBookCount = userId => {
  const users = useSelector(AllBookings)
  return users.filter(u => u.user === userId).length
}
export const RecentBooking = () => {
  const Bookings = useSelector(AllBookings)
  const recent = Bookings.filter(
    ele => ele.status === 'pending' || ele.status === 'active'
  )
  return recent.slice(0, 8)
}

export const EventBooking = () => {
  const events = useSelector(allEvents)?.map(ele =>
  {
    const { name, imgURL,eventid } = ele;
    return {name, imgURL, eventid}
  })
  const Bookings = useSelector(AllBookings)
  const EventBook = []
  events.forEach(ele =>
  {
    const regex = new RegExp(ele?.name, 'ig');
    EventBook.push({
      ...ele,
      count: Bookings.filter(ele => regex.test(ele.eventname))?.length
    })
  })
  return EventBook;
}
export const PackageBooking = () => {
  const packs = useSelector(allPacks)?.map(ele => {
    const { name, imgURL, packageID } = ele
    return { name, imgURL,packageID}
  })
  const Bookings = useSelector(AllBookings)
  const packBook = []
  packs.forEach(ele =>
  {
    const regx = new RegExp(ele?.name, 'ig');
    packBook.push({
      ...ele,
      count: Bookings.filter(ele => regx.test(ele.eventname))?.length
    })
  })
  return packBook;
}

export default BookingSlice.reducer
