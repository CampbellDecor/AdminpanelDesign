import React, { useEffect } from 'react'
import Todo from './TodoList'
import User from '../../component/BookingUser'
import { Container, Row } from 'react-bootstrap'
import { MDBCol } from 'mdb-react-ui-kit'
import Events from '../../component/BookingEvents'
import { BookingEvents } from '../../component/Util/Calender'
import { useLoaderData, useParams } from 'react-router-dom'
import { useUserStore } from '../../redux/UserStore'
import { useBookingStore } from '../../redux/BookStore'
import { UsePackStoe } from '../../redux/Packages'
import { useDispatch } from 'react-redux'
export default function OneBooking () {
  const loader = useLoaderData()
  const bookid = useParams()
  const { getBookUser } = useUserStore()
  const { getOneBookThunk, getTodo } = useBookingStore()
  const { getOnePackByName} = UsePackStoe()
  const Dispatcher = useDispatch()
  useEffect(() => {
   Dispatcher(getOneBookThunk(loader?.bookid))

  }, [])
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
              <Events/>
            </MDBCol>
          </Row>
        </MDBCol>

        <MDBCol md='6' lg='3'>
          <User />
        </MDBCol>
      </Row>
      <Row>
        <Todo />
      </Row>
    </Container>
  )
}
