export function ServiceCatAll (status) {
  switch (status) {
    case -1:
      return (state, action) => {
        state.loading = false
        state.ServiceCats = []
        state.result = action.error
      }
    case 1:
      return (state, action) => {
        state.loading = false
        state.ServiceCats = action.payload
        state.result = 'fetched'
      }
    case 0:
      return (state, action) => {
        state.loading = true
        state.ServiceCats = []
        state.result = 'loading'
      }
    default:
      return (state, action) => {
        state.loading = false
        state.ServiceCats = []
        state.result ='invalid Action'
      }
  }
}
