export function ReligionName (status)
{
    switch (status) {
  case -1:
    return (state, action) => {
      state.loading = false
      state.religions = []
      state.result = action.error
    }

  case 0:
    return (state, action) => {
      state.loading = true
      state.religions = []
      state.result = 'loading'
    }

  case 1:
    return (state, action) => {
      state.loading = false
      state.religions = action.payload
      state.result = 'fetched'
    }

  default:
    return (state, action) => {
      state.loading = false
      state.religions = []
      state.result = 'InvalidAction'
    }
}

}
