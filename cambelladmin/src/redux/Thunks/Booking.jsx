import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const getbookings = createAsyncThunk('gets/booking', async () =>
{
    const response = await axios.get("/api/booking/all")

    return response.data;
})
