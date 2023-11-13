// @ts-nocheckOneUser
import { createSlice } from '@reduxjs/toolkit'
import { getUSerOne,getBookUser } from '../Thunks/User'
import { OneUser,OneBookUser } from '../Extrareducer/User'
export const OneUserSlicer = createSlice({
  name: 'oneUser',
  initialState: {
    user: {},
    loading: false,
    result: ''
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUSerOne.fulfilled, OneUser(1))
      .addCase(getUSerOne.rejected, OneUser(-1))
      .addCase(getBookUser.fulfilled, OneBookUser(1))
      .addCase(getBookUser.rejected, OneBookUser(-1))
      .addCase(getBookUser.pending, OneBookUser(0))
    .addDefaultCase(getUSerOne.pending, OneUser(0))
  }
})
export default OneUserSlicer.reducer
