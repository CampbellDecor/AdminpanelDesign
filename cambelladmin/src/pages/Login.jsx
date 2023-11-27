// @ts-nocheck
import React, { useCallback, useReducer, useRef, useState } from 'react'
import Authuntication,{loginreducer,Remeberme} from '../function/Auth'
import { SubmitButton} from '../component/Util/Button';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBValidation,
  MDBValidationItem,
  MDBInput
} from 'mdb-react-ui-kit'
import { Image } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAppContext } from '../contexts/AppContext'
import { useAuthContext } from '../contexts/AuthContext'
import { toast } from 'react-toastify';
import { useUserContext } from '../contexts/UserContext'










export default function Login ()
{
  //context api
  const { Appname, Applogo } = useAppContext();
  const { islogin, rememberme, setremberme,setLogin } = useAuthContext();
const { setCurrentUser,setisSuper } = useUserContext()
  //State
  const [loginUser, Dispatcher] = useReducer(loginreducer, { email: '', password: '' });

  const [loading, setloading] = useState(false);
  const emailref = useRef();
  const paswordref = useRef();

  const inputHandle = useCallback(() => {
  emailref.current.value = loginUser?.email
  paswordref.current.value = loginUser?.password
}
, [loginUser]);
  const navigate = useNavigate();



//functions

  const onChange = e =>
  {
    Dispatcher({type:'CHANGE_INPUT',input:e.target})
  }


  const onSubmit = async e => {
    e.preventDefault();
    inputHandle();
    try
    {
      setloading(true);
      const login = await Authuntication(loginUser);
      setloading(false);
      setCurrentUser(login.user)
      setisSuper(login.user?.isSuper ?? false);

      if (login.login)
      {
        setLogin(true)

        toast.success("Login Successfully.")
        Remeberme(loginUser, rememberme);
      navigate('/home')
      } else
      {
        setloading(false);
        setloading(false);
        Dispatcher({ type: 'AUTHERROR' })
        toast.error("login failed !")
      }

    } catch (error)
    {
      setLogin(false)
      setloading(false)
      Dispatcher({ type: 'ERROR' })
      toast.error('login failed !')
      console.error(error);

   }
  }







  return islogin ? (
    <Navigate to='/home' replace={true} />
  ) : (
    <MDBContainer fluid className='vh-100 login'>
      <div className='p-5 bg-image'></div>

      <MDBCard className='mx-auto p-5 shadow-5 col-12 col-sm-10 col-md-8 col-lg-5 login-container'>
        <MDBCardBody className='p-5 text-center'>
          <div>
            <Image src={Applogo} roundedCircle width={100} />
              <h3 className='mt-3 mb-3'>{Appname}</h3>
            </div>
          <MDBValidation onSubmit={onSubmit}>
            <MDBValidationItem
              feedback='Please choose correct email'
              invalid
              className='py-2'
            >
              <MDBInput
                autoComplete='off'
                required
                wrapperClass='mb-4'
                label='Email'
                  name='email'
                  ref = { emailref }
                  defaultValue={loginUser.email}
                  value={loginUser?.email}
                type='email'
                onChange={onChange}
              />
              </MDBValidationItem>
            <MDBValidationItem
              feedback='Please enter valid password[8-12]'
              invalid
              className='py-2'
            >
              <MDBInput
                autoComplete='off'
                  required
                  ref={paswordref}
                wrapperClass='mb-4'
                label='Password'
                name='password'
                  defaultValue={loginUser.password}
                type='password'
                onChange={onChange}
              />
            </MDBValidationItem>

            <MDBValidationItem invalid feedback="not remember you!">
              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox
                  name='remember'
                  checked={rememberme}
                  onChange={() => {
                    setremberme(!rememberme)
                  }}
                  label='Remember Me'
                />
              </div>
              </MDBValidationItem>
              <SubmitButton className='mb-4 login-container-btn' btncontent="Log In" loading={loading} />
          </MDBValidation>
          <div>
            <Link className='text-decoration-none text-muted' to='/resetpw'>
              forget Password?
            </Link>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  )
}
