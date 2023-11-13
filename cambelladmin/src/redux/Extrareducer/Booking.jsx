export function getOneBook (status) {
  switch (status) {
    case -1:
      return (state, action) => {
        state.loading = false
        state.book = {}
        state.result = action.error
      }

    case 0:
      return (state, action) => {
        state.loading = true
        state.book = {}
        state.result = 'loading'
      }

    case 1:
      return (state, action) => {
        state.loading = false
        state.book = action.payload
        state.result = 'fetched'
      }

    default:
      return (state, action) => {
        state.loading = false
        state.book = {}
        state.result = 'InvalidAction'
      }
  }
}
export function getTodoReducer (status) {
  switch (status) {
    case -1:
      return (state, action) => {
        state.loading = false
        state.todo = []
        state.result = action.error
      }

    case 0:
      return (state, action) => {
        state.loading = true
        state.todo = []
        state.result = 'loading'
      }

    case 1:
      return (state, action) => {
        state.loading = false
        state.todo = action.payload
        state.result = 'fetched'
      }

    default:
      return (state, action) => {
        state.loading = false
        state.todo = []
        state.result = 'InvalidAction'
      }
  }
}

export function getBookingrecentReducer (status) {
  switch (status) {
    case -1:
      return (state, action) => {
        state.loading = false
        state.bookings = []
        state.result = action.error
      }

    case 0:
      return (state, action) => {
        state.loading = true
        state.bookings = []
        state.result = 'loading'
      }

    case 1:
      return (state, action) => {
        state.loading = false
        state.bookings = action.payload
        state.result = 'fetched'
      }

    default:
      return (state, action) => {
        state.loading = false
        state.bookings = []
        state.result = 'InvalidAction'
      }
  }
}
