import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';

export function Chatuser ({
  id,
  profile,
  username,
  lastchat,
  isOnline,
  unread

})
{


  const onHandleChange =e =>
    {
    e.preventDefault();
  }

  return (
    <li className='p-2 border-bottom useitem' key={id} >
      <Link className='d-flex justify-content-between' as='button' onClick={onHandleChange}>
        <div className='d-flex flex-row'>
          <div className='position-relative'>
            <img
              src={profile}
              alt='avatar'
              className='d-flex d-none d-lg-block align-self-center me-3 img-rounded img-responsive img-fluid '
              width={50}

            />
            <img
              src={profile}
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
            <p className='small text-muted'>{lastchat?.message}</p>
          </div>
        </div>
        <div className='pt-1'>
          <p className='small text-muted mb-1'>{lastchat?.dateTime}</p>
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

export function Message ({ chatid, profile,message, dateTime, status })
{

  return (
    <div className='d-flex flex-row justify-content-start' key={chatid}>
      <img
        src={profile}
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
          {dateTime?.substring(0,7)} | {dateTime?.substring(dateTime.indexOf('T')+1,dateTime?.lastIndexOf(':'))}
        </p>
      </div>
    </div>
  );
}

export function Reply ({ chatid, message, dateTime,status })
{
  const { currentuser } = useUserContext()

  return (
    <div className='d-flex flex-row justify-content-end' key={chatid}>
      <div className='position-relative'>
        <p className='small p-2 me-3 mb-1 text-white rounded-3 bg-primary'>
          {message}
        </p>
        <p className='small me-3 mb-3 rounded-3 text-muted'>
          {dateTime?.substring(0,7)} | {dateTime?.substring(dateTime.indexOf('T')+1,dateTime?.lastIndexOf(':'))}
        </p>
        <i className='fa-solid fa-pen text-white-50 position-absolute editcon'></i>
        <i className='fa-solid fa-trash text-white-50 position-absolute deleteicon'></i>
      </div>
      <img
        src={currentuser.profile}
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
