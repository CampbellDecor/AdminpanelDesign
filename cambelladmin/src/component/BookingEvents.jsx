import React from 'react'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon
} from 'mdb-react-ui-kit'


export default function BookingEvents ({eventUrl,eventid,eventName}) {
  return (
          <MDBCard className='text-black'>
            <MDBCardImage
        src={eventUrl??'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp'}
              position='top'
              alt='events'
            />
            <MDBCardBody style={{height:"50px"}}>
              <div className='text-center'>
          <MDBCardTitle>{ eventName}</MDBCardTitle>

              </div>
            </MDBCardBody>
          </MDBCard>
  )
}
