import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getCategory } from '../Thunks/ServiceCategory'
const Categoryadepter = createEntityAdapter({
  selectId: (category) => category.cid
})

const CategorySlice = createSlice({
  name: 'category',
  initialState: Categoryadepter.getInitialState({
    loading: false,
    error: ''
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCategory.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.loading = false
        state.error = action.data
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.loading = false
        Categoryadepter.upsertMany(state, action.payload);
      })
  }
})
export default CategorySlice.reducer;
