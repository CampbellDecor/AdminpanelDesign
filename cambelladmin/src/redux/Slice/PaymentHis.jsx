import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getPayment } from '../Thunks/Payment'
import { useSelector } from 'react-redux';
const paymentHisadepter = createEntityAdapter({
  selectId: (payhis) => payhis.payid
})

const PaymentHisSlice = createSlice({
  name: 'paymentHis',
  initialState: paymentHisadepter.getInitialState({
    loading: false,
    error: ''
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPayment.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getPayment.rejected, (state, action) => {
        state.loading = false
        state.error = action.data
      })
      .addCase(getPayment.fulfilled, (state, action) => {
        state.loading = false
       paymentHisadepter.upsertMany(state, action.payload)
      })
  }
})
export const {
  selectAll: PaymentAll,
  selectById:onePayment,
  selectIds: payIds
} = paymentHisadepter.getSelectors(state => state.payhis)

export const Totalpay = () =>
{
  const pay = useSelector(PaymentAll);
  const total = pay.reduce((Total, ele) =>{
    const { type, price } = ele;
    return type === 'income' ?( Total +price) :(Total-price)
  }, 0)
  return total;
}
export const PayHistorYByYear=(year)=>{
  const PayHis = useSelector(PaymentAll);
  const month = ['Jan', 'Feb', 'Mar','Api', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const yearfil = PayHis.filter(ele => new Date(ele.date).getFullYear() == year);

  const total = [];
  for (let index = 0; index < 12; index++) {
    const sub = yearfil.filter(ele => new Date(ele.date).getMonth() === index)
      .reduce((tot, ele) => tot + ele.price, 0);
    total.push(sub)
  }
  const rsult=[month,total]
  return rsult;

}
export default PaymentHisSlice.reducer
