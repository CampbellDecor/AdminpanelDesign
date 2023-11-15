import {
    getServiceCat
} from './Thunks/ServiceCategory'
import { useDispatch, useSelector } from 'react-redux'
export function useServiceCategoryStore ()
{
    const CategoryDispatcher = useDispatch();
    const CampbellDispatcher = useDispatch()
    const CategoryData=useSelector(state=>state.ServiceCat)
    const ServiceCategories=useSelector(state=>state.ServiceCat)
    return {
        getServiceCat,
        CategoryDispatcher,
        ServiceCategories,
        CampbellDispatcher,CategoryData
    };
}
