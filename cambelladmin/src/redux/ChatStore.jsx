import { getUserChatList } from './Thunks/userchat';
import { useDispatch, useSelector } from 'react-redux'
export const useUserChatStore = () =>
{
    const UserChatDispatcher = useDispatch();
    const userChatList = useSelector(state => state.userchatlist);

    return {getUserChatList,UserChatDispatcher,userChatList}
}
