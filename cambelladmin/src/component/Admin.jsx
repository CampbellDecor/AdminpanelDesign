import React, { useCallback } from 'react'
import { MdBlockFlipped, MdDelete } from 'react-icons/md'
import { FaUnlockAlt } from 'react-icons/fa'


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
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'
export default function Admin ({
  profile,
  username,
  email,
  working,
  mobile,
  aid,
  isBlock
}) {
  const navigate = useNavigate()
  const onClickHandle = () => {
    navigate('/admins/profile/' + aid)
  }
  return (
    <MDBCol md='9' lg='6' xl='4' className='mt-5' key={aid}>
      <MDBCard style={{ borderRadius: '15px' }}>
        <MDBCardBody className='p-4'>
          <div className='d-flex text-black'>
            <div className='flex-shrink-0' onClick={onClickHandle}>
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
                onClick={onClickHandle}
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
                <MDBBtn outline className='me-1 flex-grow-1' href={'admins/'+aid}>
                  Edit
                </MDBBtn>
                <ButtonGroup aria-label='Basic example'>
                  {isBlock ? (
                    <UnBlocked {...{ username, profile, aid }} />
                  ) : (
                    <Blocked {...{ username, profile, aid }} />
                  )}

                  <DeleteBox {...{aid,username}} />
                </ButtonGroup>
              </div>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export function Blocked ({ aid, profile, username }) {
  const OnBlocked = useCallback(() => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2 btn-sm',
        cancelButton: 'btn btn-danger mx-2 btn-sm'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: `You won't be able Block ${username}`,
        imageUrl: profile,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: username,
        showCancelButton: true,
        confirmButtonText: 'Yes, Blocked it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      })
      .then(result => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons
            .fire({
              title: 'Why do you Blocked Him/Her',
              input: 'text',
              inputAttributes: {
                autocapitalize: 'off'
              },
              showCancelButton: true,
              confirmButtonText: 'Blocked',
              showLoaderOnConfirm: true,
              preConfirm: async reason => {
                try {
                  const response = await axios.post(
                    `/api/admin/block/${aid}`,
                    reason
                  )
                  if (!response.ok) {
                    return Swal.showValidationMessage(`${username} Blocked`)
                  }
                  return response.json()
                } catch (error) {
                  Swal.showValidationMessage(`
        Request failed: ${error}
      `)
                }
              },
              allowOutsideClick: () => !Swal.isLoading()
            })
            .then(result => {
              if (result.isConfirmed) {
                Swal.fire({
                  title: `${username} blocked for ${result.value.reason}`,
                  imageUrl: profile
                })
              }
            })
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: 'Your imaginary file is safe',
            icon: 'error'
          })
        }
      })
  }, [])
  return (
    <Button onClick={OnBlocked} variant='danger'>
      <MdBlockFlipped />
    </Button>
  )
}

export function UnBlocked ({ aid, profile, username }) {
  const OnunBlocked = useCallback(() => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2 btn-sm',
        cancelButton: 'btn btn-danger mx-2 btn-sm'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: `You won't be able unBlock ${username}`,
        imageUrl: profile,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: username,
        showCancelButton: true,
        confirmButtonText: 'Yes, unBlocked it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      })
      .then(result => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons
            .fire({
              title: 'Why do you unBlocked Him/Her',
              input: 'text',
              inputAttributes: {
                autocapitalize: 'off'
              },
              showCancelButton: true,
              confirmButtonText: 'Unblocked',
              showLoaderOnConfirm: true,
              preConfirm: async reason => {
                try {
                  const response = await axios.post(
                    `/api/admin/unblock/${aid}`,
                    reason
                  )
                  if (!response.ok) {
                    return Swal.showValidationMessage(`${username} unBlocked`)
                  }
                  return response.json()
                } catch (error) {
                  Swal.showValidationMessage(`
        Request failed: ${error}
      `)
                }
              },
              allowOutsideClick: () => !Swal.isLoading()
            })
            .then(result => {
              if (result.isConfirmed) {
                Swal.fire({
                  title: `${username} unblocked for ${result.value.reason}`,
                  imageUrl: profile
                })
              }
            })
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: 'Your imaginary file is safe',
            icon: 'error'
          })
        }
      })
  }, [username, profile, aid])
  return (
    <Button onClick={OnunBlocked} variant='info'>
      <FaUnlockAlt />
    </Button>
  )
}

export function DeleteBox ({ aid, username,html,color }) {
  const deleteAction = useCallback(async () => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to Delete "+username,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    if (result.isConfirmed) {
      const admin = await axios.delete('/api/admin/' + aid)
      if (admin.ok) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
          timer: 2000
        })
      }
    }
  }, [])
  return (
    <Button variant={color??'warning'} onClick={deleteAction}>
      {html??<MdDelete color='white' />}
    </Button>
  )
}
