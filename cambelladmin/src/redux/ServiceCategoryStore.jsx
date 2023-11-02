import {
    getServiceCat
} from './Thunks/ServiceCategory'
import { useDispatch, useSelector } from 'react-redux'
export function useServiceCategoryStore ()
{
    const CategoryDispatcher = useDispatch();
    const ServiceCategories=useSelector(state=>state.ServiceCat)
    return {
        getServiceCat,
        CategoryDispatcher,
        ServiceCategories
    };
}
