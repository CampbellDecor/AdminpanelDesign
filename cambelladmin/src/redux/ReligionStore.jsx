import { getReligions } from './Thunks/Root'
import { useDispatch, useSelector } from 'react-redux'
export function useReligionStore () {
  const Religiondispatcher = useDispatch()
  const Religions = useSelector(state => state.religion)
  return { getReligions, Religiondispatcher, Religions }
}
