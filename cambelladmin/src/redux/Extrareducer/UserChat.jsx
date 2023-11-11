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
                state.result = action.payload;
        }
        default: return (state, action) =>
        {
             state.result='invalid ction';
        }
    }
}
export function usersChats (status) {
  switch (status) {
    case 0:
      return (state, action) => {
        state.uload = true
        state.chats = []
        state.result = 'loading'
      }
    case 1:
      return (state, action) => {
        state.uload = false
        state.chats = action.payload
        state.result = 'fetched'
      }
    case -1:
      return (state, action) => {
        state.uload = false
        state.chats = []
        state.result = action.payload
      }
    default:
      return (state, action) => {
        state.result = 'invalid ction'
      }
  }
}
