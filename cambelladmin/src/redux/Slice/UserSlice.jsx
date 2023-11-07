// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit';
import { getUser, getBlockUser,getunBlockUser,getsearchUser } from '../Thunks/User';
import { GetAll, GetBlock, GetunBlock,SearchUsers} from '../Extrareducer/User';
export const UserSlier = createSlice({
    name: "user",
    initialState: {
        users: [],
        loading: false,
        result: "",
        block: false,
        unblock: false,
    },
    reducers: {

    },
    extraReducers: builder =>
    {
        builder
            .addCase(getUser.fulfilled, GetAll(1))
            .addCase(getUser.rejected, GetAll(-1))
            .addCase(getBlockUser.fulfilled, GetBlock(1))
            .addCase(getBlockUser.rejected, GetBlock(-1))
            .addCase(getBlockUser.pending, GetBlock(0))
            .addCase(getunBlockUser.fulfilled, GetunBlock(1))
            .addCase(getunBlockUser.rejected, GetunBlock(-1))
            .addCase(getunBlockUser.pending, GetunBlock(0))
             .addCase(getsearchUser.fulfilled, SearchUsers(1))
            .addCase(getsearchUser.rejected, SearchUsers(-1))
            .addCase(getsearchUser.pending, SearchUsers(0))
            .addDefaultCase(getUser.pending, GetAll(0));
    }
});

export default UserSlier.reducer;
