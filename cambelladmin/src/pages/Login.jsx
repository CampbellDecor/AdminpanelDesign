// @ts-nocheck
import React, {
  useCallback,
  useReducer,
  useRef,
  useState,
  useMemo
} from 'react'
import Authuntication, { loginreducer, Remeberme } from '../function/Auth'
import { InValidationInput } from '../component/Util/TextBox'
import { SubmitButton } from '../component/Util/Button'
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBValidation,
  MDBValidationItem
} from 'mdb-react-ui-kit'
import { Image } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAppContext } from '../contexts/AppContext'
import { useAuthContext } from '../contexts/AuthContext'
import { toast } from 'react-toastify'
import { useUserContext } from '../contexts/UserContext'

export default function Login () {
  //context api
  const { Appname, Applogo } = useAppContext()
  const { islogin, rememberme, setremberme, setLogin } = useAuthContext()
  const { setCurrentUser, setisSuper } = useUserContext()
  //State
  const [loginUser, Dispatcher] = useReducer(loginreducer, {})

  const [loading, setloading] = useState(false)
  const emailref = useRef()
  const paswordref = useRef()
  const navigate = useNavigate()

  //functions

  const onChange = useCallback(
    e => Dispatcher({ type: 'CHANGE_INPUT', input: e.target }),
    [Dispatcher]
  )

  const onSubmit = async e => {
    e.preventDefault()
    console.log(loginUser)
    try {
      setloading(true);
      const login = await Authuntication(loginUser)
      console.log(login);
      setloading(false)
      setCurrentUser(login.user)
      setisSuper(login.user?.isSuper ?? false)

     if (login.login) {
        setLogin(true)

        toast.success('Login Successfully.')
      //   Remeberme(loginUser, rememberme)
        navigate('/home')
      } else {
        setloading(false)
        setloading(false)
        Dispatcher({ type: 'AUTHERROR' })
        toast.error('login failed !')
      }
    } catch (error) {
      setLogin(false)
      setloading(false)

      toast.error('login failed !')
      console.error(error)
    }
  }

  return useMemo(
    () =>
      islogin ? (
        <Navigate to='/home' replace={true} />
      ) : (
        <MDBContainer fluid className='vh-100 login'>
          <div className='p-5 bg-image'></div>

          <MDBCard className='mx-auto p-md-5 pt-sm-2  shadow-5 col-12 col-sm-10 col-md-8 col-lg-5 login-container'>
            <MDBCardBody className='p-5 text-center'>
              <div>
                <Image src={Applogo} roundedCircle className='login-container-logo' />
                <h3 className='mt-3 mb-3'>{Appname}</h3>
              </div>

              <MDBValidation onSubmit={onSubmit}>
                <InValidationInput
                  ref={emailref}
                    {...{
                    inputclassName:"login-container-input",
                    wrapperClass: 'mb-4',
                    label: 'Email',
                    name: 'email',
                    defaultValue: '',
                    value: loginUser?.email,
                    type: 'email',
                    feedback: 'Please choose correct email',
                    invalidclassName: 'py-2',
                    onChange
                  }}
                />
                <InValidationInput
                  ref={paswordref}
                    {...{
                    inputclassName:"login-container-input",
                    feedback: 'Please enter valid password[8-12]',
                    invalidclassName: 'py-2',
                    wrapperClass: 'mb-4',
                    label: 'Password',
                    name: 'password',
                    defaultValue: '',
                    type: 'password',
                    onChange
                  }}
                />
                <MDBValidationItem invalid feedback='not remember you!'>
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
                <SubmitButton
                  className='mb-4 login-container-btn'
                  btncontent='Log In'
                  loading={loading}
                />
              </MDBValidation>
              <div>
                <Link className='text-decoration-none text-muted' to='/resetpw'>
                  forget Password?
                </Link>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      ),
    [islogin]
  )
}
