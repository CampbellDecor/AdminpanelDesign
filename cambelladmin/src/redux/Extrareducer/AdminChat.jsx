
export function AdminChatList(status) {
    switch (status)
    {
        case -1: return (state, action) =>
        {
            state.loading = false;
            state.chatlist = [];
            state.result = action.error;
        };
        case 1: return (state, action) =>
        {
            state.loading = false;
            state.chatlist = action.payload;
            state.result = "fetched";
        };
        case 0: return (state, action) =>
        {
            state.loading = true;
            state.chatlist = [];
            state.result = "loading";
        };
        default: return (state, action) => {
            state.loading = false;
            state.chatlist = [];
            state.result = action.error;
        };
    }
}
