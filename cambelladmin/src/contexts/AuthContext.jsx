import React, { createContext, useContext, useState } from 'react'
import {isexist} from '../function/CookieHandler'

const AuthContext = createContext(null)
export default function AuthContextProvider ({ childern })
{
  const [islogin, setLogin] = useState(sessionStorage.getItem('current') !=null)
  const [rememberme, setremberme] = useState(isexist('rememberme'));


  return <AuthContext.Provider value={{ islogin, setLogin,rememberme, setremberme}}>
    {childern}
  </AuthContext.Provider>;
}

export function useAuthContext () {
  return useContext(AuthContext)
}
