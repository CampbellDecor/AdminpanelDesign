import React, { useState } from "react";
import { Container, Row, Col, Form, Image, Button } from "react-bootstrap";
import ReactQuill from "react-quill";
import "../../node_modules/react-quill/dist/quill.snow.css";
export default function AddPackages() {
    const [ description, setdescription ] = useState( "" );
    const [ inputs, setinputs ] = useState( {} );
    
    const onChange = e=>
    {
        setinputs(pre=>({...pre,[e.target.name]:e.target.value}))
    }
  const onSaveEvent = e => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <Container fluid className="vh-100">
      <Row>
        <Col md="6">
          <Row>
            <Image
              width="100%"
              src="https://people.com/thmb/IEPTFBRdIU8Qin6ggf2vCcDfO2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/simone-biles-wedding-vg-168-10506202393-186fb90cbfc047249abd0d5e934dc334.jpg"
            />
          </Row>
          <Row>
            <Col lg="3" md="4" sm="6">
              <Image
                width="100%"
                src="https://people.com/thmb/IEPTFBRdIU8Qin6ggf2vCcDfO2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/simone-biles-wedding-vg-168-10506202393-186fb90cbfc047249abd0d5e934dc334.jpg"
              />
            </Col>
            <Col lg="3" md="4" sm="6">
              <Image
                width="100%"
                src="https://people.com/thmb/IEPTFBRdIU8Qin6ggf2vCcDfO2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/simone-biles-wedding-vg-168-10506202393-186fb90cbfc047249abd0d5e934dc334.jpg"
              />
            </Col>
            <Col lg="3" md="4" sm="6">
              <Image
                width="100%"
                src="https://people.com/thmb/IEPTFBRdIU8Qin6ggf2vCcDfO2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/simone-biles-wedding-vg-168-10506202393-186fb90cbfc047249abd0d5e934dc334.jpg"
              />
            </Col>
            <Col lg="3" md="4" sm="6">
              <Image
                width="100%"
                src="https://people.com/thmb/IEPTFBRdIU8Qin6ggf2vCcDfO2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/simone-biles-wedding-vg-168-10506202393-186fb90cbfc047249abd0d5e934dc334.jpg"
              />
            </Col>
          </Row>
        </Col>
        <Col md="6">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Event Id</Form.Label>
              <Form.Control type="text" placeholder="Service Id" name="serviceid" onChange={onChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="title" placeholder="Event Title" name="title" onChange={onChange}  required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="price" placeholder="00000.000" onChange={onChange} name="price" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <ReactQuill
                theme="snow"
                value={description}
                              onChange={
                setdescription
                }
                placeholder="description"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Event Images</Form.Label>
              <Form.Control type="file" onChange={onChange} name="images" multiple />
            </Form.Group>
            <Button type="submit"  onClick={onSaveEvent}  className="me-2">
              Save
                      </Button>
                      <Button type="reset" variant="danger" className="ms-2">
                          Clear
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
