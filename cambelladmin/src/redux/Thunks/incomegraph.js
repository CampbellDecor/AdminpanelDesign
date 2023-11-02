import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const getIncomeAnalysis = createAsyncThunk('get/IncomeAnalysis', async (postion,type='YEAR') =>
{
    switch (type)
    {
        case 'YEAR': {
            try {
 const getData = await axios.get('/api/payment/histroy/year/' + postion);
 return getData.data();
            } catch (error) {
                return error;
            }

        }
             case 'DAY': {
                 try {
                     const getData = await axios.get('/api/payment/histroy/date/' + postion);
                     return getData.data();
                 } catch (error) {
                     return error;
                 }

        }
             case 'MONTH': {
                 try {
                     const getData = await axios.get('/api/payment/histroy/month/' + postion);
                     return getData.data();
                 } catch (error) {
                     return error;
                 }

             }
        default: {
            try {
                const getData = await axios.get('/api/payment/histroy/year/' +new Date().getFullYear());
                return getData.data();
            } catch (error) {
                return error;
            }

        }
    }
})
