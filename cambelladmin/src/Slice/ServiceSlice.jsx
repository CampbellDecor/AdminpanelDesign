// @ts-nocheck
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getservice = createAsyncThunk( "gets/service", async () =>
{
    return axios.get( "/api/service" ).then( response => { return response.data; } );
})
export const serviceSlier = createSlice( {
    name: "service",
    initialState: {
        services: [],
        loading: false,
        displayData:[],
        result: "",
    },
    reducers: {
        
    },
    extraReducers: builder =>
    {
        builder.addCase( getservice.fulfilled, ( state, action ) =>
        {
            state.loading = false;
            state.services = action.payload;
            state.displayData = action.payload;
            state.result = "fetched";
        } ).addCase( getservice.rejected, ( state, action ) =>
        {
            state.loading = false;
            state.services=[];
            state.result = action.error;
        }).addDefaultCase( getservice.pending, (state,action) =>
        {
            state.loading = true;
            state.services=[];
            state.result = "loading";
        });
    }
} );
export const {  blockfilter} = serviceSlier.actions;
export default serviceSlier.reducer;