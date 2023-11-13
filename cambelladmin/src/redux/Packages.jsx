import { getPack,getOnePackByName } from '../redux/Thunks/PackThnuk'
import { useDispatch, useSelector} from 'react-redux'

export const UsePackStoe = () =>
{
  const PackData = useSelector(state => state.packs);
  const onePackData = useSelector(state => state.onePackage);
  const PackDis = useDispatch();
  return { getPack,PackData ,PackDis,onePackData,getOnePackByName}
}
