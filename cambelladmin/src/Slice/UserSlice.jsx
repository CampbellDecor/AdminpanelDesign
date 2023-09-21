// @ts-nocheck
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getUser = createAsyncThunk( "gets/user", async () =>
{
    return axios.get( "/api/user" ).then( response => { return response.data; } );
})
export const UserSlier = createSlice( {
    name: "user",
    initialState: {
        users: [],
        loading: false,
        displayData:[],
        result: "",
    },
    reducers: {
        
    },
    extraReducers: builder =>
    {
        builder.addCase( getUser.fulfilled, ( state, action ) =>
        {
            state.loading = false;
            state.users = action.payload;
            state.displayData = action.payload;
            state.result = "fetched";
        } ).addCase( getUser.rejected, ( state, action ) =>
        {
            state.loading = false;
            state.users=[];
            state.result = action.error;
        }).addDefaultCase( getUser.pending, (state,action) =>
        {
            state.loading = true;
            state.users=[];
            state.result = "loading";
        });
    }
} );
export const {  blockfilter} = UserSlier.actions;
export default UserSlier.reducer;