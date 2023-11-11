import React, { useEffect, useState } from 'react'
import { FaRocketchat } from 'react-icons/fa'

import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBadge
} from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios'
export default function BookingUser ({ uid })
{
  const [user,setUser]=useState({})
  const navigate = useNavigate()
  const onClickHandle = () => {
    navigate('/user/profile/' + uid)
  }
  useEffect(() =>
  {
    axios.get('/api/user/bookDetails/' + uid)
      .then(result =>
      {
        setUser(result.data);
      })
      .catch(err =>
      {
        toast.error(err?.messages);
        console.log(err);
    })
  })
  return (
      <MDBCard style={{ borderRadius: '15px'}}>
        <MDBCardBody className='p-4'>
          <div className='d-flex flex-column text-black align-items-center'>
            <div onClick={onClickHandle} className='position-relative'>
              <MDBCardImage
                style={{ width: '100px', borderRadius: '10px' }}
                src={
                  user?.profile ??
                  'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
                }
                alt='Generic placeholder image'
                fluid
                          />
                          {user?.isOnline ?<MDBBadge className='position-absolute top-100 start-100 translate-middle p-1 bg-success
border border-light rounded-circle'>
  <span className='visually-hidden'>New alerts</span>
</MDBBadge>:<MDBBadge
  className='position-absolute top-100 start-100 translate-middle p-1 bg-secondary
border border-light rounded-circle'
>
  <span className='visually-hidden'>New alerts</span>
</MDBBadge>

}
            </div>
            <div className='mt-2'>
              <MDBCardTitle className='text-capitalize text-center'>
                {user?.username}
              </MDBCardTitle>
              <MDBCardText className='text-lead text-center text-nowrap' href={`mailto:${user?.email}`}>
                {user?.email}
              </MDBCardText>
              <MDBCardText className='text-lead text-center'>{user?.mobile}</MDBCardText>

              <div
                className='d-flex justify-content-start rounded-3 p-2 mb-2'
                style={{ backgroundColor: '#efefef' }}
                onClick={onClickHandle}
              >
                <div>
                  <p className='small text-muted mb-1'>Experience</p>
                  <p className='mb-0 text-center'>{user?.No_book}</p>
                </div>
                <div className='px-3'>
                  <p className='small text-muted mb-1'>Join With Us</p>
                                  <p className='mb-0 small text-wrap'>{user?.join}</p>
                </div>
              </div>
              <div className='d-flex pt-1'>
                <MDBBtn
                  outline
                  className='me-1 flex-grow-1'
                  href={'chats/normal'}
                >
                  Chat <FaRocketchat className='ms-2' />
                </MDBBtn>
              </div>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
  )
}
