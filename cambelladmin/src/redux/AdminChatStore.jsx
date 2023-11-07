import { getadminchatList } from './Thunks/AdminChat'
import { useSelector, useDispatch } from 'react-redux'
export function useAdminChatStore () {
  const adminchatlist = useSelector(state => state.adminchatlist)
  const adminChatDispatcher = useDispatch()
  return {
    adminchatlist,
    adminChatDispatcher,
    getadminchatList
  }
}
