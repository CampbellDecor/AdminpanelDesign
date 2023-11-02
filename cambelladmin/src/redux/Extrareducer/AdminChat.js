
export function AdminChathint(status) {
    switch (status)
    {
        case -1: return (state, action) =>
        {
            state.loading = false;
            state.hints = [];
            state.result = action.error;
        };
        case 1: return (state, action) =>
        {
            state.loading = false;
            state.hints = action.payload;
            state.result = "fetched";
        };
        case 0: return (state, action) =>
        {
            state.loading = true;
            state.hints = [];
            state.result = "loading";
        };
        default: return (state, action) => {
            state.loading = false;
            state.hints = [];
            state.result = action.error;
        };
    }
}

export function AdminChat(status) {
    switch (status) {
        case -1:
            return (state, action) => {
                state.loading = false;
                state.chats = [];
                state.result = action.error;
            };
        case 1:
            return (state, action) => {
                state.loading = false;
                state.chats = action.payload;
                state.result = "fetched";
            };
        case 0:
            return (state, action) => {
                state.loading = true;
                state.chats = [];
                state.result = "loading";
            };
        default:
            return (state, action) => {
                state.loading = false;
                state.chats = [];
                state.result = action.error;
            };
    }
}

export function AdminOneChat(status) {
    switch (status) {
        case -1:
            return (state, action) => {
                state.loading = false;
                state.chattings = [];
                state.result = action.error;
            };
        case 1:
            return (state, action) => {
                state.loading = false;
                state.chattings = action.payload;
                state.result = "fetched";
            };
        case 0:
            return (state, action) => {
                state.loading = true;
                state.chattings = [];
                state.result = "loading";
            };
        default:
            return (state, action) => {
                state.loading = false;
                state.chattings = [];
                state.result = action.error;
            };
    }
}
