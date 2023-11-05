// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import {getReligions } from '../Thunks/Root'
import {ReligionName} from '../Extrareducer/Root'
export const religionnameslier = createSlice( {
    name: "religionname",
    initialState: {
        religions: [],
        loading: false,
        result: ""
    },
    reducers: {

    },
    extraReducers: builder =>
    {
        builder.addCase( getReligions.fulfilled, ReligionName(1))
            .addCase(getReligions.rejected, ReligionName(-1))
            .addDefaultCase(getReligions.pending,ReligionName(0));
    }
} );
export default religionnameslier.reducer;
