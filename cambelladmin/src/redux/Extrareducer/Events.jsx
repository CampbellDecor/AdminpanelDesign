export const GetAllEvents=(status)=>{
switch (status) {
  case -1:
    return (state, action) => {
      state.loading = false
      state.events = []
      state.result = action.error
    }

  case 0:
    return (state, action) => {
      state.loading = true
      state.events = []
      state.result = 'loading'
    }

  case 1:
    return (state, action) => {
      state.loading = false
      state.events = action.payload
      state.result = 'fetched'
    }

  default:
    return (state, action) => {
      state.loading = false
      state.events = []
      state.result = 'InvalidAction'
    }
}

}
