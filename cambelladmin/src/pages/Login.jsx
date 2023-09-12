// @ts-nocheck
import React, { useContext, useState } from 'react';
import {auth,fstore} from "../Fire"
import
  {
    signInWithEmailAndPassword,
    sendEmailVerification,
    signOut,
    //getIdToken
  } from "firebase/auth";
import {getDoc ,doc} from "firebase/firestore";
//import {useCookies} from "react-cookie";
import { toast } from 'react-toastify';

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
import { Image} from 'react-bootstrap';
import {Link, useNavigate,Navigate} from "react-router-dom";
import {CambellContext} from "../contexts/AppContext";
function Login ()
{
  const {cambell,setLogin, setCurrentUser,islogin } = useContext( CambellContext );
  const [loginUser,setloginUser]=useState({email:"",password:""});
  const navigate = useNavigate();
    const onChange=e=>{
       const name = e.target.name;
      const value = e.target.value;
    setloginUser(values=>({...values,[name]:value}));
    }

    const onSubmit=async e=>{
      e.preventDefault();
      try
      {
        if (loginUser.email && loginUser.password )
        {
          const loguser =  signInWithEmailAndPassword( auth, loginUser.email, loginUser.password );
          toast.promise(loguser, {
            pending: 'Login...',
            success: 'Login Scussfully 👌',
            error: 'Login fail'
          } );
          if ( (await loguser).user.emailVerified === false )
          {
            toast.error( "Verify your Mail and try again", {
              delay:1000
            } );
            const emailverfiy =  sendEmailVerification((await loguser).user);
            toast.promise( emailverfiy,{
              pending: 'sending Mail...',
              success: 'Mail Sent',
              error: 'Mail not Sended'
            }, {
              delay:1000
            })
            setloginUser( { email: "", password: "" } );
            await signOut( auth );
          } else
          {
    //        const token = await getIdToken( ( await loguser ).user );
            const admincol = await doc( fstore, "admins", (await loguser).user.uid );
            const User = await getDoc( admincol );
            sessionStorage.setItem( "current", JSON.stringify( { ...User.data() } ) );
         
            setLogin( true );
            setCurrentUser( { ...User.data() } );
            navigate( "/home" );
          }
        } else
        {
          toast.error( "Email or Password empty" );
        }
       
      } catch (err) {
        console.log( err);
      }
     
  }
 
  return  islogin?(<Navigate to="/home" replace={ true} />):(
    <MDBContainer fluid className="vh-100 login">

      <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px'}}></div>

      <MDBCard className='mx-auto p-5 shadow-5 col-12 col-sm-10 col-md-8 col-lg-5' style={{marginTop: '-150px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 text-center'>
          <div>
            <Image src={cambell.Applogo} roundedCircle width={100}/>
            <h3 className='mt-1 mb-3' >Campbell Decor</h3>
          </div>
          <MDBValidation>
          <MDBValidationItem feedback='Please choose correct email' invalid className='py-2' >
          <MDBValidationItem feedback='email is correct' valid >
          <MDBInput autoComplete='off' required wrapperClass='mb-4' defaultValue="" label='Email' name='email' value={loginUser.email} type='email' onChange={onChange}/>
          </MDBValidationItem>
          </MDBValidationItem>
          <MDBValidationItem feedback='Please enter valid password[8-12]' invalid className='py-2'>
          <MDBValidationItem feedback='password Correct' valid className='py-2'  >
          <MDBInput autoComplete='off' required wrapperClass='mb-4' defaultValue="" label='Password' value={loginUser.password} type='password' name='password' onChange={onChange}/>
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