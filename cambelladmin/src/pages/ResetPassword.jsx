import React, { useState } from 'react'
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBValidation,
  MDBValidationItem,
  MDBInput
} from 'mdb-react-ui-kit'
import { BsEnvelopeCheckFill } from 'react-icons/bs'
import { SuccessAlert, WrongAlert } from '../component/Util/Alert'
import { AiOutlineRedo } from 'react-icons/ai'
import {Image, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ResetPasswordApi } from '../function/Auth'
import { useAppContext } from '../contexts/AppContext'
import { SubmitButton } from '../component/Util/Button'
import { addCookie, isexist, getCookie } from '../function/CookieHandler'

export default function ResetPassword () {
  //Context Api
  const { Appname, Applogo } = useAppContext()

  //State Management
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(isexist('pswreset'))
  const [sentStatus, setsendstatus] = useState(ResetAlert(sent?"SENT":'normal'))
  const [loading, setloading] = useState(false)

  //functions
  const onchange = e => {
    setEmail(e.target.value)
  }

  const resetHandle = async e => {
    e.preventDefault()
    setloading(true)
    try {
      if (!sent) {

        await ResetPasswordApi(email)
        setloading(false)
        setsendstatus(ResetAlert('CORRECT'))
        addCookie(
          'pswreset',
          { email, date: new Date() },
          0.25,
          '/resetpw'
        )
        setSent(true)
      } else {
        setsendstatus(ResetAlert('SENT'))
        setloading(false)
      }
    } catch (error) {
      setsendstatus(ResetAlert('WRONG', setSent(false)))
      setloading(false)
      console.error(error)
    }
  }

  return (
    <MDBContainer fluid className='vh-100 login'>
      <div className='p-5 bg-image'></div>

      <MDBCard className='mx-auto p-5 shadow-5 col-12 col-sm-10 col-md-8 col-lg-5 login-container'>
        <MDBCardBody className='p-5 text-center'>
          <div>
            <Image src={Applogo} roundedCircle width={100} />
            <h3 className='mt-1 mb-3'>{Appname}</h3>
          </div>
          <MDBValidation onSubmit={resetHandle}>
            {sent ? (
              sentStatus
            ) : (
              <MDBValidationItem
                feedback='Please choose correct email'
                invalid
                className='py-3'
              >
                <MDBInput
                  autoComplete='off'
                  required
                  wrapperClass='mb-2'
                  label='Email'
                  name='email'
                  type='email'
                  defaultValue={email}
                  onChange={onchange}
                />
              </MDBValidationItem>
            )}
            <SubmitButton
              className='mt-2 login-container-btn'
              btncontent={sent ? 'Resend' : 'Reset'}
              loading={loading}
              disabled={sent}
            />
          </MDBValidation>
          <div>
            go To
            <Link className='text-decoration-none' to='/'>
              Login?
            </Link>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  )
}

function ResetAlert (action = 'normal', onclick = () => {}) {
  switch (action) {
    case 'WRONG': return (
        <WrongAlert
          title='Reset Password'
          body={
            <>
              Hi, we haven't sent please try again with{' '}
              <strong> correct Email</strong>
              go through and check that
              <OverlayTrigger
                overlay={<Tooltip>Redo</Tooltip>}
                placement='top'
                delayShow={300}
                delayHide={150}
              >
                <AiOutlineRedo onClick={onclick} />
              </OverlayTrigger>
            </>
          }
        />
      );
    case 'SENT':
      {
        const { email, date } = getCookie('pswreset');
        const substring = email.substring(0, 9);
        return (
          <SuccessAlert
            title='Reset Password'
            icon={<BsEnvelopeCheckFill />}
            body={
              <>
                Hi {email.substring(0, email.indexOf('@'))}, we have Already
                sent reset link via
                <em>

                  <code>
                    {email.replace(substring, '*********')}
                  </code>
                </em>
                check your email<br/>
                Email Sent at<time>
                  <small>{date}</small>
                </time>
              </>
            }
          />
        );
      }
    case 'CORRECT':
      return (
        <SuccessAlert
          title='Reset Password'
          icon={<BsEnvelopeCheckFill />}
          body={
            <>Hi , we have Scussfully sent reset link via check your email</>
          }
        />
      );
    default:
      return null
  }
}
