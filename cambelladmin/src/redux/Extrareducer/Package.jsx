export function getallPack (status) {
  switch (status) {
    case -1:
      return (state, action) => {
        state.loading = false
        state.packs = []
        state.result = action.error
      }

    case 0:
      return (state, action) => {
        state.loading = true
        state.packs = []
        state.result = 'loading'
      }

    case 1:
      return (state, action) => {
        state.loading = false
        state.packs = action.payload
        state.result = 'fetched'
      }

    default:
      return (state, action) => {
        state.loading = false
        state.packs = []
        state.result = 'InvalidAction'
      }
  }
}
