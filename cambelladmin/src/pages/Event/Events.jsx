import React from 'react'
import {
  MDBContainer,
  MDBRow
} from 'mdb-react-ui-kit'

import Event from '../../component/Event'
export default function Events ()
{
const events=[]

  return (
    <MDBContainer fluid className='my-5 text-center min-vh-100'>
      <h4 className='mt-4 mb-5'>
        <strong>Campbell Decor Events</strong>
      </h4>

      <MDBRow>

        {events && events.map((ev,index) => <Event {...ev} index={index} />)}
      </MDBRow>
    </MDBContainer>
  )
}
