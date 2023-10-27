// @ts-nocheck
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getadmin = createAsyncThunk( "gets/admin", async () =>
{
    return axios.get( "/api/admin" ).then( response => { return response.data; } );
})
export const adminslier = createSlice( {
    name: "admin",
    initialState: {
        admins: [],
        loading: false,
        result: ""
    },
    reducers: {
        BLOCK: ( state ) =>
        {
            state.admins?.filter( admin => admin.isBlock );
        }
    },
    extraReducers: builder =>
    {
        builder.addCase( getadmin.rejected, ( state, action ) =>
        {
            state.loading = false;
            state.admins=[];
            state.result = action.error;
        }).addCase( getadmin.fulfilled, ( state, action ) =>
        {
            state.loading = false;
            state.admins= action.payload ;
            state.result = "fetched";
        } ).addCase( getadmin.pending, (state,action) =>
        {
            state.loading= true;
            state.admins=[];
            state.result = "loading";
        });
    }
} );
export const { BLOCK} = adminslier.actions;
export default adminslier.reducer;
