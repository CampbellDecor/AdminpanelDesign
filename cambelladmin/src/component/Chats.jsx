import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAdminChatStore } from '../redux/AdminChatStore'
import { useUserChatStore } from '../redux/ChatStore'
import { useUserContext } from '../contexts/UserContext'
import { changeLocalStorage,getLocalStorage } from '../function/LocalStorageHandler'
import { Button } from 'react-bootstrap'
import axios from 'axios'

//Chatting TextBox
export default function Chatting () {
  const { CampbellDispatcher, getachat, admichats } = useAdminChatStore()
  const { getuChats, userChatsall } = useUserChatStore()
  const { currentuser, isSuper } = useUserContext()
  const { chats } = isSuper ? admichats : userChatsall
  const { profile, username } = currentuser
  const [message, setmessage] = useState('')
  const [id, setid] = useState()
  const [userdata, setuserdata] = useState(undefined)
  useEffect(() => {
    let myid = 0,
      myuser
    if (chats?.length > 0) {
      myid = isSuper ? chats[0].aid : chats[0].uid
      myuser = isSuper ? username : chats[0]?.username
    }
    setid(myid===0&&getLocalStorage('chat'))
    setuserdata(myuser)
  }, [setid])

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
        aid: id
      })
      if (response.data) {
        CampbellDispatcher(getachat(id))
        setmessage('')
      }
    } catch (error) {
      throw error
    }
  }
  const UserChat = async e => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/userchat', {
        message,
        userid: id,
        username: userdata ?? ''
      })
      if (response.data) {
        CampbellDispatcher(getuChats(id))
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
        alt={userdata}
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
        onClick={isSuper ? OnSentAdmin : UserChat}
        disabled={message==='' || id===0}
      >
        <i className='fas fa-paper-plane' />
      </Button>
    </div>
  )
}

//Chatting userlist
export function Chatuser ({
  id,
  profile,
  username,
  message,
  isOnline,
  unread,
  isAdmin = true
}) {
  const { CampbellDispatcher, getachat } = useAdminChatStore()
  const { getuChats } = useUserChatStore()
  const onHandleChange = e => {
    e.preventDefault()
    changeLocalStorage('chat', id)
   CampbellDispatcher(getachat(id))
  }
  const onHandleUserChange = e => {
    e.preventDefault()
    changeLocalStorage('chat', id)
    CampbellDispatcher(getuChats(id))
  }

  return (
    <li className='p-2 border-bottom useitem' key={id}>
      <Link
        className='d-flex justify-content-between'
        as='button'
        onClick={isAdmin ? onHandleChange : onHandleUserChange}
      >
        <div className='d-flex flex-row'>
          <div className='position-relative'>
            <img
              src={profile}
              alt='avatar'
              className='d-flex d-none d-lg-block align-self-center me-3 img-rounded img-responsive img-fluid '
              width={50}
            />
            <img
              src={
                profile ??
                'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='
              }
              alt='avatar'
              className='d-flex d-block d-lg-none align-self-center me-3'
              width={40}
            />
            {isOnline ? (
              <span className='badge bg-success badge-dot' />
            ) : (
              <span className='badge bg-secondary badge-dot' />
            )}
          </div>
          <div className='pt-1'>
            <p className='fw-bold mb-0'>{username}</p>
            <p className='small text-muted'>{message}</p>
          </div>
        </div>
        <div className='pt-1'>
          <p className='small text-muted mb-1'>{''}</p>
          {unread > 0 && (
            <span className='badge bg-danger rounded-pill float-end'>
              {unread}
            </span>
          )}
        </div>
      </Link>
    </li>
  )
}

//message
export function Message ({ chatid, profile, message, time, status }) {
  return (
    <div className='d-flex flex-row justify-content-start' key={chatid}>
      <img
        src={
          profile ??
          'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='
        }
        alt='avatar 1'
        style={{ width: '45px', height: '100%' }}
      />
      <div>
        <p
          className='small p-2 ms-3 mb-1 rounded-3'
          style={{ backgroundColor: '#f5f6f7' }}
        >
          {message}
        </p>
        <p className='small ms-3 mb-3 rounded-3 text-muted float-end'>{time}</p>
      </div>
    </div>
  )
}
//Reply
export function Reply ({ chatid, message, time }) {
  const { currentuser } = useUserContext()

  return (
    <div className='d-flex flex-row justify-content-end p-1' key={chatid}>
      <div className='position-relative'>
        <p className='small p-2 me-3 mb-1 text-white rounded-3 bg-primary'>
          {message}
        </p>
        <p className='small me-3 mb-3 rounded-3 text-muted'>{time}</p>
      </div>
      <img
        src={
          currentuser?.profile ??
          'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='
        }
        alt='avatar 1'
        style={{ width: '45px', height: '100%' }}
      />
    </div>
  )
}
//chatpanel
export function ChatPanel () {
  const { isSuper } = useUserContext()
  const { admichats } = useAdminChatStore()
  const { userChatsall } = useUserChatStore()
  const { chats } = isSuper ? admichats : userChatsall

  return (
    <div className='py-3 pe-3 h-100' data-mdb-perfect-scrollbar='true'>
      {chats?.length > 0 &&
        chats.map(ele =>
          ele.type === 'sent' ? <Message {...ele} /> : <Reply {...ele} />
        )}
    </div>
  )
}

export function ChatList () {
  const { isSuper } = useUserContext()
  const { adminchatlist } = useAdminChatStore()
  const { userChatList } = useUserChatStore()
  const { chatslist } = userChatList
  const { chatlist } = adminchatlist
  return (
    <ul className='list-unstyled h-100'>
      {isSuper? chatlist.length > 0 &&
        chatlist?.map(chat => <Chatuser {...chat} id={chat?.aid} />)
        :
        chatslist.length > 0 &&
        chatslist?.map(chat => <Chatuser {...chat} id={chat?.aid} />)
}
    </ul>
  )
}
