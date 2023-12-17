import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getBooking } from '../Thunks/Booking'
import { useSelector } from 'react-redux'
import { allEvents } from './Events'
import { allPacks } from './Packages'
import { UserIds, AllUser } from './User'
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
        state.loading = true
      })
      .addCase(getBooking.rejected, (state, action) => {
        state.loading = false
        state.error = action.data
      })
      .addCase(getBooking.fulfilled, (state, action) => {
        state.loading = false
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
  const events = useSelector(allEvents)?.map(ele => {
    const { name, imgURL, eventid } = ele
    return { name, imgURL, eventid }
  })
  const Bookings = useSelector(AllBookings)
  const EventBook = []
  events.forEach(ele => {
    const regex = new RegExp(ele?.name, 'ig')
    EventBook.push({
      ...ele,
      count: Bookings.filter(ele => regex.test(ele.eventname))?.length
    })
  })
  return EventBook
}
export const PackageBooking = () => {
  const packs = useSelector(allPacks)?.map(ele => {
    const { name, imgURL, packageID } = ele
    return { name, imgURL, packageID }
  })
  const Bookings = useSelector(AllBookings)
  const packBook = []
  packs.forEach(ele => {
    const regx = new RegExp(ele?.name, 'ig')
    packBook.push({
      ...ele,
      count: Bookings.filter(ele => regx.test(ele.eventname))?.length
    })
  })
  return packBook
}

export const AlluserBooking = () => {
  const bookings = useSelector(AllBookings)
  const users = useSelector(UserIds)
  const usernames = useSelector(AllUser)
  const Bookingtypes = [[], [], [], [], []]
  const status = ['active', 'pending', 'cancelled', 'expired']
  users.forEach(ele => {
    const userbook = bookings.filter(book => book.user === ele)
    Bookingtypes[0].push(usernames.find(eler => eler.uid === ele).username)
    status.forEach((eles, index) => {
      Bookingtypes[index + 1].push(
        userbook.filter(ele => ele.status === eles).length
      )
    })
  })
  return Bookingtypes
}
export const AllDateBooking = (dates = new Date()) => {
  const bookings = useSelector(AllBookings)
  const Bookingtypes = [[], [], [], [], []]
  const status = ['active', 'pending', 'cancelled', 'expired']
  for (let index = 1; index <= 31; index++) {
    const date = `${dates.getMonth() + 1}/${index}/${new Date().getFullYear()}`
    Bookingtypes[0].push(index)
    const monthbook = bookings.filter(book => book.eventDate === date)
    status.forEach((eles, index) => {
      Bookingtypes[index + 1].push(
        monthbook.filter(ele => ele.status === eles).length
      )
    })
  }
  return Bookingtypes
}
export const SatusBookingAnaysis = () =>
{
const status = ['active', 'pending', 'cancelled', 'expired']
const bookings = useSelector(AllBookings)
  const Bookingtypes = [[], []];
  Bookingtypes[0] = status;
  status.forEach((ele,index) =>
  {
    Bookingtypes[1].push(bookings.filter(b=>b.status===ele).length)
  })
  return Bookingtypes;
}
export default BookingSlice.reducer
