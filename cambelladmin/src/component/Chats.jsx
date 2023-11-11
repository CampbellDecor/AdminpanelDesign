import React from 'react';
import { Link } from 'react-router-dom';
import { useAdminChatStore } from '../redux/AdminChatStore';
import { useUserChatStore } from '../redux/ChatStore';
import {useUserContext} from '../contexts/UserContext'

export function Chatuser ({
  id,
  profile,
  username,
  message,
  type,
  isOnline,
  unread,
  onClick,
  isAdmin=true
})
{
  const { adminChatDispatcher,getachat} = useAdminChatStore();
  const {getuChats
} = useUserChatStore();
  const onHandleChange =e =>
    {
    e.preventDefault();
    adminChatDispatcher(getachat(id));
  }
  const onHandleUserChange =e =>
    {
    e.preventDefault();
    adminChatDispatcher(getuChats(id));
  }

  return (
    <li className='p-2 border-bottom useitem' key={id} >
      <Link className='d-flex justify-content-between' as='button' onClick={isAdmin?onHandleChange:onHandleUserChange}>
        <div className='d-flex flex-row'>
          <div className='position-relative'>
            <img
              src={profile}
              alt='avatar'
              className='d-flex d-none d-lg-block align-self-center me-3 img-rounded img-responsive img-fluid '
              width={50}

            />
            <img
              src={profile??"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="}
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
          <p className='small text-muted mb-1'>{""}</p>
          {unread > 0 && (
            <span className='badge bg-danger rounded-pill float-end'>
              {unread}
            </span>
          )}
        </div>
      </Link>
    </li>
  );
}

export function Message ({ chatid, profile,message, time, status })
{

  return (
    <div className='d-flex flex-row justify-content-start' key={chatid}>
      <img
        src={profile??"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="}
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
        <p className='small ms-3 mb-3 rounded-3 text-muted float-end'>
          {time}
        </p>
      </div>
    </div>
  );
}

export function Reply ({ chatid, message,time,date })
{
  const { currentuser } = useUserContext()

  return (
    <div className='d-flex flex-row justify-content-end p-1' key={chatid}>
      <div className='position-relative'>
        <p className='small p-2 me-3 mb-1 text-white rounded-3 bg-primary'>
          {message}
        </p>
        <p className='small me-3 mb-3 rounded-3 text-muted'>
          {time}
        </p>
      </div>
      <img
        src={currentuser?.profile??"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="}
        alt='avatar 1'
        style={{ width: '45px', height: '100%' }}
      />
    </div>
  );
}
export function chat ({ message, replay, sender, reciver })
{
  return <></>;
}
