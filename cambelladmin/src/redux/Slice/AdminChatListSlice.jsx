import { createSlice } from '@reduxjs/toolkit';
import {AdminChatList} from '../Extrareducer/AdminChat';
import {getadminchatList } from '../Thunks/AdminChat';
const adminchatChat = createSlice({
    name: "adminchats",
    initialState: {
        loading: false,
        chatlist: [],
        result: ""

    },
    reducers: {

    },
    extraReducers: builder =>
    {
        builder
            .addCase(getadminchatList.pending, AdminChatList(0))
            .addCase(getadminchatList.fulfilled, AdminChatList(1))
            .addCase(getadminchatList.rejected, AdminChatList(-1))
    }
});
export default adminchatChat.reducer;
