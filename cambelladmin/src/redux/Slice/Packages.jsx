import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getPackages,addPackages } from '../Thunks/Packages'
import { useSelector } from 'react-redux';
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
      }).addCase(addPackages.pending, (state, action) => {
        state.loading = true
      })
      .addCase(addPackages.rejected, (state, action) => {
        state.loading = false
        state.error = action.data
      })
      .addCase(addPackages.fulfilled, (state, action) => {
        state.loading = false
        console.log(action.payload);
        packageadepter.addOne(state,action.payload);
      })
  }
})
export const {
  selectAll: allPacks,
  selectById: onePack,
  selectEntities: packentries,
  selectIds: packset,
  selectTotal:packcount,
} = packageadepter.getSelectors(state => state.packs)
export const SearchpackByName = (search) =>
{
  const regx = new RegExp(search, 'ig');
  const packs = useSelector(allPacks);
 return packs?.find(pac => regx.test(pac.packageName));
}
export const PackageRatings = () =>
{
  const Packages = useSelector(allPacks);
  const Data = [[], []];
  Packages.forEach(ele =>
  {
    Data[0].push(ele.packageName);
    Data[1].push((ele?.avg_rating/ele?.rating_count))
  })
  return Data;
}

export default PackageSlice.reducer;
