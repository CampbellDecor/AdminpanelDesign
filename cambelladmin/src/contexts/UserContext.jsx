import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext(null)
export default function UserContextProvider ({ childern }) {
  const [currentuser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem('current')) ?? null
  )
  const [isSuper, setisSuper] = useState(
    JSON.parse(sessionStorage.getItem('current'))?.isSuper ?? false
  )

  return (
    <UserContext.Provider
      value={{ isSuper, setisSuper, currentuser, setCurrentUser }}
    >
      {childern}
    </UserContext.Provider>
  )
}

export function useUserContext () {
  return useContext(UserContext)
}
