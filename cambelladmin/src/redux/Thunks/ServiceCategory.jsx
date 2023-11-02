import {
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";
export const getServiceCat = createAsyncThunk("gets/ServiceCat", async () => {
    return axios.get("/api/cat").then(response => {
        return response.data;
    }).catch(error =>
    {
        return error;
    })
})
