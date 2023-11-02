// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit'
import {getUser,getBlockUser} from '../Thunks/User'
export const UserSlier = createSlice( {
    name: "user",
    initialState: {
        users: [],
        loading: false,
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
            state.result = "fetched";
        } ).addCase( getUser.rejected, ( state, action ) =>
        {
            state.loading = false;
            state.users=[];
            state.result = action.error;
        } )
        .addCase( getBlockUser.pending, ( state, action ) =>
            {
                state.loading = true;
                state.users = [];
                state.result = "loading";
            }
        )
        .addCase( getBlockUser.fulfilled, ( state, action ) =>
        {
            state.loading = false;
            state.users =action.payload;
            state.result = "fetched";
        }
        )
        .addCase( getBlockUser.rejected, ( state, action ) =>
        {
            state.loading = false;
            state.users =[];
            state.result =action.error;
        }
        )
        .addDefaultCase( getUser.pending, ( state, action ) =>
        {
            state.loading = true;
            state.users=[];
            state.result = "loading";
        });
    }
} );

export default UserSlier.reducer;
