import React, { useEffect } from 'react'
import Todo from './TodoList'
import User from '../../component/BookingUser'
import BookingPayment,{QRShow} from '../../component/BookingPayment'
import { Container, Row } from 'react-bootstrap'
import { MDBCol } from 'mdb-react-ui-kit'
import Events from '../../component/BookingEvents'
import { BookingEvents } from '../../component/Util/Calender'
import { useLoaderData } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getTasks } from '../../redux/Thunks/Booking'

export default function OneBooking ()
{
  const Dispatcher = useDispatch()
  const loader = useLoaderData()
  useEffect(() =>
  {
    Dispatcher(getTasks(loader.bookid))

  },[Dispatcher])

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
              <QRShow bookcode={loader.bookid}/>
            </MDBCol>
            <MDBCol md='6' lg='8'>
              <Events search={loader?.name} bookcode={loader?.bookid}/>
            </MDBCol>
          </Row>
        </MDBCol>

        <MDBCol md='6' lg='3'>
          <User userdata={loader.user} />
          <BookingPayment bookcode={loader.bookid} />
        </MDBCol>
      </Row>
      <Row>
        <Todo bookingcode={loader.bookid} />
      </Row>
    </Container>
  )
}
