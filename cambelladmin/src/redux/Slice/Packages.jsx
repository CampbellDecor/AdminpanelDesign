// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit'
import { getPack } from '../Thunks/PackThnuk'
import { getallPack } from '../Extrareducer/Package'
export const packslier = createSlice({
  name: 'events',
  initialState: {
    packs: [],
    loading: false,
    result: ''
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPack.rejected, getallPack(-1))
      .addCase(getPack.fulfilled, getallPack(1))
      .addCase(getPack.pending, getallPack(0))
  }
})
export default packslier.reducer
