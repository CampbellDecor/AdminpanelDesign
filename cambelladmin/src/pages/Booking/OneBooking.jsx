import React from 'react'
import Todo from './TodoList'
import User from '../../component/BookingUser'
import { Container, Row } from 'react-bootstrap'
import { MDBCol } from 'mdb-react-ui-kit'
import Events from '../../component/BookingEvents'
import { BookingEvents } from '../../component/Util/Calender'
import { useLoaderData } from 'react-router-dom'
export default function OneBooking () {
  const loader = useLoaderData()
  return (
    <Container fluid className='min-vh-100 Onebook'>
      <Row>
        <MDBCol md='6' lg='9'>
          <Row>
            <MDBCol md='6' lg='4' className='bookEvent'>
              <BookingEvents
                eventDate={loader?.eventDate}
                status={loader?.status}
                bookDate={loader?.bookDate}
              />
            </MDBCol>
            <MDBCol md='6' lg='8'>
              <Events search={loader.name}/>
            </MDBCol>
          </Row>
        </MDBCol>

        <MDBCol md='6' lg='3'>
          <User userdata={loader.user} />
        </MDBCol>
      </Row>
      <Row>
        <Todo />
      </Row>
    </Container>
  )
}
