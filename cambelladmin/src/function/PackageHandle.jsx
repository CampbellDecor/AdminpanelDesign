export const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGEINPUT': {
      return { ...state, [action.name]: action.value }
    }
    case 'CHANGEDES': {
      return { ...state, desc: action.value }
    }
    case 'IMGCHANGE': {
      return {
        ...state,
        serviceImg: action.value
      }
      }
      case "SERVICECHANGE": {
          const { services,...others } = state;
          return {
              ...others,services:{...services,[services?.length]:action.value}
          }
      }
    default:
      return {}
  }
}
