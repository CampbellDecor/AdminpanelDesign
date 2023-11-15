import { getUserChatList,getuChats } from './Thunks/userchat';
import { useDispatch, useSelector } from 'react-redux'
export const useUserChatStore = () =>
{
    const CampbellDispatcher = useDispatch()
    const userChatList = useSelector(state => state.userchatlist);
    const userChatsall = useSelector(state => state.userChats);

    return { getUserChatList,  userChatList,getuChats,CampbellDispatcher,
userChatsall };
}
