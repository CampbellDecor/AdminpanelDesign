import { createSlice } from "@reduxjs/toolkit";

export const UserSlier = createSlice( {
    name: "user",
    initialState:{count:10},
    reducers: {
        filter: () =>
        {
            
        }
    }

} );
export const { filter} = UserSlier.actions;
export default UserSlier.reducer;