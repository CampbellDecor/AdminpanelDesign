import React, { useCallback, useEffect, useState } from 'react'
import { useUserContext } from '../contexts/UserContext'
import { Button } from 'react-bootstrap'
import {UseuserChatContext} from '../contexts/ChatContext'
import {Message,Reply } from './Chats';
import axios from 'axios'

export default function Chatting () {
  const { currentuser } = useUserContext()
  const { profile, username } = currentuser
  const [message, setmessage] = useState('')
  const onTyping = useCallback(
    e => {
      setmessage(e.target.value)
    },
    [setmessage]
  )
  const OnSent = e => {
    e.preventDefault()
    alert(message)
  }
  return (
    <div className='text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2 position-absolute bg-body-tertiary w-100 bottom-0 '>
      <img
        src={
          profile ??
          'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp'
        }
        alt={username}
        style={{ width: '40px', height: '100%' }}
      />
      <input
        type='text'
        className='form-control form-control-lg shadow shadow-1-soft'
        id='exampleFormControlInput2'
        placeholder='Type message ...'
        onChange={onTyping}
      />
      <Button className='ms-3' onClick={OnSent}>
        <i className='fas fa-paper-plane' />
      </Button>
    </div>
  )
}

export function ChatPanel ()
{
  const {loading,chat}=UseuserChatContext()

  return loading?(<h1>Loading</h1>):(< div className = 'pt-3 pe-3 h-100' data-mdb-perfect-scrollbar='true' >
    {chat.map(ele => ele.type === 'sent' ? <Reply {...ele}/>:<Message {...ele}/>)}

    </div >)
  }


export function ChatList ({chatlist=[]})
{

  return (
<div/>
  )
}
