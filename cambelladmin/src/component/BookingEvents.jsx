import React from 'react'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle
} from 'mdb-react-ui-kit'
import { SearchpackByName } from '../redux/Slice/Packages'
import { EventBySearchName } from '../redux/Slice/Events'
import { OneBooking } from '../redux/Slice/Booking'
import { useSelector,useDispatch } from 'react-redux'
import { Card } from 'react-bootstrap'
import {ApproveBooking,RejectBooking} from "../redux/Thunks/Booking"
import { toast } from 'react-toastify';
export default function BookingEvents ({ search, bookcode })
{
  const Dispatcher = useDispatch();
  let BookItem;
  if (SearchpackByName(search)) {
    BookItem = SearchpackByName(search)
  } else {
    BookItem = EventBySearchName(search)
  }
  const booking = useSelector(state => OneBooking(state, bookcode))
  const onApprove = () =>
  {
    Dispatcher(ApproveBooking(bookcode));
    toast.success("Active the Event");
  }
  const onReject = () => {
  Dispatcher(RejectBooking(bookcode))
  toast.success('Rejected the Event')
}

  return (
    <MDBCard className='text-black'>
      <MDBCardImage
        src={
          BookItem?.imgURL ??
          'https://firebasestorage.googleapis.com/v0/b/campbelldecor-c2d1f.appspot.com/o/Packages%2FGet_Together.jpg?alt=media&token=4610523d-ce39-461b-aa14-faa5ee60c245'
        }
        position='top'
        alt='events'
        height='300px'
      />
      <MDBCardBody style={{ height: '100px' }}>
        <div className='text-center'>
          <MDBCardTitle>{BookItem?.name ?? 'Happilly'}</MDBCardTitle>
          <MDBCardText>
            book at <small>{' ' + booking?.bookDate}</small>
          </MDBCardText>
          <p className='text-muted mb-5'>$ {BookItem?.price ?? 0}</p>
        </div>
      </MDBCardBody>
      <MDBCardFooter className='d-flex justify-content-center align-items-center mt-2'>
        <div className='w-50'>
          <MDBBtn
            color='warning'
            className='mx-2'
            disabled={booking?.status !== 'pending'}
            onClick={onApprove}
          >
            Approve
          </MDBBtn>
          <MDBBtn
            color='danger'
            className='mx-2'
            onClick={onReject}
          >
            Cancel
          </MDBBtn>
        </div>
      </MDBCardFooter>
    </MDBCard>
  )
}


export function QrPanal ({bookcode})
{
  return (
    <Card>
  <Card.Img variant='top' src='holder.js/100px180' />
  <Card.Body>
    <Card.Text>
      {bookcode}
    </Card.Text>
  </Card.Body>
</Card>

  )
}
