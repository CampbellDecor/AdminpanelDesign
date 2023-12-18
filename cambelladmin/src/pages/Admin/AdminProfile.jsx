import React, { useState } from 'react'
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
import {DeleteBox} from '../../component/Admin'
import {NormalButton} from '../../component/Util/Button'
import { Link, useLoaderData } from 'react-router-dom'
import { BsShieldLockFill } from 'react-icons/bs';
import Table from 'react-data-table-component';

export default function AdminProfile ()
{
  const [activity,setActivity]=useState([])
  const profiledata = useLoaderData()
  const { firstname, lastname, username, isSuper, email, mobile, address,discription,aid
 } = profiledata;
  const addressdata = address ? address.split(',') : '';

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
                    className='adminprofile-header_user--btn'
                    href={'/admins/'+aid}
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
                    <MDBCardText className='mb-1 h6'>Not Yet</MDBCardText>
                    <MDBCardText className='small text-muted mb-0'>
                      Last Online
                    </MDBCardText>
                  </div>
                  <div className='px-3'>
                    <MDBCardText className='mb-1 h6'>11/12/2023</MDBCardText>
                    <MDBCardText className='small text-muted mb-0'>
                      join us
                    </MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className='mb-1 h6'>{ Math.floor(Math.random()*5)}</MDBCardText>
                    <MDBCardText className='small text-muted mb-0'>
                     Rating
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
                      {/* <DeleteBox aid={aid} username={username} color='danger' html='Delete Account'/> */}
                      <NormalButton btncontent={"Delete Account"}/>
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
                <Table
                  columns={[
                    {
name: 'Activity',
selector:row=>row.activity
                    }, {
                      name: 'Date',
                      selector: row => row.dateTime,
                      sortable:true
                    }, {
                      name: 'otherAction',
                      selector:row=>row.other
                    }
                  ]}
                  pagination={true}
                  paginationPerPage={8}
                  data={activity}
                />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}
