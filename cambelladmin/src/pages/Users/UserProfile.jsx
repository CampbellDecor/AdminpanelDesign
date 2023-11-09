import React, { useEffect, useState } from 'react'
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
import {BsCaretDownFill,BsFillEnvelopeCheckFill,BsFillEnvelopeExclamationFill} from 'react-icons/bs'
import Table from 'react-data-table-component'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import { BlockUnBlock } from '../../component/Util/Model'
import { Badge } from 'react-bootstrap'
import axios from 'axios'
import {ImBlocked} from 'react-icons/im'
export default function AdminProfile () {
  const profiledata = useLoaderData()
  const {
    username,
    email,
    mobile,
    address,
    discription,
    uid,
    isOnline,
    isBlock,
    lastSignin,
    isVerfied
  } = profiledata
  const addressdata = address ? address.split(',') : ''
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const colums = [
    {
      name: 'Bookcode',
      selector: row => row.bookid
    },
    {
      name: 'Event',
      selector: row => row.event,
      wrap:true
    },

    {
      name: 'EventDate',
      selector: row => row.eventDate,
      sortable:true
    },
    {
      name: 'Total Payment',
      selector: row => row.payment
    }, {
      name: "Status",
      selector: row => row.status,
      cell: row => {
  let badge = ''
  switch (row.status) {
    case 'pending':
      badge = 'bg-warning'
      break
    case 'reject':
      badge = 'bg-danger'
      break
    case 'active':
      badge = 'bg-success'
      break
    case 'cancelled':
      badge = 'bg-danger'
      break
    default:
      badge = 'bg-secoundary'
  }
  return <Badge pill className={`${badge} p-1`}>{row.status}</Badge>
}

    }
  ]
  const onrowclick = (row) =>
  {
navigate("/booking/"+row.bookid)
  }
  useEffect(() =>
  {
    axios.get("/api/user/book/" + uid)
      .then(result =>
      {
        setData(result.data);
      }).catch(err =>
      {
        setData([]);
        console.error(err);
    })
  },[setData])
  return (
    <div className='adminprofile w-100'>
      <MDBContainer className='py-2 h-100 '>
        <MDBRow className='justify-content-center align-items-center h-100'>
          <MDBCol md='12' lg='9'>
            <MDBCard>
              <div className='rounded-top text-white d-flex flex-row adminprofile-header'>
                {isBlock && <div className='adminprofile-header-blockbage'>
                  <ImBlocked size={150} color='red' />
                  <h6>Blocked</h6>
                </div>}


                <div className='ms-4 mt-5 d-flex flex-column adminprofile-header_user'>
                  <div>
                    <MDBCardImage
                      src={
                        profiledata.profile ??
                        'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
                      }
                      alt='Generic placeholder image'
                      className='mt-4 mb-2 img-thumbnail adminprofile-header_user--img'
                      fluid
                    />
                    {isOnline && (
                      <Badge pill className='adminprofile-header_user--badge'>
                        tre
                      </Badge>
                    )}
                  </div>

                  <MDBBtn
                    disabled={isBlock}
                    outline
                    color='dark'
                    className='adminprofile-header_user--btn'
                    href={'/chats/normal'}
                  >
                    Go to Chat
                  </MDBBtn>
                </div>
                <div
                  className=' ms-3
adminprofile-header_userdetails'
                >
                  <MDBTypography tag='h5'>{username}</MDBTypography>
                  <MDBCardText className='text-lead'>
                    {addressdata[addressdata.length - 1]}
                  </MDBCardText>
                </div>
              </div>
              <div
                className='p-4 text-black'
                style={{ backgroundColor: '#f8f9fa' }}
              >
                <div className='d-flex justify-content-end text-center py-1'>
                  <div>
                    <MDBCardText className='mb-1 h6'>{lastSignin.substring(4, 16)}</MDBCardText>
                    <MDBCardText className='mb-1 h6'>{lastSignin.substring(17, 25)}</MDBCardText>

                    <MDBCardText className='small text-muted mb-0'>
                      Last Online
                    </MDBCardText>
                  </div>
                  <div className='px-3'>
                    <MDBCardText className='mb-1 h5'>{ data.reduce((total,ele)=>total+ele.payment,0)}</MDBCardText>
                    <MDBCardText className='small text-muted mb-0'>
                      Payment
                    </MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className='mb-1 h5'>{ data?.length}</MDBCardText>
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
                      Email :{' '}
                      <Link
                        className='text-decoration-none
 ms-3 text-muted'
                      >
                        {email}

                      </Link>
                      {isVerfied ? (<Badge bg='none'>
                        <BsFillEnvelopeCheckFill color='green' size={18}/>
                        </Badge>):(<Badge bg='none'>
                          <BsFillEnvelopeExclamationFill color='#cad404' size={18}/>
                        </Badge>)}
                    </MDBCardText>
                    <MDBCardText className='font-italic mb-1'>
                      Mobile:{' '}
                      <Link
                        className='text-decoration-none
 ms-3 text-muted'
                      >
                        {mobile}
                      </Link>
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
                    <BlockUnBlock
                      username={username}
                      uid={uid}
                      isBlock={isBlock ?? false}
                    />
                  </div>
                </div>
                <hr/>
                <div className='d-flex justify-content-between align-items-center mb-4'>
                  <MDBCardText className='lead fw-normal mb-0'>
                    Bookings
                  </MDBCardText>
                </div>
                <Table columns={colums} responsive={true} striped={true}
                  data={data}
                onRowClicked = { onrowclick }
                sortIcon={<BsCaretDownFill />}
                  pagination={true}
                  paginationRowsPerPageOptions={[5,10,15,20,50,100]}

                />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}
