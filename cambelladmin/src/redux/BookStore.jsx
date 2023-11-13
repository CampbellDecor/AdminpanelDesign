import {getbookings,getOneBookThunk,getrecentbookings} from './Thunks/Booking'
import {getTodo} from './Thunks/Todo'
import { useDispatch,useSelector } from 'react-redux'


export const useBookingStore = () =>
{
    const OneBookingData = useSelector(state => state.OneBook);
    const OneBookDispatcher = useDispatch()
    const CampbellDispatcher = useDispatch();
const TodoListData = useSelector(state => state.todo)
const BookData = useSelector(state => state.Book)

    return {
        getbookings,OneBookDispatcher,OneBookingData,getOneBookThunk,getTodo,TodoListData,getrecentbookings,BookData,CampbellDispatcher

    }
}
