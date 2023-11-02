import User_Reducer from './Slice/UserSlice';
import {getBlockUser,getUser} from './Thunks/User'


export function useUserStore ()
{
    return { getBlockUser, getUser, User_Reducer };
}
