import React, { createContext, useContext, useState,useEffect } from 'react'
import axios from 'axios'
const userChatContext = createContext(null)
export default function UserChatContextProvider ({ childern })
{
  const [loading, setloading] = useState(false)
  const [sender, setSender] = useState('');
  const [chat, setChats] = useState([])
useEffect(() => {
  setloading(true)
  axios
    .get('/api/userchat/' + sender)
    .then(result => {
      setChats(result.data)
      setloading(false)
    })
    .catch(error => {
      console.error(error)
      setloading(false)
    })
}, [sender])

  return (
    <userChatContext.Provider
      value={{ sender, setSender,chat, setChats,loading, setloading
 }}
    >
      {childern}
    </userChatContext.Provider>
  )
}

export function UseuserChatContext () {
  return useContext(userChatContext)
}
