import React, { useCallback, useState } from 'react'
import { useUserContext } from '../contexts/UserContext'
import { Button } from 'react-bootstrap'
import { useAdminChatStore } from '../redux/AdminChatStore'
import {useUserChatStore} from '../redux/ChatStore'
import axios from 'axios'
export default function Chatting ({ isAdmin, aid, userdata= undefined }) {
  const { adminChatDispatcher, getachat} = useAdminChatStore()
  const { getuChats,UserChatDispatcher } = useUserChatStore();
  const { currentuser } = useUserContext()
  const { profile, username } = currentuser
  const [message, setmessage] = useState('')
  const onTyping = useCallback(
    e => {
      setmessage(e.target.value)
    },
    [setmessage]
  )
  const OnSentAdmin = async e => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/adminchat', {
        message,
        aid
      })
      if (response.data) {
        adminChatDispatcher(getachat(aid))
        setmessage('')
      }
    } catch (error) {
      throw error
    }
  }
  const UserChat = async e => {
    e.preventDefault()
    try {
      const response =await axios.post('/api/userchat', {
        message,
        userid: aid,
        username:userdata??""
      })
      if (response.data) {
        UserChatDispatcher(getuChats(aid))
        setmessage('')
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div
      className='text-muted d-flex justify-content-start align-items-center pe-3 pt-2 mt-2 sticky-bottom bg-body-tertiary w-100 border-1 '
      style={{ bottom: '0px' }}
    >
      <img
        src={
          profile ??
          'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp'
        }
        alt={username}
        style={{ width: '40px', height: '100%' }}
      />
      <input
        style={{ height: '40px' }}
        type='text'
        className='form-control form-control-lg shadow shadow-1-soft'
        placeholder='Type message ...'
        onChange={onTyping}
        value={message}
      />
      <Button
        className='ms-3'
        onClick={isAdmin ? OnSentAdmin : UserChat}
        disabled={message === '' || message === undefined || aid === 0}
      >
        <i className='fas fa-paper-plane' />
      </Button>
    </div>
  )
}
