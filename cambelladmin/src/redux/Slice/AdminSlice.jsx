// @ts-nocheck
import { createSlice} from "@reduxjs/toolkit";
import { getadmin } from '../Thunks/Admin'
import { getallAdmin} from '../Extrareducer/Admin';
export const adminslier = createSlice( {
    name: "admin",
    initialState: {
        admins: [],
        loading: false,
        result: ""
    },
    reducers: {
    },
    extraReducers: builder =>
    {
        builder.addCase(getadmin.rejected, getallAdmin(-1))
            .addCase(getadmin.fulfilled, getallAdmin(1))
            .addCase(getadmin.pending,getallAdmin(0));
    }
} );
export default adminslier.reducer;
