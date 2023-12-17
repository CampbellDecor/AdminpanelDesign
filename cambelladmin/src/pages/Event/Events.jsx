import React from 'react'
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit'

import Event from '../../component/Event'
import { useSelector } from 'react-redux'
import { eventset } from '../../redux/Slice/Events'
import OprationEvent from './AddEventsEdit';
import {EventAnylsis} from '../../component/Util/Graph';
export default function Events () {
  const events = useSelector(eventset)

  return (
    <MDBContainer fluid className='my-5 text-center min-vh-100'>
      <OprationEvent />

      <h4 className='mt-4 mb-5'>
        <strong>Campbell Decor Events</strong>
      </h4>

      <MDBRow>
        {events &&
          events.map((eventcode,index) => (
            <Event eventcode={eventcode} index={index} />
          ))}
      </MDBRow>
      <MDBRow>
        <EventAnylsis/>
      </MDBRow>
    </MDBContainer>
  )
}
