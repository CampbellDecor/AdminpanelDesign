import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';
import { Spinner } from 'react-bootstrap';

export function SubmitButton ({ attribute, btncontent,loading=false,disabled=false})
{
  return (
    <MDBBtn {...attribute} type='submit' disabled={disabled}>
      {
        loading ? <Spinner as='span'
          animation='border'
          size='sm'
          role='status'
          aria-hidden='true'
        /> : btncontent
      }
    </MDBBtn>
  );
}
export function NormalButton ({
  onClick,
 btncontent,
  attribute,
  loading = false,
  disabled = false,

}) {
  return (
    <MDBBtn {...attribute} onClick={onClick} disabled={disabled}>
      {loading ? (
        <Spinner
          as='span'
          animation='border'
          size='sm'
          role='status'
          aria-hidden='true'
        />
      ) : (
        btncontent
      )}
    </MDBBtn>
  )
}
