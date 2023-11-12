import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getEvents = createAsyncThunk("get/getevent",
    async () =>
    {
        const response = await axios.get("/api/event");
        return response.data;
   }
)
