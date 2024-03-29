
export const createStorageLocal = (name, data) => {
    if (localStorage.getItem(name) === null) {
        localStorage.setItem(name, typeof (data) === 'string' ? data : JSON.stringify(data));
    } else {
        throw new Error("Already Exsist");
    }
}
export const deleteStorageLocal = (name) => {
    localStorage.removeItem(name);
}
export const cleanLocal = () => {
    localStorage.clear();
}
export const addLocalitem = (name, item) => {
    let newdata, exsit = localStorage.getItem(name);
    if (exsit !== null) {

        try {
            const data = JSON.parse(exsit);
            newdata = Array.isArray(data) ? [...data, item] : {
                ...data,
                item
            };
        } catch (error) {
            newdata = exsit.concat(item);
        }


    } else {
        newdata = typeof (item) === 'string' ? item : JSON.stringify(item);
    }
    localStorage.setItem(name, newdata);
}
export const getLocalStorage = name => {
  const exist = localStorage.getItem(name)
  if (exist !== null) {
    try {
      return JSON.parse(exist)
    } catch (error) {
      return exist
    }
  } else
  {
      return null;
  }
}
export const changeLocalStorage = (name, item) =>
{
    console.log(item)
    let newdata;
    try {
        const data = JSON.parse(item);
        newdata = data;
    } catch (error) {
        newdata = item;
    }
  localStorage.setItem(name, newdata)
}
