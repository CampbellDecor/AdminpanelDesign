// @ts-nocheck
import React, { useReducer, useState ,useEffect} from 'react'
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Card
} from 'react-bootstrap'
import ReactQuill from 'react-quill'
import { BiUpload } from 'react-icons/bi'
import { reducer } from '../../function/ServiceHandle'
import {useServiceCategoryStore} from '../../redux/ServiceCategoryStore'

export default function AddService () {
  const [service, setService] = useReducer(reducer, {})
  const [serviceImg, setserviceImg] = useState(null)
  const { CampbellDispatcher,getServiceCat,CategoryData
} = useServiceCategoryStore();
const {ServiceCats}=CategoryData
  const onChange = e =>
  {
    setService({
      type: 'CHANGEINPUT',
      name: e.target.name,
      value: e.target.value
    })
  }
  const onSaveEvent = e => {
    e.preventDefault()

  }
  const changeImage = e =>
  {
    setserviceImg(e.target.files[0]);
    const img = URL.createObjectURL(e.target.files[0]);
    setService({ type: "IMGCHANGE", value: img })
  }
  useEffect(() =>
  {
    CampbellDispatcher(getServiceCat());
  },[])
  return (
    <Container fluid className='vh-75 pb-5 mb-3' style={{ width: '80%' }}>
      <Row className='h-100'>
        <Col md='6' className='h-100'>
          <Row className='h-100'>
            <Card>
              <Card.Img
                variant='top'
                src={
                  service?.serviceImg??
                  'https://people.com/thmb/IEPTFBRdIU8Qin6ggf2vCcDfO2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/simone-biles-wedding-vg-168-10506202393-186fb90cbfc047249abd0d5e934dc334.jpg'
                }
              />
              <Card.Body>
                  <Card.Title className='text-center'>
                    {service?.servicename ?? 'Service Name'}
                  </Card.Title>
                  <Card.Text className='text-center'>
  $ {service?.price??0}
                  </Card.Text>
<ReactQuill
  theme='bubble'
  value={service?.desc??'decription...'}
  readOnly
/>

              </Card.Body>
            </Card>
          </Row>
        </Col>
        <Col md='6'>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Service Name</Form.Label>
              <Form.Control
                type='title'
                placeholder='Service Name'
                name='servicename'
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
              <Form.Label>Category</Form.Label>
              <Form.Select aria-label='Category' required>
                <option>Category</option>

                {
                  ServiceCats?.length > 0 && ServiceCats?.map(ele => (
                    <option value='1'>One</option>
))
                }

</Form.Select>

            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Description</Form.Label>
              <ReactQuill
                theme='snow'
                onChange={value => setService({ type: 'CHANGEDES', value })}
                placeholder='description'
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Services Images</Form.Label>
              <InputGroup className='mb-3'>
                <Form.Control
                  type='file'
                  onChange={changeImage}
                  name='images'
                  accept='images/*'
                />
                <Button variant='secoundary'>
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
