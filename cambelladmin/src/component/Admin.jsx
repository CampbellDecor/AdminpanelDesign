import React, { useCallback } from 'react';
import { MdBlockFlipped, MdDelete } from 'react-icons/md';
import { FaUnlockAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import
  {
    MDBCol,
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { MdOutlinePassword } from 'react-icons/md';
import { OneAdmin } from '../redux/Slice/Admins';
import { OneAuth } from '../redux/Slice/Auth';
import { ButtonGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
export default function Admin ({ aid })
{
  const admin = useSelector(state => OneAdmin(state, aid));
  const auth = useSelector(state => OneAuth(state, aid));
  const { join, lastOnline } = auth;
  const { profile, username, email, mobile, isBlock } = admin;
  const navigate = useNavigate();
  const onClickHandle = () =>
  {
    navigate('/admins/profile/' + aid);
  };
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
                  <p className='small text-muted mb-1'>Join</p>
                  <p className='mb-0 small' style={{ fontSize: '13px' }}>
                    {new Date(join).toLocaleDateString()}
                  </p>
                </div>
                <div className='px-3'>
                  <p className='small text-muted mb-1'>Last Online</p>
                  <p className='mb-0 small' style={{ fontSize: '13px' }}>
                    {lastOnline
                      ? new Date(lastOnline).toLocaleDateString()
                      : 'Not yet'}
                  </p>
                </div>
                <div>
                  <p className='small text-muted mb-1'>Rating</p>
                  <p className='mb-0'>{Math.floor(Math.random() * 10)}</p>
                </div>
              </div>
              <div className='d-flex pt-1'>
                <MDBBtn
                  outline
                  className='me-1 flex-grow-1'
                  href={'/admins/' + aid}
                >
                  Edit
                </MDBBtn>
                <ButtonGroup aria-label='Basic example'>
                  {isBlock ? (
                    <UnBlocked {...{ aid }} />
                  ) : (
                    <Blocked {...{ aid }} />
                  )}

                  <DeleteBox {...{ aid }} />
                </ButtonGroup>
              </div>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export function Blocked ({ aid })
{
  const admin = useSelector(state => OneAdmin(state, aid));
  const { profile, username } = admin;

  const OnBlocked = useCallback(() =>
  {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2 btn-sm',
        cancelButton: 'btn btn-danger mx-2 btn-sm'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: `You won't be able Block ${username}`,
        imageUrl: profile,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: username,
        showCancelButton: true,
        confirmButtonText: 'Yes, Block it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      })
      .then(result =>
      {
        if (result.isConfirmed)
        {
          swalWithBootstrapButtons
            .fire({
              title: 'Why do you Block Him/Her',
              input: 'text',
              inputAttributes: {
                autocapitalize: 'off'
              },
              showCancelButton: true,
              confirmButtonText: 'Block',
              showLoaderOnConfirm: true,
              preConfirm: async reason =>
              {
                try
                {
                  const response = await axios.post(
                    `/api/admin/block/${aid}`,
                    reason
                  );
                  if (!response.ok)
                  {
                    return Swal.showValidationMessage(`${username} Blocked`);
                  }
                  return response.json();
                } catch (error)
                {
                  Swal.showValidationMessage(`
        Request failed: ${error}
      `);
                }
              },
              allowOutsideClick: () => !Swal.isLoading()
            })
            .then(result =>
            {
              if (result.isConfirmed)
              {
                Swal.fire({
                  title: `${username} blocked for ${result.value.reason}`,
                  imageUrl: profile
                });
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        )
        {
          swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: 'Your imaginary file is safe',
            icon: 'error'
          });
        }
      });
  }, []);
  return (
    <Button onClick={OnBlocked} variant='danger'>
      <MdBlockFlipped />
    </Button>
  );
}

export function UnBlocked ({ aid })
{
  const admin = useSelector(state => OneAdmin(state, aid));
  const { profile, username } = admin;

  const OnunBlocked = useCallback(() =>
  {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2 btn-sm',
        cancelButton: 'btn btn-danger mx-2 btn-sm'
      },
      buttonsStyling: false
    });
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
      .then(result =>
      {
        if (result.isConfirmed)
        {
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
              preConfirm: async reason =>
              {
                try
                {
                  const response = await axios.post(
                    `/api/admin/unblock/${aid}`,
                    reason
                  );
                  if (!response.ok)
                  {
                    return Swal.showValidationMessage(`${username} unBlocked`);
                  }
                  return response.json();
                } catch (error)
                {
                  Swal.showValidationMessage(`
        Request failed: ${error}
      `);
                }
              },
              allowOutsideClick: () => !Swal.isLoading()
            })
            .then(result =>
            {
              if (result.isConfirmed)
              {
                Swal.fire({
                  title: `${username} unblocked for ${result.value.reason}`,
                  imageUrl: profile
                });
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        )
        {
          swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: 'Your imaginary file is safe',
            icon: 'error'
          });
        }
      });
  }, [username, profile, aid]);
  return (
    <Button onClick={OnunBlocked} variant='info'>
      <FaUnlockAlt />
    </Button>
  );
}

export function DeleteBox ({ aid, html, color })
{
  const navigate = useNavigate();
  const admin = useSelector(state => OneAdmin(state, aid));
  const { username } = admin;

  const deleteAction = useCallback(async () =>
  {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to Delete " + username,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });
    if (result.isConfirmed)
    {
      const admin = await axios.delete('/api/admin/' + aid);
      if (admin)
      {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success'
        });
        navigate('/admins');
      } else
      {
        Swal.fire({
          title: 'failed!',
          text: 'You Haven"t delete',
          icon: 'error'
        });
      }
    }
  }, []);
  return (
    <Button variant={color ?? 'warning'} onClick={deleteAction}>
      {html ?? <MdDelete color='white' />}
    </Button>
  );
}

export function ResetPassword ({ aid })
{
  const admin = useSelector(state => OneAdmin(state, aid));
  const { username } = admin;

  const deleteAction = useCallback(async () =>
  {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to Reset Password " + username,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });
    if (result.isConfirmed)
    {
      const admin = await axios.delete('/api/admin/' + aid);
      if (admin)
      {
        Swal.fire({
          title: 'Sent Mail',
          text: 'Your file has been deleted.',
          icon: 'success'
        });
      } else
      {
        Swal.fire({
          title: 'failed!',
          text: 'You Haven"t Rest',
          icon: 'error'
        });
      }
    }
  }, []);
  return (
    <Button variant='info' as='a' href='/resetpw' disabled={aid === undefined}>
      <MdOutlinePassword size={29} />
    </Button>
  );
}
