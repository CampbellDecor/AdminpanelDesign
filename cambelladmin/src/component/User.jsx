import { MDBBadge, MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'
import { BlockUnBlock } from './Util/Model'
import { FaUserPen } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
export function UserRows ({
  username,
  profile,
  isBlock,
  isOnline,
  email,
  religion,
  uid,
  mobile,
  booking
})
{
  const navigate = useNavigate();
  const onClickEvent = (e) =>
  {
    e.preventDefault();
    navigate('/user/profile/' + uid)

  }
  return (
    <tr >
      <td onClick = { onClickEvent }>
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
      <td onClick = { onClickEvent }>
        <p className='fw-normal mb-1'>{religion}</p>
        <p className='text-muted mb-0'>{mobile}</p>
      </td>
      <td onClick = { onClickEvent }>
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
        <MDBBtn color='link' href={'/users/' + uid} rounded size='sm'>
          <FaUserPen size={20} color='navy'/>
        </MDBBtn >
          <BlockUnBlock {...{uid,username,isBlock}}/>

      </td>
    </tr>
  )
}
