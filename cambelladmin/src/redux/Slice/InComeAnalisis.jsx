import { createSlice } from "@reduxjs/toolkit";
import randomcolor from 'randomcolor'
const color = randomcolor({
  count: 2,
  luminosity: "light",
  hue: '#0b0d75'
})

export const incomeSlice = createSlice({
    name: "IncomeGraph",
    initialState:{
    labels:[],
    datasets: [
      {
        fill: true,
        label: 'profits',
        data:[],
        borderColor:color[0],
      backgroundColor:color[1],
        tension: 0.3
      },
    ],
    },
    reducers: {

    },
    extraReducers: builder =>
    {
        builder.addCase()
    }
})
