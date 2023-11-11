
export function AdminChatList(status) {
    switch (status)
    {
        case -1: return (state, action) =>
        {
            state.loading = false;
            state.chatlist = [];
            state.result = action.payload;
        };
        case 1: return (state, action) =>
        {
            state.loading = false;
            state.chatlist = action.payload??[];
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

export function AdminChat (status) {
  switch (status) {
    case -1:
      return (state, action) => {
        state.load = false
        state.chats = []
        state.result = action.payload
      }
    case 1:
      return (state, action) => {
        state.load = false
        state.chats = action.payload ?? []
        state.result = 'fetched'
      }
    case 0:
      return (state, action) => {
        state.load = true
        state.chats = []
        state.result = 'load'
      }
    default:
      return (state, action) => {
        state.load = false
        state.chats = []
        state.result = action.error
      }
  }
}
