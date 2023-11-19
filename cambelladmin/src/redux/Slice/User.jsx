import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import {getUsers} from '../Thunks/User'
const useradepter = createEntityAdapter({
  selectId: (user) => user.uid
})

const UserSlice = createSlice({
  name: 'user',
  initialState: useradepter.getInitialState({
    loading: false,
    error: ''
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.data
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false
        useradepter.upsertMany(state, action.payload);
      })
  }
})
export const {
  selectAll: AllUser,
  selectById: OneUser,
  selectIds: UserIds,
  selectTotal: userCount
} = useradepter.getSelectors(state => state.user);
export default UserSlice.reducer;
