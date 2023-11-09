import {
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";
export const getservice = createAsyncThunk("gets/service", async () => {
    return axios.get("/api/service").then(response => {
        return response.data;
    });
})
