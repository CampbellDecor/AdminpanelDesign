import {createSlice} from '@reduxjs/toolkit'
import{getOnePackByName} from '../Thunks/PackThnuk'
import {getPack} from '../Extrareducer/Package'
export const PackSlicer = createSlice({
    name: 'onePack',
    initialState: {
        loading: false,
        onepackage: {},
        result:''
    },
    reducers: {

    },
    extraReducers: builder =>
    {
        builder
            .addCase(getOnePackByName.rejected, getPack(-1))
            .addCase(getOnePackByName.fulfilled, getPack(1))
            .addDefaultCase(getOnePackByName.pending,getPack(0))
    }
})
export default PackSlicer.reducer;
