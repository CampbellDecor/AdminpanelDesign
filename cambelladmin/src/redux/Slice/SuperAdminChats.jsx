import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getSAdminChats} from '../Thunks/SuperAdminChats'
const SadminChatadepter = createEntityAdapter({
  selectId: (achatlis) => achatlis.aid
})

const SuperAdminChatSlice = createSlice({
  name: 'achats',
  initialState: SadminChatadepter.getInitialState({
    loading: 'true',
    error: ''
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getSAdminChats.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getSAdminChats.rejected, (state, action) => {
        state.loading = false
        state.error = action.data
      })
      .addCase(getSAdminChats.fulfilled, (state, action) => {
        state.loading = false
        SadminChatadepter.upsertMany(state, action.payload);
      })
  }
})
export default SuperAdminChatSlice.reducer;
