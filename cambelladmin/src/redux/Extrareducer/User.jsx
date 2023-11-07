export function GetAll (status)
{
    switch (status)
    {
        case 1: return (state, action) =>
        {
            state.loading = false;
            state.users = action.payload;
            state.result = 'fetched';
            state.block = false;
            state.unblock = false;
        };
        case 0: return (state, action) =>
        {
            state.loading = true;
            state.users = [];
            state.result = 'loading';
            state.block = false;
            state.unblock = false;

        };

        case -1: return (state, action) =>
        {
            state.loading = false;
            state.users = [];
            state.result = action.error;
            state.block = false;
            state.unblock = false;

        };

        default: return (state, action) =>
        {
            state.loading = false;
            state.users = [];
            state.result = 'Invalid Action';
            state.block = false;
            state.unblock = false;

        };
    }
}
export function GetBlock (status)
{
    switch (status)
    {
        case 1:
            return (state, action) =>
            {
                state.loading = false;
                state.users = action.payload;
                state.result = 'fetched';
                state.block = true;
                state.unblock = false;

            };

        case 0:
            return (state, action) =>
            {
                state.loading = true;
                state.users = [];
                state.result = 'loading';
                state.block = false;
                state.unblock = false;
            };

        case -1:
            return (state, action) =>
            {
                state.loading = false;
                state.users = [];
                state.result = action.error;
                state.block = false;
                state.unblock = false;

            };


        default:
            return (state, action) =>
            {
                state.loading = false;
                state.users = [];
                state.result = 'Invalid Action';
                state.block = false;
                state.unblock = false;

            };
    }
}

export function GetunBlock (status) {
  switch (status) {
    case 1:
      return (state, action) => {
        state.loading = false
        state.users = action.payload
        state.result = 'fetched'
          state.block = false;
          state.unblock = true;
      }

    case 0:
      return (state, action) => {
        state.loading = true
        state.users = []
        state.result = 'loading'
        state.block = false
        state.unblock = false
      }

    case -1:
      return (state, action) => {
        state.loading = false
        state.users = []
        state.result = action.error
        state.block = false
        state.unblock = false
      }

    default:
      return (state, action) => {
        state.loading = false
        state.users = []
        state.result = 'Invalid Action'
        state.block = false
        state.unblock = false
      }
  }
}
export function SearchUsers (status) {
  switch (status) {
    case 1:
      return (state, action) => {
        state.loading = false
        state.users = action.payload
        state.result = 'fetched'
        state.block = false
        state.unblock = false
      }

    case 0:
      return (state, action) => {
        state.loading = true
        state.users = []
        state.result = 'loading'
        state.block = false
        state.unblock = false
      }

    case -1:
      return (state, action) => {
        state.loading = false
        state.users = []
        state.result = action.error
        state.block = false
        state.unblock = false
      }

    default:
      return (state, action) => {
        state.loading = false
        state.users = []
        state.result = 'Invalid Action'
        state.block = false
        state.unblock = false
      }
  }
}
