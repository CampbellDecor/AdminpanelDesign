// @ts-nocheckgetOneBook
import { createSlice } from '@reduxjs/toolkit'
import { getOneBookThunk } from '../Thunks/Booking'
import { getOneBook } from '../Extrareducer/Booking'
export const OneBookingSlicer = createSlice({
  name: 'oneUser',
  initialState: {
    book: {},
    loading: false,
    result: ''
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getOneBookThunk.fulfilled, getOneBook(1))
      .addCase(getOneBookThunk.rejected, getOneBook(-1))
      .addDefaultCase(getOneBookThunk.pending, getOneBook(0))
  }
})
export default OneBookingSlicer.reducer
