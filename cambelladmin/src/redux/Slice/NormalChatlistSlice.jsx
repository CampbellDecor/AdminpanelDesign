import { createSlice } from "@reduxjs/toolkit";
import { getUserChatList } from '../Thunks/userchat';
import {usersChatList } from '../Extrareducer/UserChat';
export const userListChatSlice = createSlice(
    {
        name: 'userchat',
        initialState: {
            loading: false,
            chatslist: [],
            result:''
        },
        reducers: {

        },
        extraReducers: builder =>
        {
            builder
                .addCase(getUserChatList.pending, usersChatList(0))
                .addCase(getUserChatList.fulfilled, usersChatList(1))
                .addCase(getUserChatList.rejected, usersChatList(-1));

        }
    }
)

export default userListChatSlice.reducer;
