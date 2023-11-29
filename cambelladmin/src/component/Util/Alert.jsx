import React from 'react'
import { Alert } from 'react-bootstrap'
import { BsExclamationCircleFill } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai'


export function SuccessAlert ({title,body,icon=null})
{
  return (
   <Alert variant='success custom-alert'>
          <Alert.Heading>{title }</Alert.Heading>
  <p>
            {icon??<BsExclamationCircleFill/> } {body}
  </p>
</Alert>

  )
}
export function WrongAlert ({ title, body,icon=null }) {
  return (
    <Alert variant='danger custom-alert
'>
          <Alert.Heading>{ title}</Alert.Heading>
      <p>
        {
  icon ?? <AiFillCloseCircle/>
} {body}
      </p>
    </Alert>
  )
}
