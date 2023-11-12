export const  getServices=(status) =>
{
switch (status) {
  case -1:
    return (state, action) => {
      state.loading = false
      state.services = []
      state.result = action.error
    }

  case 0:
    return (state, action) => {
      state.loading = true
      state.services = []
      state.result = 'loading'
    }

  case 1:
    return (state, action) => {
      state.loading = false
      state.services = action.payload
      state.result = 'fetched'
    }

  default:
    return (state, action) => {
      state.loading = false
      state.services = []
      state.result = 'InvalidAction'
    }
}

}
