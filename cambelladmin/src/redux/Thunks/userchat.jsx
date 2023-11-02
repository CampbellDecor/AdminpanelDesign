import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserChatList = createAsyncThunk('usechat/getChat', async () =>
{
    try
    {
        const response1 = await axios.get('/api/adminchat');
        const response = await axios.get('/api/userchat/');
        return [...response1.data(), ...response.data()];
    } catch (error) {
        return error;
    }

})
