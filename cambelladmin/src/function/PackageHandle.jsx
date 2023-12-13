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
      const { services, ...others } = state;
      const servicesdata = services ? Object.entries(services) : [];
      const dataset=[]
      servicesdata.forEach(ele =>
      {
        dataset.push(ele[1])
      })
      dataset?.push(action.value);
      const obj = {};
      dataset.forEach((item, index) =>
      {
        const key = '0' + (index + 1);
        obj[key]= item;
      })
      return {
        ...others,services:obj
      }
      }
    default:
      return {}
  }
}
