import React from 'react'
import { MdBlockFlipped } from 'react-icons/md'
import {
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit'
import { ButtonGroup, Button } from 'react-bootstrap'

export default function Admin ({ profile, username, email, working, mobile, aid })
{
  return (
    <MDBCol md='9' lg='6' xl='4' className='mt-5' key={aid}>
      <MDBCard style={{ borderRadius: '15px' }}>
        <MDBCardBody className='p-4'>
          <div className='d-flex text-black'>
            <div className='flex-shrink-0'>
              <MDBCardImage
                style={{ width: '100px', borderRadius: '10px' }}
                src={
                  profile ??
                  'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
                }
                alt='Generic placeholder image'
                fluid
              />
            </div>
            <div className='flex-grow-1 ms-3'>
              <MDBCardTitle className='text-capitalize'>
                {username}
              </MDBCardTitle>
              <MDBCardText>
                {email} <br />
                {mobile}
              </MDBCardText>

              <div
                className='d-flex justify-content-start rounded-3 p-2 mb-2'
                style={{ backgroundColor: '#efefef' }}
              >
                <div>
                  <p className='small text-muted mb-1'>Experience</p>
                  <p className='mb-0'>{working}</p>
                </div>
                <div className='px-3'>
                  <p className='small text-muted mb-1'>Followers</p>
                  <p className='mb-0'>976</p>
                </div>
                <div>
                  <p className='small text-muted mb-1'>Rating</p>
                  <p className='mb-0'>8.5</p>
                </div>
              </div>
              <div className='d-flex pt-1'>
                <MDBBtn outline className='me-1 flex-grow-1'>
                  Edit
                </MDBBtn>
                <ButtonGroup aria-label='Basic example'>
                  <Button variant='danger' className='mx-1'>
                    <MdBlockFlipped />
                  </Button>
                  <Button variant='secondary' className='mx-1'>
                    Middle
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}
