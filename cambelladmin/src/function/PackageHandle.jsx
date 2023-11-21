export const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGEINPUT': {
      return { ...state, [action.name]: action.value }
    }
    case 'CHANGEDES': {
      return { ...state, services: action.value }
    }
    case 'IMGCHANGE': {
      return {
        ...state,
        packImg: action.value
      }
      }
    default:
      return {}
  }
}
