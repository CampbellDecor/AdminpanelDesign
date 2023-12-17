import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getauth } from '../Thunks/Admins'
 const authadepter = createEntityAdapter({
  selectId: (auth) => auth.id
})

const AuthSlice = createSlice({
  name: 'auth',
  initialState: authadepter.getInitialState({
    loading: false,
    error: ''
  }),
  reducers: {
    addNew: (state, action) =>
    {
      authadepter.addOne(action.payload);
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getauth.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getauth.rejected, (state, action) => {
        state.loading = false
        state.error = action.data
      })
      .addCase(getauth.fulfilled, (state, action) => {
        state.loading = false
        authadepter.upsertMany(state, action.payload)
      })

  }
})
export const {
  selectAll: AllAuth,
  selectById: OneAuth,
  selectIds: AuthIDs
} = authadepter.getSelectors(state => state.auth)
export const  {addNew }= AuthSlice.actions;
export default AuthSlice.reducer
