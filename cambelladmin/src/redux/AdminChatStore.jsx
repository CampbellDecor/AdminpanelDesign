import { getadminchatList,getachat } from './Thunks/AdminChat'
import { useSelector, useDispatch } from 'react-redux'
export function useAdminChatStore () {
  const adminchatlist = useSelector(state => state.adminchatlist)
  const admichats = useSelector(state => state.adminchats);
  const adminChatDispatcher = useDispatch()
  return {
    adminchatlist,
    adminChatDispatcher,
    getadminchatList,
    getachat,
    admichats
  }
}
