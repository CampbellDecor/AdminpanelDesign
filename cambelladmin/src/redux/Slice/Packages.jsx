import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getPackages } from '../Thunks/Packages'
const packageadepter = createEntityAdapter({
  selectId: (packs) => packs.packageID
})

const PackageSlice = createSlice({
  name: 'package',
  initialState: packageadepter.getInitialState({
    loading: false,
    error: ''
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPackages.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getPackages.rejected, (state, action) => {
        state.loading = false
        state.error = action.data
      })
      .addCase(getPackages.fulfilled, (state, action) => {
        state.loading = false
        packageadepter.upsertMany(state, action.payload);
      })
  }
})
export default PackageSlice.reducer;
