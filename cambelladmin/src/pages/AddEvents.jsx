// @ts-nocheck
import React, { useState } from "react";
import { Container, Row, Col, Form, Image, Button,InputGroup } from "react-bootstrap";
import ReactQuill from "react-quill";
import "../../node_modules/react-quill/dist/quill.snow.css";
import { BiUpload} from "react-icons/bi";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {Storage} from "../Fire";
import { toast } from "react-toastify";
export default function AddEvents() {
    const [ description, setdescription ] = useState( "" );
  const [ inputs, setinputs ] = useState( {} );
  const [ images, setImages ] = useState( [] );
 
    const onChange = e=>
    {
        setinputs(pre=>({...pre,[e.target.name]:e.target.value}))
  }
  const uploadImage = async() =>
  {
    const urls = [];
    await images.forEach( async imag =>
    {
      try {
        const filename = "Events/"+new Date().getTime() + imag.name;
      const storageref = await ref( Storage, filename );
        const upload =  uploadBytesResumable( storageref, imag );
        upload.on( "state_changed", snapshot =>
        {
          const progress = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100;
          console.log( progress );
        }, error =>
        {
          console.error(error);
        }, () =>
        {
          getDownloadURL( upload.snapshot.ref ).then( url =>
          {
            urls.unshift( url );
          })
        } );
        await toast.success( "upload scussFully" );
        await setinputs( pre => ( { ...pre, images: urls } ) );
      } catch (error) {
        console.log( error );
      }
      
    } )
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
            { images.map( ( img, index ) => (
            index===0?( <><Col sm='12' key={index}> 
            <Image
              width="100%"
              src={ URL.createObjectURL(img)}
            />
            </Col><div className="gap-2"></div></>):(<Col lg="3" md="4" sm="6" key={index}>
            <Image
              width="100%"
              src={ URL.createObjectURL(img)}
            />
          </Col>)
            ))}

          </Row>
        </Col>
        <Col md="6">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Event Id</Form.Label>
              <Form.Control type="text" placeholder="Event Id" name="eventid" onChange={onChange} required />
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
              
              <InputGroup>
              <Form.Control type="file" onChange={ e =>
              {
                const Files=[]
                for ( const file of ( e.target.files )){
                  Files.push(file);
                }
                setImages( Files );
                } } name="images" multiple />
                 <Button onClick={uploadImage}><BiUpload/></Button>
            </InputGroup>
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
