import { getEvents } from './Thunks/EventThunk';
import {useSelector,useDispatch} from 'react-redux'

export const useEventStore = () =>
{
    const EventData = useSelector(state => state.events)
    const EventDispatcher = useDispatch();
    return {
getEvents,EventDispatcher,EventData
    }
}
