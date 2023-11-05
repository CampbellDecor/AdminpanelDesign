export const AdminFormReducer = (state,action) =>
{
    switch (action.type)
    {
        case 'ONCHANGEINPUT': {
            return {
                ...state,
                [action.name]:action.value
            }
        }
        case 'CLEAR': {
            return {
            };
        }
        case 'MOBILECHANGE':{return {
            ...state, mobile: action.input}
        }
             case 'CHECKEDCHANGE':{return {
            ...state, [action.name]:action.value}
        }
        case "PROFILECHANGE": {
            return {
                ...state,profile:action.payload
            }
        }
        case "SETADMIN": {
            return action.payload;
        }
        default: return state;
    }
}
