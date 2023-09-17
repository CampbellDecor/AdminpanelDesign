// @ts-nocheck
import React, { useContext, useState } from 'react';
import { auth, fstore } from "../Fire";
import
{
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut
} from "firebase/auth";
import { getDoc, doc,updateDoc } from "firebase/firestore";
import { toast } from 'react-toastify';

import
  {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCheckbox,
    MDBValidation,
    MDBValidationItem,
    MDBInput
  }
  from 'mdb-react-ui-kit';
import { Image } from 'react-bootstrap';
import
  {
    Link,
    useNavigate,
    Navigate
  } from "react-router-dom";
import { CambellContext } from "../contexts/AppContext";
export default function Login ()
{
  const { cambell, islogin,LoginFunction } = useContext( CambellContext );
  const [ loginUser, setloginUser ] = useState( { email: "", password: "" } );
  const [ rememberme, setremberme ] = useState( true );
  const navigate = useNavigate();

  const onChange = e =>
  {
    const name = e.target.name;
    const value = e.target.value;
    setloginUser( values => ( { ...values, [ name ]: value } ) );
  };

  const onSubmit = async e =>
  {
    e.preventDefault();
    try
    {
      
      const loguser = signInWithEmailAndPassword( auth, loginUser.email, loginUser.password );
      rememberme && localStorage.setItem( "user", JSON.stringify( loginUser ) );
      toast.promise( loguser, {
        pending: 'Login...',
        success: 'Login Scussfully 👌',
        error: 'Login fail'
      } );
      if ( ( await loguser ).user.emailVerified === false )
      {
        toast.error( "Verify your Mail and try again", {
          delay: 1000
        } );
        const emailverfiy = sendEmailVerification( ( await loguser ).user );
        toast.promise( emailverfiy, {
          pending: 'sending Mail...',
          success: 'Mail Sent',
          error: 'Mail not Sended'
        }, {
          delay: 1000
        } );
        setloginUser( { email: "", password: "" } );
        await signOut( auth );
        localStorage.removeItem( "user" );
      } else
      {
        //        const token = await getIdToken( ( await loguser ).user );
        const admincol = await doc( fstore, "admins", ( await loguser ).user.uid );
        await updateDoc( admincol, { isOnline: true } );
        const User = await getDoc( admincol );
        sessionStorage.setItem( "current", JSON.stringify( { ...User.data() } ) );
        LoginFunction();
        navigate( "/home" );
      }

    } catch ( err )
    {
      console.log( err );
    }

  };

  return islogin ? ( <Navigate to="/home" replace={ true } /> ) : (
    <MDBContainer fluid className="vh-100 login">

      <div className="p-5 bg-image"></div>

      <MDBCard className='mx-auto p-5 shadow-5 col-12 col-sm-10 col-md-8 col-lg-5 login-container'>
        <MDBCardBody className='p-5 text-center'>
          <div>
            <Image src={ cambell.Applogo } roundedCircle width={ 100 } />
            <h3 className='mt-1 mb-3' >Campbell Decor</h3>
          </div>
          <MDBValidation onSubmit={ onSubmit }>
            
        <MDBValidationItem feedback='Please choose correct email' invalid className='py-2' >
        <MDBInput autoComplete='off' required wrapperClass='mb-4'  label='Email' name='email' defaultValue={loginUser.email} type="email" onChange={onChange}/>
            </MDBValidationItem>
            <MDBValidationItem feedback='Please enter valid password[8-12]' invalid className='py-2' >
        <MDBInput autoComplete='off' required wrapperClass='mb-4'  label='Password' name='password' defaultValue={loginUser.password } type='password' onChange={onChange}/>
        </MDBValidationItem>
           
            <MDBValidationItem>
              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='remember' checked={ rememberme } onChange={
                  () =>
                  {
                    setremberme( !rememberme );
                  }
                } label='Remember Me' />
              </div>
            </MDBValidationItem>
            <MDBBtn type='submit' className='mb-4 login-container-btn'>Log In</MDBBtn>
          </MDBValidation>
          <div>

            <Link className='text-decoration-none'>forget Password?</Link>
          </div>

        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}
