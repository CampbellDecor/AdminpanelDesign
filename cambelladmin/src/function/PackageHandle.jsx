import { MdOtherHouses } from "react-icons/md";

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
    case 'ADDSERVICE': {
      return {...state,services:action.value};
    }
      case "SET": return action.value
    default:
      return {}
  }
}
