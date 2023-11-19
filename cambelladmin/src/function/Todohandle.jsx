export const TodoReducer = (state,action) =>
{
    switch (action.type)
    {
        case "CHANGEINPUT": {
            const { name, value } = action.payload.target;
            return {
                ...state, [name]:value
            };
        };
        case "DATECHANGE": {
            return {
                ...state,
                dueDate: action.payload?.toDateString(),
                createDate: new Date()?.toDateString()
            }
        }
        default: return state;
    }

}
