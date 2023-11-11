import { getUserChatList,getuChats } from './Thunks/userchat';
import { useDispatch, useSelector } from 'react-redux'
export const useUserChatStore = () =>
{
    const UserChatDispatcher = useDispatch();
    const userChatList = useSelector(state => state.userchatlist);
    const userChatsall = useSelector(state => state.userChats);

    return { getUserChatList, UserChatDispatcher, userChatList,getuChats,userChatsall };
}
