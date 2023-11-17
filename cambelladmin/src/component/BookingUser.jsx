import React, { useEffect, useMemo } from 'react'
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
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'
export default function BookingUser ({ userdata })
{
const users=[]
  const user = useMemo(() =>
  {
    const result = users?.find(ele => ele.uid === userdata);
    console.log(users??2323)
    return result;
  },[])
  const navigate = useNavigate()
  const OnClick = () =>
  {
    if (user)
    {
navigate('/chats/normal')

    } else
    {
      toast.warning('User Not Found!')
    }

  }
  const onClickHandle = () => {
    navigate('/user/profile/'+user?.uid)
  }

  return (
    <MDBCard style={{ borderRadius: '15px' }}>
        <MDBCardBody className='p-4'>
          <div className='d-flex flex-column text-black align-items-center'>
            <div onClick={onClickHandle} className='position-relative'>
              <MDBCardImage
                style={{ width: '100px', borderRadius: '10px' }}
                src={
                  user?.profile ??
                  'https://firebasestorage.googleapis.com/v0/b/campbelldecor-c2d1f.appspot.com/o/Users%2Fuser.png?alt=media&token=af8768f7-68e4-4961-892f-400eee8bae5d'
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
                {user?.username??'suganthy'}
              </MDBCardTitle>
              <MDBCardText className='text-lead text-center text-nowrap' href={`mailto:${user?.email??'./'}`}>
                {user?.email??'Suganthy@gmail.com'}
              </MDBCardText>
              <MDBCardText className='text-lead text-center'>{user?.mobile}</MDBCardText>

              <div
                className='d-flex justify-content-start rounded-3 p-2 mb-2'
                style={{ backgroundColor: '#efefef' }}
                onClick={onClickHandle}
              >
                <div>
                  <p className='small text-muted mb-1'>Experience</p>
                  <p className='mb-0 text-center'>{user?.No_book??1}</p>
                </div>
                <div className='px-3'>
                  <p className='small text-muted mb-1'>Join With Us</p>
                                  <p className='mb-0 small text-wrap'>{user?.join??'11/10/2023'}</p>
                </div>
              </div>
              <div className='d-flex pt-1'>
                <MDBBtn
                  outline
                  className='me-1 flex-grow-1'
                  onClick={OnClick}
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
