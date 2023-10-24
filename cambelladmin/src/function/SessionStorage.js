export const createStorageSession = (name,data) =>
{
    if (sessionStorage.getItem(name) === null)
    {
        sessionStorage.setItem(name, typeof (data) === 'string' ? data : JSON.stringify(data));
    } else
    {
        throw new Error("Already Exsist");
}
}
export const deleteStorageSession = (name) =>
{
    sessionStorage.removeItem(name);
}
export const cleanSession = () =>
{
    sessionStorage.clear();
}
export const addSessionitem = (name,item) =>
{
     let newdata, exsit = sessionStorage.getItem(name);
    if (exsit!== null)
    {

        try {
             const data = JSON.parse(exsit);
           newdata = Array.isArray(data) ? [...data, item] : {
                 ...data,
                 item
             };
        } catch (error) {
            newdata = exsit.concat(item);
        }


    } else
    {
        newdata = typeof(item)==='string'?item:JSON.stringify(item);
    }
    sessionStorage.setItem(name, newdata);
}

