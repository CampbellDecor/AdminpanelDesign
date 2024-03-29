import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useUserContext } from '../contexts/UserContext'
import { chatIds, selectChatUser } from '../redux/Slice/Adminchats'
import { SchatSet, SoneAdminChat } from '../redux/Slice/SuperAdminChats'
import { allChats} from '../redux/Slice/AdminChatsaone'
import { allChatOne} from '../redux/Slice/UserChatone'
import { getAdminChatsone,sendAdminChat } from '../redux/Thunks/Adminchats'
import { getOneSAdminChats,sendSAdminChats } from '../redux/Thunks/SuperAdminChats'
import { OneAuth } from '../redux/Slice/Auth'
import { OneUser } from '../redux/Slice/User'
import { useDispatch, useSelector } from 'react-redux'
import {
  changeLocalStorage,
  getLocalStorage
} from '../function/LocalStorageHandler'
import { Button } from 'react-bootstrap'

//Chatting TextBox
export default function Chatting ()
{
  const Dispatcher = useDispatch()
  const { currentuser, isSuper } = useUserContext()
  const { profile, username } = currentuser
  const [message, setmessage] = useState('')
  const id = getLocalStorage('chat')??0;
  const [userdata, setuserdata] = useState(undefined)


  const onTyping =e => {
      setmessage(e.target.value)
    }
  const OnSentAdmin = async e => {
    e.preventDefault();
    try
    {
      const Message={message,aid:id}
      Dispatcher(sendSAdminChats(Message));
    } catch (error) {
      throw error
    }
  }
  const UserChat =  e => {
    e.preventDefault();
    const username = getLocalStorage('username') ?? '';
    try
    {
      const Message={  message,
        userid: id,
        username
      }
      Dispatcher(sendAdminChat(Message));
      setmessage('');
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
        style={{backgroundColor:"#c59290"}}
        onClick={isSuper ? OnSentAdmin : UserChat}
        disabled={message === '' || id === 0}
      >
        <i className='fas fa-paper-plane' />
      </Button>
    </div>
  )
}

//Chatting userlist
export function Chatuser ({ id })
{
  const { isSuper } = useUserContext();
  const Dispatcher = useDispatch();

  const SchatUser = useSelector(state => isSuper?SoneAdminChat(state, id):selectChatUser(state,id))
  const { profile, username, message, unread = 0 } = SchatUser
  const { isOnline } = useSelector(state => OneAuth(state, id))??{};
  const onHandleChange = e => {
    e.preventDefault();
    changeLocalStorage('chat', id)
   Dispatcher(getOneSAdminChats(id))
  }
  const onHandleUserChange = e => {
    e.preventDefault()
    changeLocalStorage('chat', id)
    changeLocalStorage('username', username);
    Dispatcher(getAdminChatsone(id));
  }

  return (
    <li className='p-2 border-bottom useitem' key={id}>
      <Link
        className='d-flex justify-content-between text-decoration-none'
        as='button'
        onClick={isSuper ? onHandleChange : onHandleUserChange}

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
              style={{borderRadius:'50px'}}
              width={40}
              height={40}

            />
            {isOnline ? (
              <span className='badge bg-success badge-dot' />
            ) : (
              <span className='badge bg-secondary badge-dot' />
            )}
          </div>
          <div className='pt-1'>
            <p className='fw-bold mb-0' style={{color:'#473939'}}>{username}</p>
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
      <div style={{maxWidth:"75%"}}>
        <p
          className='small p-2 ms-3 mb-1 rounded-3'
          style={{ backgroundColor: 'rgba(222, 192, 191,0.3)' }}
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
    <div className='d-flex flex-row justify-content-end p-1 mr-0' key={chatid}>
      <div className='position-relative ' style={{maxWidth:"75%"}}>
        <p className='small p-2 me-3 mb-1 text-white rounded-3 text-wrap' style={{backgroundColor:"#c59290"}}>
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
  const { isSuper } = useUserContext();
  const chats = useSelector(isSuper ? allChats : allChatOne);
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
  const chatSuper = useSelector(SchatSet)
  const chatAdmins = useSelector(chatIds)

  return (
    <ul className='list-unstyled h-100'>
      {isSuper
        ? chatSuper.length > 0 &&
          chatSuper?.map(chat => <Chatuser id={chat} key={chat} />)
        : chatAdmins.length > 0 &&
          chatAdmins?.map(chat => <Chatuser id={chat} key={chat} />)}
    </ul>
  )
}
