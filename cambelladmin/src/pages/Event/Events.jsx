import React from 'react'
import {
  MDBContainer,
  MDBRow
} from 'mdb-react-ui-kit'
import {useEventStore} from '../../redux/EventStore'
import Event from '../../component/Event'
export default function Events ()
{
  const { EventData

  } = useEventStore();
  const {events } = EventData;

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
