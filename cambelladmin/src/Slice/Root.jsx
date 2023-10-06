// @ts-nocheck
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getreligions = createAsyncThunk( "gets/religion", async () =>
{
    return axios.get( "/api/root/religion/names" ).then( response => { return response.data; } );
})
export const religionnameslier = createSlice( {
    name: "religionname",
    initialState: {
        religionnames: [],
        loading: false,
        result: ""
    },
    reducers: {
      
    },
    extraReducers: builder =>
    {
        builder.addCase( getreligions.fulfilled, ( state, action ) =>
        {
            state.loading = false;
            state.religionnames= action.payload ;
            state.result = "fetched";
        } ).addCase( getreligions.rejected, ( state, action ) =>
        {
            state.loading = false;
            state.religionnames=[];
            state.result = action.error;
        }).addDefaultCase( getreligions.pending, (state,action) =>
        {
            state.loading = true;
            state.religionnames=[];
            state.result = "....";
        });
    }
} );
export default religionnameslier.reducer;