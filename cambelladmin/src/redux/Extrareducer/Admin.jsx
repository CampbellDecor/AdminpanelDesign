export function getallAdmin (status)
{
    switch (status)
    {
        case -1:return (state, action) => {
  state.loading = false
  state.admins = []
  state.result = action.error
}

        case 0:return (state, action) => {
  state.loading = true
  state.admins = []
  state.result = 'loading'
}

        case 1:return (state, action) => {
  state.loading = false
  state.admins = action.payload
  state.result = 'fetched'
}

        default:return (state, action) => {
  state.loading = false
  state.admins = []
  state.result = 'InvalidAction'
}

    }
}
