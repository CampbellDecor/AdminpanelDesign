import { useDispatch, useSelector } from 'react-redux'
import { getBlockUser, getUser, getunBlockUser,getsearchUser } from './Thunks/User'

export function useUserStore () {
  const userDispatcher = useDispatch()
  const userData = useSelector(state => state.user)
  return { getBlockUser, getUser, getunBlockUser, userDispatcher, userData,getsearchUser }
}
