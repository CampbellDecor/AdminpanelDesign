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

export function getPack (status) {
  switch (status) {
    case -1:
      return (state, action) => {
        state.loading = false
        state.onepackage = []
        state.result = action.error
      }

    case 0:
      return (state, action) => {
        state.loading = true
        state.onepackage = []
        state.result = 'loading'
      }

    case 1:
      return (state, action) => {
        state.loading = false
        state.onepackage = action.payload
        state.result = 'fetched'
      }

    default:
      return (state, action) => {
        state.loading = false
        state.onepackage = []
        state.result = 'InvalidAction'
      }
  }
}