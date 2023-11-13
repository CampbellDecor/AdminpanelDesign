import { createSlice } from '@reduxjs/toolkit';
import React from 'react'
import{getTodo}from '../Thunks/Todo'
import{getTodoReducer}from '../Extrareducer/Booking'

export const TodoSlicer = createSlice({
    name: "todo",
    initialState: {
        loading: false,
        todo: [],
        result:''
    },
    reducers: {

    },
    extraReducers: builder =>
    {
        builder
            .addCase(getTodo.fulfilled, getTodoReducer(1))
            .addCase(getTodo.rejected, getTodoReducer(-1)).addDefaultCase(getTodo.pending,getTodoReducer(0))

    }
})
export default TodoSlicer.reducer;
