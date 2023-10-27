import React, { useEffect } from 'react'
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography
} from 'mdb-react-ui-kit'
import { Link, useLoaderData } from 'react-router-dom'
import { BsShieldLockFill } from 'react-icons/bs';
export default function AdminProfile ()
{
  const profiledata = useLoaderData()
  const { firstname, lastname, username, isSuper, email, mobile, address,discription
 } = profiledata;
  const addressdata=address.split(',')
  useEffect(() =>
  {

},[])
  return (
    <div className='adminprofile w-100' >
      <MDBContainer className='py-2 h-100 '>
        <MDBRow className='justify-content-center align-items-center h-100'>
          <MDBCol md='12' lg='9'>
            <MDBCard>
              <div
                className='rounded-top text-white d-flex flex-row adminprofile-header'
              >
                <div
                className='ms-4 mt-5 d-flex flex-column adminprofile-header_user'
                >
                  <div>
<MDBCardImage
                    src={profiledata.profile??'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'}
                    alt='Generic placeholder image'
                    className='mt-4 mb-2 img-thumbnail adminprofile-header_user--img'
                    fluid
                  />
                    {isSuper && (
                      <BsShieldLockFill className='adminprofile-header_user--badge' />

                    )}
                  </div>

                  <MDBBtn
                    outline
                    color='dark'
                    className = 'adminprofile-header_user--btn'
                  >
                    Edit profile
                  </MDBBtn>
                </div>
                <div className=" ms-3
adminprofile-header_userdetails">
                  <MDBTypography tag='h5'>{firstname} { lastname}</MDBTypography>
                  <MDBCardText className='text-lead'>{addressdata[addressdata.length-1] }</MDBCardText>
                </div>
              </div>
              <div
                className='p-4 text-black'
                style={{ backgroundColor: '#f8f9fa' }}
              >
                <div className='d-flex justify-content-end text-center py-1'>
                  <div>
                    <MDBCardText className='mb-1 h5'>253</MDBCardText>
                    <MDBCardText className='small text-muted mb-0'>
                      Ratings
                    </MDBCardText>
                  </div>
                  <div className='px-3'>
                    <MDBCardText className='mb-1 h5'>1026</MDBCardText>
                    <MDBCardText className='small text-muted mb-0'>
                      Chats
                    </MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className='mb-1 h5'>478</MDBCardText>
                    <MDBCardText className='small text-muted mb-0'>
                      Number oF Orders
                    </MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className='text-black p-4'>
                <div className='mb-5'>
                  <p className='lead fw-bold mb-1'>About</p>
                  <div className='p-4' style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className='font-italic mb-1'>
  Username :
  <Link
    className='text-decoration-none
 ms-3 text-muted'
  >
    {username}
  </Link>
</MDBCardText>

                    <MDBCardText className='font-italic mb-1'>
                      Email : <Link className='text-decoration-none
 ms-3 text-muted'>{ email}</Link>
                    </MDBCardText>
                    <MDBCardText className='font-italic mb-1'>
                      Mobile: <Link className='text-decoration-none
 ms-3 text-muted'>{mobile}</Link>

                    </MDBCardText>
                   <MDBCardText className='font-italic mb-1'>
  Address:
  <Link
    className='text-decoration-none
 ms-3 text-muted'
  >
    {address}
  </Link>
                    </MDBCardText>

<MDBCardText className='font-italic mb-1'>
  description:
  <Link
    className='text-decoration-none
 ms-3 text-muted'
  >
    {discription}
  </Link>
</MDBCardText>

                  </div>
                  <div className='w-100 d-flex justify-content-end'>
                      <MDBBtn color='danger'>Delete Account</MDBBtn>

                  </div>

                </div>
                <div className='d-flex justify-content-between align-items-center mb-4'>
                  <MDBCardText className='lead fw-normal mb-0'>
                    Recent Activities
                  </MDBCardText>
                  <MDBCardText className='mb-0'>
                    <a href='#!' className='text-muted'>
                      Show all
                    </a>
                  </MDBCardText>
                </div>
                <MDBRow>
                  <MDBCol className='mb-2'>
                    <MDBCardImage
                      src='https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp'
                      alt='image 1'
                      className='w-100 rounded-3'
                    />
                  </MDBCol>
                  <MDBCol className='mb-2'>
                    <MDBCardImage
                      src='https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp'
                      alt='image 1'
                      className='w-100 rounded-3'
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow className='g-2'>
                  <MDBCol className='mb-2'>
                    <MDBCardImage
                      src='https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp'
                      alt='image 1'
                      className='w-100 rounded-3'
                    />
                  </MDBCol>
                  <MDBCol className='mb-2'>
                    <MDBCardImage
                      src='https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp'
                      alt='image 1'
                      className='w-100 rounded-3'
                    />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}
