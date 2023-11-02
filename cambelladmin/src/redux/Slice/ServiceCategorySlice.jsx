// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { getServiceCat } from '../Thunks/ServiceCategory';
import { ServiceCatAll} from '../Extrareducer/ServiceCategory';
export const ServiceCatslier = createSlice( {
    name: "ServiceCat",
    initialState: {
        ServiceCats: [],
        loading: false,
        result: ""
    },
    reducers: {

    },
    extraReducers: builder =>
    {
        builder.addCase(getServiceCat.fulfilled, ServiceCatAll(1))
            .addCase(getServiceCat.rejected, ServiceCatAll(-1))
            .addCase(getServiceCat.pending,ServiceCatAll(0));
    }
} );
export default ServiceCatslier.reducer;
