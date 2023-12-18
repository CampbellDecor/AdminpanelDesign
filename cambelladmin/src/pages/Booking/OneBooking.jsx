import React, { useEffect } from 'react'
import Todo from './TodoList'
import User from '../../component/BookingUser'
import BookingPayment from '../../component/BookingPayment'
import { Container, Row } from 'react-bootstrap'
import { MDBCol, MDBRow } from 'mdb-react-ui-kit'
import Events,{QrPanal} from '../../component/BookingEvents'
import { BookingEvents } from '../../component/Util/Calender'
import { useLoaderData } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getTasks } from '../../redux/Thunks/Booking'
import { BsQrCode } from 'react-icons/bs';

export default function OneBooking () {
  const Dispatcher = useDispatch()
  const loader = useLoaderData()
  useEffect(() => {
    Dispatcher(getTasks(loader.bookid))
  }, [Dispatcher])

  return (
    <Container fluid className='min-vh-100 Onebook'>
      <Row>
        <MDBCol sm='12' md='6' lg='6'>
          <Events search={loader?.name} bookcode={loader?.bookid} />
        </MDBCol>
        <MDBCol sm='12' md='6' lg='6'>
          <MDBRow>
            <MDBCol>
              <BookingEvents
                eventDate={loader?.eventDate}
                status={loader?.status}
                bookDate={loader?.bookDate}
              />
            </MDBCol>
            <MDBCol>
      <BookingEvents
  eventDate={loader?.eventDate}
  status={loader?.status}
  bookDate={loader?.bookDate}
/>

            </MDBCol>
          </MDBRow>
          <MDBRow className='my-2'>
            <MDBCol>
              <User userdata={loader.user} />
            </MDBCol>
            <MDBCol>
              <BookingPayment bookcode={loader.bookid} />
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </Row>
      {loader?.status!=='cancelled' && loader?.status!=='rejected'&&<Row>
        <Todo bookingcode={loader.bookid} />
      </Row>}
    </Container>
  )
}
