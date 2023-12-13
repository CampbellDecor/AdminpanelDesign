// @ts-nocheck
import React, { useReducer, useState } from 'react'
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  ListGroup,
  Card
} from 'react-bootstrap'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { Storage } from '../../Fire'
import { toast } from 'react-toastify'
import { BiUpload } from 'react-icons/bi'
import { reducer } from '../../function/PackageHandle'

export default function AddPackage () {
  const [pack, setpack] = useReducer(reducer, {})
  const [serviceadd, setServiceAdd] = useState('')
  const [packImg, setpackImg] = useState(null)
  const onChange = e => {
    setpack({
      type: 'CHANGEINPUT',
      name: e.target.name,
      value: e.target.value
    })
  }
  const onSaveEvent = e => {
    e.preventDefault()
  }
  const changeImage = e => {
    setpackImg(e.target.files[0])
    const img = URL.createObjectURL(e.target.files[0])
    setpack({ type: 'IMGCHANGE', value: img })
  }
  const ImageUploadAndShow = async e => {
    if (packImg) {
      const filename = 'Packages/' + pack?.packname + '.jpg'
      const storageref = await ref(Storage, filename)
      const upload = uploadBytesResumable(storageref, packImg)
      upload.on(
        'state_changed',
        snapshot => {
          const progressd =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log(progressd)
        },
        error => {
          console.error(error)
        },
        () => {
          getDownloadURL(upload.snapshot.ref).then(url => {
            toast.success('upload scussFully')
            setpack({ type: 'IMGCHANGE', value: url })
          })
        }
      )
    }
  }
  const ServiceAdd = () => {
    if (!serviceadd) return

    setpack({ type: 'ADDSERVICE', value: serviceadd })
    console.log(pack)
    setServiceAdd('')
  }
  return (
    <Container fluid className='vh-75 pb-5 mb-3' style={{ width: '80%' }}>
      <Row className='h-100'>
        <Col md='6' className='h-100'>
          <Row className='h-100'>
            <Card>
              <Card.Img
                variant='top'
                src={
                  pack?.packImg ??
                  'https://people.com/thmb/IEPTFBRdIU8Qin6ggf2vCcDfO2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/simone-biles-wedding-vg-168-10506202393-186fb90cbfc047249abd0d5e934dc334.jpg'
                }
              />
              <Card.Body>
                <Card.Title className='text-center'>
                  {pack?.packname ?? 'pack Name'}
                </Card.Title>
                <Card.Text className='text-center'>
                  $ {pack?.price ?? 0}
                </Card.Text>

                <ListGroup>
                  {Object.entries(pack?.services ?? {}).forEach(ele => (
                      <ListGroup.Item key={ele[0]}>dfdfdf</ListGroup.Item>
                    ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Row>
        </Col>
        <Col md='6'>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>pack Name</Form.Label>
              <Form.Control
                type='title'
                placeholder='pack Name'
                name='packname'
                onChange={onChange}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='00000.000'
                onChange={onChange}
                name='price'
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Services</Form.Label>
              <InputGroup>
                <Button
                  style={{ backgroundColor: '#c59290' }}
                  onClick={ServiceAdd}
                >
                  +
                </Button>
                <Form.Control
                  type='text'
                  placeholder='services'
                  aria-label='services'
                  value={serviceadd}
                  aria-describedby='services'
                  onChange={e => setServiceAdd(e.target.value)}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>packs Images</Form.Label>
              <InputGroup className='mb-3'>
                <Form.Control
                  type='file'
                  onChange={changeImage}
                  name='images'
                  accept='image/*'
                />
                <Button variant='outline-info' onClick={ImageUploadAndShow}>
                  <BiUpload size={20} />
                </Button>
              </InputGroup>
            </Form.Group>
            <Button type='submit' onClick={onSaveEvent} className='me-2'>
              Save
            </Button>
            <Button type='reset' variant='danger' className='ms-2'>
              Clear
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
