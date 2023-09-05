import React,{useContext, useState} from 'react';
import {useCookies} from "react-cookie";
import { auth } from "../Fire";
import { signInWithEmailAndPassword,signOut,sendEmailVerification } from "firebase/auth";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBValidation,
  MDBValidationItem 
}
from 'mdb-react-ui-kit';
import {Alert, Image} from 'react-bootstrap';
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";
import {CambellContext} from "../contexts/AppContext";

function Login() {
  const {setLogin}=useContext(CambellContext);
  const navigate=useNavigate();
  const [loginUser,setloginUser]=useState({email:"",password:""});
  const [ message, setMessage ] = useState( null );
  const [error,Seterror]=useState(null);
    const onChange=e=>{
       const name = e.target.name;
      const value = e.target.value;
    setloginUser(values=>({...values,[name]:value}));
    }

    const onSubmit=async e=>{
      e.preventDefault();
      try
      {
        const isVerfied = axios.post( "/api/admin/emailverify", loginUser );
        const login = await signInWithEmailAndPassword( auth, loginUser?.email, loginUser?.password );     
        if ( !login.user.emailVerified )
        {
          await signOut( auth );
          sendEmailVerification( login.user );
          Seterror( "Email Must be Verified" );
        } else
        {
          navigate( "/home" );
        }
      } catch (err) {
        Seterror( err.code );
      }
     
    }
  return (
    <MDBContainer fluid className="vh-100">

      <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px'}}></div>

      <MDBCard className='mx-auto p-5 shadow-5 col-12 col-sm-10 col-md-8 col-lg-5' style={{marginTop: '-150px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 text-center'>
          <div>
            <Image src="https://play-lh.googleusercontent.com/WCwcq3DvY0pbaTqUfU1ToySB2s5mmqAUxcLcTN3Y2J5l-sDwS2L2z6_qmCYNX9wdXg" roundedCircle width={100}/>
            <h3 className='mt-1 mb-3' >Campbell Decor</h3>
          </div>
          { message != null ? ( <Alert>Hi</Alert> ) : "" }
          { error != null ? ( <Alert>{ error}</Alert>):""}
          <MDBValidation>
          <MDBValidationItem feedback='Please choose correct email' invalid className='py-2' >
          <MDBValidationItem feedback='email is correct' valid >
          <MDBInput autoComplete='off' required wrapperClass='mb-4' defaultValue="" label='Email' name='email'  type='email' onChange={onChange}/>
          </MDBValidationItem>
          </MDBValidationItem>
          <MDBValidationItem feedback='Please enter valid password[8-12]' invalid className='py-2'>
          <MDBValidationItem feedback='password Correct' valid className='py-2'  >
          <MDBInput autoComplete='off' required wrapperClass='mb-4' defaultValue="" label='Password'  type='password' name='password' onChange={onChange}/>
          </MDBValidationItem>
          </MDBValidationItem>
          <MDBValidationItem>
          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='remember'  id='flexCheckDefault'  label='Remember Me' />
          </div>
          </MDBValidationItem>
          <MDBBtn className='w-50 mb-4' size='md' onClick={onSubmit}>Log In</MDBBtn>
          </MDBValidation>
          <div>
        
 <Link>forget Password?</Link>
          </div>
       
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}
export default Login;