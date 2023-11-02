import {getadmin} from './Thunks/Admin'
import {useDispatch, useSelector}from 'react-redux'
export function useAdminStore ()
{
    const Admindispatcher = useDispatch();
    const Admins=useSelector(state=>state.admin)
   return {getadmin,Admindispatcher,Admins}
}
