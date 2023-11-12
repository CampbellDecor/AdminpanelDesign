import { getPack } from '../redux/Thunks/PackThnuk'
import { useDispatch, useSelector} from 'react-redux'

export const UsePackStoe = () =>
{
  const PackData = useSelector(state => state.packs);
  const PackDis = useDispatch();
  return { getPack,PackData ,PackDis}
}
