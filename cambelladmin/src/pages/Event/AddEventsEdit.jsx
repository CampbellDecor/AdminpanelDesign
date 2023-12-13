import { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'
import { Button, Form, Image, ProgressBar, InputGroup, Badge } from 'react-bootstrap'
import { IoMdAddCircle } from 'react-icons/io'
import Modal from 'react-bootstrap/Modal'
import { useAppContext } from '../../contexts/AppContext'
import { UploadFile } from '../../function/FirebaseFun'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addEvents } from '../../redux/Thunks/Events'
import { BiUpload } from 'react-icons/bi'

function OprationEvent () {
  const Dispatcher = useDispatch()
  const { Applogo } = useAppContext()
  const [show, setShow] = useState(false)
  const [imgURL, SetimgURL] = useState(null)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [eventDetails, setEvent] = useState({})
  const [uploadse, setuploadse] = useState(0)
  const onUpload = async e => {
    await UploadFile(
      `Events/${eventDetails?.name}`,
      imgURL,
      url => setEvent(pre => ({ ...pre, imgURL: url })),
      err => {
        toast.error(err.message)
      },
      setuploadse
    )
  }
  const onchange = e => {
    setEvent(pre => ({ ...pre, [e.target.name]: e.target.value }))
  }
  const onSubmit = async e => {
    if (imgURL === null || !eventDetails?.name || !eventDetails?.description) {
      toast.warn('All Fields Are Required')
      return
    }
    if (!eventDetails.imgURL) {
      toast.warn("Image Didn't added")
      return
    }
    setuploadse(0);
    Dispatcher(addEvents(eventDetails))
    toast.success('Scucessfully added')
    handleClose()
  }
  return (
    <>
      <MDBBtn
        className='position-fixed'
        style={{ right: '10px', top: '70px', backgroundColor: '#c59290' }}
        onClick={handleShow}
      >
        <IoMdAddCircle size={25} />
      </MDBBtn>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Events</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                type='text'
                name='name'
                placeholder='event Name'
                autoFocus
                onChange={onchange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                rows={2}
                placeholder='description....'
                onChange={onchange}
                name='description'
              />
            </Form.Group>
            <InputGroup
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Control
                type='file'
                placeholder='imgURL'
                onChange={e => {
                  SetimgURL(e.target.files[0])
                }}
                accept='image/*'
              />

              <Button
                id='basic-addon2'
                onClick={onUpload}
                disabled={imgURL === null}
                style={{
                  backgroundColor: '#c59290'
                }}
              >
                <BiUpload size={20} color='#fff' />

              </Button>
            </InputGroup>
            <div className='w-100 d-flex justify-content-center'>
              <Image
                style={{ height: '100px' }}
                src={imgURL === null ? Applogo : URL.createObjectURL(imgURL)}
                className='w-25 mx-auto'
              />
              {imgURL!==null && uploadse!==0&&<Badge pill className='bg-notification position-absolute right-100' style={{
                backgroundColor: '#c59290'
              }}>{Math.floor(uploadse)}</Badge>}
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' disabled={uploadse>0} onClick={handleClose}>
            Close
          </Button>
          <Button style={{ backgroundColor: '#c59290' }} onClick={onSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default OprationEvent
