import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import {getUSerOne} from './User'
import {getTodo} from './Todo'
export const getbookings = createAsyncThunk('gets/booking', async () =>
{
    const response = await axios.get("/api/booking")

    return response.data;
})
export const getrecentbookings = createAsyncThunk('gets/booking', async () => {
  const response = await axios.get('/api/booking/recent')
  return response.data
})

export const getOneBookThunk = createAsyncThunk(
  'get/getoneBook',
 async (bookid,{dispatch,rejectWithValue} ) =>
  {
    try
    {
      const response = await axios.get('/api/booking/one/' +bookid);
      const { data } = response;
      await dispatch(getUSerOne(data?.user));
      await dispatch(getTodo(bookid))

      return data;
    }
    catch (error)
    {
      rejectWithValue(error.response.data)
    }
  }
)
