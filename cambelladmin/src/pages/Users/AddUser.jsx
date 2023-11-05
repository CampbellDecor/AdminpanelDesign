// @ts-nocheck
import React, { useCallback, useReducer, useState} from 'react'
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
  MDBInput,
  MDBTextArea,
  MDBBtn
} from 'mdb-react-ui-kit'
import { AvatarGenerator } from 'random-avatar-generator'
import { GiAutoRepair } from 'react-icons/gi'
import { Spinner } from 'react-bootstrap'
import PhoneInput from 'react-phone-number-input'
import { useAppContext } from '../../contexts/AppContext'
import axios from 'axios'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
const Reducer = (state,action) =>
{
  switch (action.type)
  {
    case 'CHANGEINPUT': {
      return {
        ...state, [action.name]: action.value
      }
    }
    case 'RESET': {
      return {}
    }
    case 'MOBILECHANEGE': {
      return {
        ...state,mobile:action.value
      }
    }
    case 'PROFILECHANEGE': {
      return {
        ...state, profile: action.payload
      }
    }
    default: return state;
  }
}
export default function AddUSer ()
{
  const navigate = useNavigate();

  const { Applogo} = useAppContext();
  // Simply get a random avatar
  const [user, setUser] = useReducer(Reducer
,{
    })
  const [isLoading, setisLoading] = useState(false)
  const validating = useCallback(() =>
  {
    if (user?.mobile === '') throw new Error('Invalid Mobile');
    else if (user?.email === '' || user?.email === '@gmail.com')
      throw new Error('Inavalid Email');
    else return true;
  }, [user]);
  const OnChangehandle = useCallback(e =>
  {
    setUser({ type: 'CHANGEINPUT', name: e.target.name, value: e.target.value });
  },[])
  const ProfileChange = useCallback(() =>
  {const generator = new AvatarGenerator()

    setUser({type:'PROFILECHANEGE',payload:generator.generateRandomAvatar()})
  },[])
const OnMobileChange=useCallback(value=>setUser({type:'MOBILECHANEGE',value}),[])
  const handleSubmit = async e => {
    try {
      e.preventDefault()

      if (validating())
      {
        setisLoading(true)
        const userdata = await axios.post("/api/user/add", user);
        setisLoading(false)
        if (userdata)
        {
          toast.success('Scussfully added User');
          navigate('/users');
        }
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <MDBContainer className='py-5 vh-75'>
      <MDBRow className='justify-content-center align-items-center h-100'>
        <MDBCol lg='6' className='mb-2 mb-lg-0'>
          <MDBCard className='mb-1' style={{ borderRadius: '.5rem' }}>
            <MDBRow className='g-0'>
              <MDBCol
                md='4'
                className='gradient-custom text-center'
                style={{
                  borderTopLeftRadius: '.5rem',
                  borderBottomLeftRadius: '.5rem'
                }}
              >
                <MDBCardImage
                  src={
                    user?.profile??Applogo
                  }
                  alt='Avatar'
                  className='my-5'
                  style={{ width: '80px' }}
                  fluid
                />
                <MDBTypography tag='h5'>{user?.username??'Cambelluser'}</MDBTypography>
                <MDBCardText className='fs-6'>{user?.email??'Cambellmail@mail.com'}</MDBCardText>
                <GiAutoRepair
                  onClick={ProfileChange}
                  size={30}
                />

                <div className='d-none justify-content-center'>
                  <a href='#!'>
                    <MDBIcon fab icon='facebook me-3' size='md' />
                  </a>
                  <a href='#!'>
                    <MDBIcon fab icon='google me-3' size='md' />
                  </a>
                </div>
              </MDBCol>
              <MDBCol md='8'>
                <MDBCardBody className='p-4'>
                  <MDBTypography tag='h6'>Information</MDBTypography>
                  <hr className='mt-0 mb-4' />
                  <MDBRow className='pt-1'>
                    <MDBCol size='6' className='mb-3'>
                      <MDBTypography tag='h6'>Email</MDBTypography>
                      <MDBInput
                        label='Email'
                        name='email'
                        type='email'
                        required
                        value={user?.email??""}
                        onChange={OnChangehandle}
                      />
                    </MDBCol>
                    <MDBCol size='6' className='mb-3'>
                      <MDBTypography tag='h6'>Phone</MDBTypography>
                      <PhoneInput
                        className='border-0'
                        onChange={OnMobileChange}
                        placeholder='Mobile'
                        value={user?.mobile??""}
                      />
                    </MDBCol>
                  </MDBRow>
                  <hr className='mt-0 mb-4' />
                  <MDBRow className='pt-1'>
                    <MDBCol size='6' className='mb-3'>
                      <MDBTypography tag='h6'>Religion</MDBTypography>
                      <MDBInput
  label='religion'
                        name='religion'
  type='text'
  value={user?.religion ?? ''}
  onChange={OnChangehandle}
/>

                    </MDBCol>
                    <MDBCol size='6' className='mb-3'>
                      <MDBTypography tag='h6'>Username</MDBTypography>
                      <MDBInput
                        label='username'
                        name='username'
                        type='text'
                        value={user?.username??""}
                        onChange={OnChangehandle}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBCol size='12' className='mb-3'>
                    <MDBTypography tag='h6'>Address</MDBTypography>
                    <MDBTextArea
                      label='address'
                      name='address'
                      id='textAreaExample'
                      rows={3}
                      value={user?.address??""}
                      onChange={OnChangehandle}
                    />
                  </MDBCol>
                  <MDBRow>
                    <MDBBtn
                      className='w-50 mx-auto'
                      disabled={isLoading}
                      onClick={handleSubmit}
                    >
                      {isLoading ? <Spinner animation='border' /> : 'Save'}
                    </MDBBtn>
                  </MDBRow>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}
