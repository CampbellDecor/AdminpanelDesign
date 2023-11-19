// @ts-nocheck
import React, { useReducer, useState } from 'react'
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Card,
  ListGroup
} from 'react-bootstrap'
import { RiPlayListAddLine } from 'react-icons/ri'
import ReactQuill from 'react-quill'
import { BiUpload } from 'react-icons/bi'
import { reducer } from '../../function/PackageHandle'

export default function AddPackage () {
  const [pack, setpack] = useReducer(reducer, {});
  
  const [packImg, setpackImg] = useState(null)
  const ServiceaDD = e => {}
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
                <ReactQuill
                  theme='bubble'
                  value={pack?.desc ?? 'decription...'}
                  readOnly
                />
                <ListGroup>
                  {pack?.services?.map((ele, index) => (
                    <ListGroup.Item key={index}>{ele}</ListGroup.Item>
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
            <div>
              <Form.Label>Services</Form.Label>
              <InputGroup className='mb-3'>
                <Form.Control
                  placeholder='add Services'
                  aria-label="Recipient's username"
                  aria-describedby='basic-addon2'
                />

                <Button
                  variant='outline-info'
                  id='button-addon2'
                  onClick={ServiceaDD}
                >
                  <RiPlayListAddLine size={20} />
                </Button>
              </InputGroup>
            </div>

            <Form.Group className='mb-3'>
              <Form.Label>Description</Form.Label>
              <ReactQuill
                theme='snow'
                onChange={value => setpack({ type: 'CHANGEDES', value })}
                placeholder='description'
              />
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
                <Button variant='outline-info'>
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
