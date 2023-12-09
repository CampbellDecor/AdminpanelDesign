import { MDBBadge, MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'
import { BlockUnBlock,UserNotes } from './Util/Model'

import { useNavigate,Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { OneUser } from '../redux/Slice/User'
import { OneAuth } from '../redux/Slice/Auth'
import { UserBookCount } from '../redux/Slice/Booking'
import {  Image } from 'react-bootstrap'

export function UserRows ({ uid }) {
  const { email, religion, mobile, username, profile, isBlock,note } = useSelector(
    state => OneUser(state, uid)
  )
  const { isOnline } = useSelector(state => OneAuth(state, uid)) ?? {};
  const booking = UserBookCount(uid);
  const navigate = useNavigate()
  const onClickEvent = e => {
    e.preventDefault()
    navigate('/user/profile/'+uid)
  }
  return (
    <tr>
      <td onClick={onClickEvent}>
        <div className='d-flex align-items-center'>
          <img
            src={profile}
            alt=''
            style={{ width: '45px', height: '45px' }}
            className='rounded-circle'
          />
          <div className='ms-3'>
            <p className='fw-bold mb-1'>{username}</p>
            <p className='text-muted mb-0'>{email}</p>
          </div>
        </div>
      </td>
      <td onClick={onClickEvent}>
        <p className='fw-normal mb-1'>{religion}</p>
        <p className='text-muted mb-0'>{mobile}</p>
      </td>
      <td onClick={onClickEvent}>
        {isBlock ? (
          <MDBBadge color='danger' pill>
            Blocked/{isOnline ? 'Online' : 'Offline'}
          </MDBBadge>
        ) : (
          <MDBBadge color='warning' pill>
            unBlocked/{isOnline ? 'Online' : 'Offline'}
          </MDBBadge>
        )}
      </td>
      <td>{booking}</td>
      <td>
        <MDBBtn color='link'  rounded size='sm'>
          <UserNotes {...{uid,username,note}}/>
        </MDBBtn>
        <BlockUnBlock {...{ uid, username, isBlock }} />
      </td>
    </tr>
  )
}

export function UserProfile ({ uid })
{

  const {profile,username} = useSelector(state => OneUser(state, uid))??{};
  return (
    <div>
  <Link to={`user/profile/${uid}`}>
    <Image
      className='user'
      src={
        profile??
        'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='
      }
      title={username}
    />
  </Link>
</div>

  )
}
