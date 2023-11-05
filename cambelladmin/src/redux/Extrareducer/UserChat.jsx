export function usersChatList (status)
{
    switch (status)
    {
        case 0: return (state, action) =>
        {
            state.loading = true;
            state.chatslist = [];
            state.result = 'loading';
        };
        case 1: return (state, action) =>
        {
            state.loading = false;
            state.chatslist = action.payload;
            state.result = "fetched";
        };
        case -1: return (state, action) =>
        {
            state.loading = false;
            state.chatlist = [];
                state.result = action.error;
        }
        default: return (state, action) =>
        {
            return state.result='invalid ction';
        }
    }
}
