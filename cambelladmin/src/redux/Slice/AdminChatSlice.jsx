import { createSlice } from '@reduxjs/toolkit';
import { AdminChathint, AdminChat,AdminOneChat} from '../Extrareducer/AdminChat';
import { getadminchatHints, getadminchatChats,getadminchats } from '../Thunks/AdminChat';
const adminchatChat = createSlice({
    name: "adminchats",
    initialState: {
        loading: false,
        chats: [],
        result: ""

    },
    reducers: {

    },
    extraReducers: builder =>
    {
        builder
            .addCase(getadminchatHints.pending, AdminChathint(0))
            .addCase(getadminchatHints.fulfilled, AdminChathint(1))
            .addCase(getadminchatHints.rejected, AdminChathint(-1))
            .addCase(getadminchatChats.pending, AdminChat(0))
            .addCase(getadminchatChats.fulfilled, AdminChat(1))
            .addCase(getadminchatChats.rejected, AdminChat(-1))
            .addCase(getadminchats.pending, AdminOneChat(0))
            .addCase(getadminchats.fulfilled,AdminOneChat(1))
            .addCase(getadminchats.rejected,AdminOneChat(-1));
    }
});
export default adminchatChat.reducer;
