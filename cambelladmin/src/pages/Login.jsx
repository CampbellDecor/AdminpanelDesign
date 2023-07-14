import React,{useState} from "react";
import { Container, Form, InputGroup,Button,Row,Col,Image} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {FaUserAlt,FaKey} from 'react-icons/fa';
import Logo from '../style/Loginbackground.png';
import '../style/Login.scss';

//  Input component
const Inputs=({ispassword})=>{
    return(
      <Form.Group className="mb-4">
      <InputGroup  hasValidation >
        <InputGroup.Text id={"basic"+(ispassword?"password":"email")}>{ispassword?<FaKey/>:<FaUserAlt/>}</InputGroup.Text>
        <Form.Control
          required
          placeholder={ispassword?"password":"email"}
          aria-label={ispassword?"password":"email"}
          type={ispassword?"password":"email"}
          aria-describedby={"basic"+(ispassword?"password":"email")}
          border
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">{ispassword?"Password":"Email"} is  empty or invalid</Form.Control.Feedback>
      </InputGroup>
      
      </Form.Group>
    )
}




// Log In Component
export default function Login() {
    const [validated, setValidated] = useState(false);
    const [islogin,setLogin]=useState(true);
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  return (
    <Container
      fluid
      className="vh-100 d-flex justify-content-center align-items-center login"
    >
      <Container className="rounded-2 login-container">
        <Row className="d-flex justify-content-center my-3">
          <Image src={Logo} className='logo' roundedCircle/>
        </Row>
        <Form noValidate validated={validated} onSubmit={handleSubmit} autoComplete="off">
          {islogin?(<>
            <Inputs ispassword={false}/>
           <Inputs ispassword={true}/>
          </>):(
            <Inputs ispassword={false}/>
          )}
           
          <Row className="d-flex justify-content-center">
            <Col sm={4}>
                <Button  type="submit" className="fw-bold w-100">{islogin?"Log In":"Forget"}</Button>
            </Col>         
          </Row>
         <Row>
            <Link className="forget-password text-center text-decoration-none" onClick={()=>setLogin(!islogin)}>{islogin?"Forget Password?":"Log In"}</Link>
         </Row>
        </Form>
      </Container>
    </Container>
  );
}
