import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserChatList = createAsyncThunk('usechat/getChat', async () =>
{
    try
    {
        const response = await axios.get('/api/userchat/');
        return response.data;
    } catch (error) {
        return error;
    }

})
