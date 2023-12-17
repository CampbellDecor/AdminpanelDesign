import React, {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useState
} from 'react'
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
  MDBBtn
} from 'mdb-react-ui-kit'
import ReactStars from 'react-rating-stars-component'
import Swal from 'sweetalert2'
import { oneService } from '../redux/Slice/Service'
import { useSelector } from 'react-redux'

import { Modal, Button, Form } from 'react-bootstrap'
const ServiceContext = createContext()
const BandService = ({ ser, nextline = false }) => {
  const { serviceName, serviceImage, setShow, setEditService } = useContext(
    ServiceContext
  )
  const onClick = async () => {
    const serviceaction = await Swal.fire({
      title: ser?.sername,
      imageUrl: serviceImage,
      imageHeight: '200px',
      width: '350px',
      height: '300px',
      imageWidth: '90%',
      showClass: {
        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
      },
      hideClass: {
        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
      },
      padding: '5px',
      html: `
   <div className='text-center'>
   <p className='text-small'>${serviceName}</p>
  <p>$${ser?.serprice}</p>
   </div>
  `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "<i class='fa-solid fa-pen'></i>",
      confirmButtonColor: '#c59290',
      cancelButtonColor: '#b20802',
      cancelButtonText: "<i class='fa fa-trash' aria-hidden='true'></i>"
    })

    if (serviceaction.isConfirmed) {
      setEditService(ser)
      setShow(true)
    }
  }
  return (
    <>
      <span style={{cursor:'pointer'}} onClick={onClick}>{ser?.sername}</span>
      {nextline && <br />}
    </>
  )
}

const Services = ({ ser }) => {
  return (
    <div className='mt-1 mb-0 text-muted small'>
      <BandService ser={ser[0]} />

      {ser[0] && ser[1] && <span className='text-primary'> • </span>}
      <BandService ser={ser[1]} />

      {ser[1] && ser[2] && <span className='text-primary'> • </span>}
      <BandService ser={ser[0]} nextline={true} />
    </div>
  )
}

export function DeleteService ({ serviceID }) {
  const OnClick = async () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    //"You won't be able to Delete this!",

    const result = await swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: serviceID,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    })
    if (result.isConfirmed) {
      await swalWithBootstrapButtons.fire({
        title: 'Deleted!',
        text: 'Your file has been deleted.',
        icon: 'success'
      })
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: 'Cancelled',
        text: 'Your imaginary file is safe :)',
        icon: 'error'
      })
    }
  }

  return (
    <MDBBtn color='danger' size='sm' onClick={OnClick}>
      Delete
    </MDBBtn>
  )
}

function SebServiceEdit () {
  const { show, setShow, editsubservice } = useContext(ServiceContext)
  const reducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE':
        return { ...state, [action.name]: action.value }
        break
      default: {
        return {}
      }
    }
  }
  const [subservice, setsubService] = useReducer(reducer, {})

  const handleClose = () => setShow(false)
  const Save = () => {
    handleClose()
  }
  return (
    <>
      <Modal show={show} centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editsubservice?.sername}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>ServiceName</Form.Label>
              <Form.Control
                type='text'
                placeholder='servicename'
                name='sername'
                defaultValue={editsubservice?.sername}
                onChange={e =>
                  setsubService({
                    type: 'CHANGE',
                    name: e.target.name,
                    value: e.target.value
                  })
                }
                autoFocus
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>price</Form.Label>
              <Form.Control
                defaultValue={editsubservice?.serprice}
                onChange={e =>
                  setsubService({
                    type: 'CHANGE',
                    name: e.target.name,
                    value: e.target.value
                  })
                }
                type='number'
                placeholder='00.00'
                name='serprice'
                min={0}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: '#c60000' }} onClick={handleClose}>
            Close
          </Button>
          <Button color='red' onClick={Save}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

function SebServiceAdd () {
  const [show, setShow] = useState(false)
  const reducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE':
        return { ...state, [action.name]: action.value }
        break
      default: {
        return {}
      }
    }
  }
  const [subservice, setsubService] = useReducer(reducer, {})

  const handleClose = () => setShow(false)
  const Save = () => {
    handleClose()
  }
  return (
    <>
      <Button onClick={() => setShow(true)}>Add Service</Button>
      <Modal show={show} centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>ServiceName</Form.Label>
              <Form.Control
                type='text'
                placeholder='servicename'
                name='sername'
                onChange={e =>
                  setsubService({
                    type: 'CHANGE',
                    name: e.target.name,
                    value: e.target.value
                  })
                }
                autoFocus
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>price</Form.Label>
              <Form.Control
                onChange={e =>
                  setsubService({
                    type: 'CHANGE',
                    name: e.target.name,
                    value: e.target.value
                  })
                }
                type='number'
                placeholder='00.00'
                name='serprice'
                min={0}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: '#c60000' }} onClick={handleClose}>
            Close
          </Button>
          <Button color='red' onClick={Save}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export function Service ({ servicecode }) {
  const [show, setShow] = useState(false)
  const [editsubservice, setEditService] = useState({})
  const { serviceName, serviceImage, subservice } =
    useSelector(state => oneService(state, servicecode)) ?? {}

  const chunkService = useMemo(() => {
    const chunkarr = []
    let i = 0
    while (i < subservice?.length) {
      chunkarr.push(subservice.slice(i, i + 3))
      i += 3
    }
    return chunkarr
  }, [subservice])

  const rating = useMemo(() => (Math.floor(56 / 10) / 10) * 5, [])
  return (
    <ServiceContext.Provider
      value={{
        serviceName,
        serviceImage,
        subservice,
        show,
        setShow,
        editsubservice,
        setEditService
      }}
    >
      <MDBRow className='justify-content-center mb-0 '>
        <SebServiceEdit />
        <MDBCol md='12' xl='10'>
          <MDBCard
            className='shadow-0 border rounded-3 mt-2 mb-2 oneService
'
          >
            <MDBCardBody>
              <MDBRow>
                <MDBCol md='12' lg='3' className='mb-4 mb-lg-0'>
                  <MDBRipple
                    rippleColor='light'
                    rippleTag='div'
                    className='bg-image rounded hover-zoom hover-overlay'
                  >
                    <MDBCardImage
                      src={serviceImage}
                      fluid
                      style={{ height: '150px', width: '150px' }}
                    />
                    <a href='#!'>
                      <div
                        className='mask'
                        style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol md='6'>
                  <h5>{serviceName}</h5>
                  <div className='d-flex flex-row'>
                    <ReactStars
                      count={5}
                      edit={false}
                      value={rating}
                      size={25}
                      half={true}
                      activeColor='#ffd700'
                    />

                    <span>{0}</span>
                  </div>
                  {chunkService.map(ser => (
                    <Services ser={ser} />
                  ))}
                </MDBCol>
                <MDBCol
                  md='6'
                  lg='2'
                  className='border-sm-start-none border-start'
                >
                  <div className='d-flex flex-row align-items-center mb-1'>
                    <SebServiceAdd />

                    <span className='text-danger'>{/* <s>$20.99</s> */}</span>
                  </div>
                  {/* <h6 className='text-success'>Free shipping</h6> */}
                  <div className='d-flex flex-column mt-4'>
                    <DeleteService serviceID={servicecode} />
                    <MDBBtn outline color='warning' size='sm' className='mt-2'>
                      Edit
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </ServiceContext.Provider>
  )
}
