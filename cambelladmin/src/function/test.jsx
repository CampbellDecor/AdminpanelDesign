
import React, { useEffect } from 'react'
import {useUserChatStore} from '../redux/ChatStore'
import { UseSelector, } from 'react-redux/es/hooks/useSelector';
export default function Test ()
{
  const { userChatList, UserChatDispatcher, getUserChatList } = useUserChatStore();
  const {result,chatlist } = userChatList;
  useEffect(() =>
  {
    UserChatDispatcher(getUserChatList());
  },[])
  return (
    <div>
      <ul>
        {result === "fetched" && chatlist.map((item, idex) =>
        {

        })}
      </ul>
  </div>
)
}
