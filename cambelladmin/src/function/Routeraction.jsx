import { useBookingStore } from '../redux/BookStore'
import {useUserStore } from '../redux/UserStore'
import axios from 'axios'
export const OneBookingaction = async ({ params }) =>
{
    // const { getbookings, OneBookDispatcher } = useBookingStore();
    // await OneBookDispatcher(getbookings(params.bookcode));
}
export const OneUserAction = async ({ params}) =>
{
    // const user = await axios.get("/api/user/" + params.uid);
    // console.log(user.data);
}
