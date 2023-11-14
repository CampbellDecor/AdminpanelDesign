import { useDispatch, useSelector } from 'react-redux'
import {
  getBlockUser,
  getUser,
  getunBlockUser,
  getsearchUser,
  getUSerOne,getBookUser
} from './Thunks/User'

export function useUserStore () {
  const userDispatcher = useDispatch()
  const userData = useSelector(state => state.user)
  const OneUserdata = useSelector(state => state.userOne)
  const CampbellDispatcher = useDispatch()
  return {
    getBlockUser,
    getUser,
    getunBlockUser,
    userDispatcher,getBookUser,
    userData,
    getUSerOne,
    getsearchUser, OneUserdata,
    CampbellDispatcher
  }
}
