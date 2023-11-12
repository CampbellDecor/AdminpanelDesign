import Service_reducer from './Slice/ServiceSlice';
import { getservice } from './Thunks/Service'

export function useServiceStore ()
{
    return {getservice,Service_reducer}
}
