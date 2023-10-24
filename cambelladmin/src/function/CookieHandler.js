import Cookie from 'js-cookie';

export const addCookie = (name, data, expires = 1,path='/') =>
{

    Cookie.set(name, typeof(data)==='string'?data:JSON.stringify(data), {
        expires,
        secure: true,
        path
    })
}
export const getCookie = (name) =>
{
    const CookieValue = Cookie.get(name);
    try {
        const jsobj = JSON.parse(CookieValue);
        return jsobj;
    } catch (error) {
    return CookieValue;
    }

}
export const isexist = (name) =>
{
    return Cookie.get(name) !== undefined;
}

export const delteCookie = (name) =>
{
    Cookie.remove(name);
}
export const expriedDate = (name)=>{
alert(document.cookie)
}
