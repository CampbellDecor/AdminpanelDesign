import { useState } from 'react'
import { Button, Form, Image, InputGroup, Badge } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { UploadFile } from '../../function/FirebaseFun'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { editEvents } from '../../redux/Thunks/Events'
import { BiUpload } from 'react-icons/bi'
import { FaPen } from 'react-icons/fa'

function OprationEvent ({event}) {
  const Dispatcher = useDispatch()
  const [show, setShow] = useState(false)
  const [imgURL, SetimgURL] = useState(null)
  const handleClose = () => setShow(false)
  const [eventDetails, setEvent] = useState(event)
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
    if (!eventDetails?.name || !eventDetails?.description) {
      toast.warn('All Fields Are Required')
      return
    }
    if (!eventDetails.imgURL) {
      toast.warn("Image Didn't added")
      return
    }
    setuploadse(0)

    Dispatcher(editEvents(eventDetails));
    toast.success('Scucessfully Edited');
    handleClose()
  }

  return (
    <>
    <Button
  onClick={() => setShow(true)}
  className='badge  ms-2'
  style={{ backgroundColor: '#c59290' }}
>
  <FaPen size={20} />
</Button>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Events</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                type='text'
                name='name'
                defaultValue={event.name}
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
                defaultValue={event?.description??''}
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
                src={imgURL === null ?event.imgURL : URL.createObjectURL(imgURL)}
                className='w-25 mx-auto'
              />
              {imgURL !== null && uploadse !== 0 && (
                <Badge
                  pill
                  className='bg-notification position-absolute right-100'
                  style={{
                    backgroundColor: '#c59290'
                  }}
                >
                  {Math.floor(uploadse)}
                </Badge>
              )}
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='danger'
            disabled={uploadse > 0}
            onClick={handleClose}
          >
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
