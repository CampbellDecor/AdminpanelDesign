// @ts-nocheck
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getServiceCat = createAsyncThunk( "gets/ServiceCat", async () =>
{
    return axios.get( "/api/cat" ).then( response => { return response.data; } );
})
export const ServiceCatslier = createSlice( {
    name: "ServiceCat",
    initialState: {
        ServiceCats: [],
        loading: false,
        result: ""
    },
    reducers: {
       
    },
    extraReducers: builder =>
    {
        builder.addCase( getServiceCat.fulfilled, ( state, action ) =>
        {
            state.loading = false;
            state.ServiceCats= action.payload ;
            state.result = "fetched";
        } ).addCase( getServiceCat.rejected, ( state, action ) =>
        {
            state.loading = false;
            state.ServiceCats=[];
            state.result = action.error;
        }).addDefaultCase( getServiceCat.pending, (state,action) =>
        {
            state.loading = true;
            state.ServiceCats=[];
            state.result = "....";
        });
    }
} );
export const { BLOCK} = ServiceCatslier.actions;
export default ServiceCatslier.reducer;