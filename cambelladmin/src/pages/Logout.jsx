import React, { useState } from 'react'
import { MDBContainer, MDBCard, MDBCardBody } from 'mdb-react-ui-kit'
import { LogOut } from '../function/Auth'
import { BsEnvelopeCheckFill } from 'react-icons/bs'
import { SuccessAlert, WrongAlert } from '../component/Util/Alert'
import { AiOutlineRedo } from 'react-icons/ai'
import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAppContext } from '../contexts/AppContext'
import { useAuthContext } from '../contexts/AuthContext'
import { useUserContext } from '../contexts/UserContext'
import { NormalButton } from '../component/Util/Button'
import { useNavigate } from 'react-router-dom'

export default function Logout () {
  //Context Api
  const { Appname, Applogo } = useAppContext()
  const { islogin, setLogin } = useAuthContext()
  const { currentuser} = useUserContext();
  //State Management
  const navigate = useNavigate()
  const [logoutStatus, setlououtstatus] = useState('CORRECT')

  const [loading, setloading] = useState(false)

  //functios
  const logouthandle = async () =>
  {
    try {
      setloading(true)
      const logout = await LogOut(currentuser)
      setloading(false)
      setlououtstatus('CORRECT')
        setLogin(false);
      if (logout) {
        navigate('/')
      }
    } catch (error) {
      setlououtstatus('WRONG');
      console.error(error)
    }
  }

  return (
    <MDBContainer fluid className='vh-100 login'>
      <div className='p-5 bg-image'></div>

      <MDBCard className='mx-auto p-4 shadow-5 col-12 col-sm-10 col-md-8 col-lg-5 login-container'>
        <MDBCardBody className='p-5 text-center'>
          <div>
            <Image src={Applogo} roundedCircle width={100} />
            <h3 className='mt-1 mb-3'>{Appname}</h3>
          </div>
          {!islogin ? (
            <LogOutAlert action={logoutStatus} />
          ) : (
            <NormalButton
              className='mt-2 login-container-btn'
              btncontent='Logout'
              loading={loading}
              onClick={logouthandle}
            />
          )}
          <div className='mt-2'>
            go To
                      <Link className='text-decoration-none' to={islogin?'/home':'/'}>
                          { islogin?"Home":"Login"}?
            </Link>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  )
}

function LogOutAlert ({ action = 'normal' }) {
  switch (action) {
    case 'WRONG':
      return (
        <WrongAlert
          title='LogOut'
          body={
            <>
              Hi, we haven't Logout please try again later
              <OverlayTrigger
                overlay={<Tooltip>Redo</Tooltip>}
                placement='top'
                delayShow={300}
                delayHide={150}
              >
                <AiOutlineRedo />
              </OverlayTrigger>
            </>
          }
        />
      )

    case 'CORRECT':
      return (
        <SuccessAlert
          title='Logout'
          icon={<BsEnvelopeCheckFill />}
          body={
            <>Hi , we have Scussfully Logout</>
          }
        />
      )
    default:
      return null
  }
}
