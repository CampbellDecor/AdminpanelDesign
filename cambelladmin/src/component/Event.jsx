import React from 'react'

import
  {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple
} from 'mdb-react-ui-kit'
import { useSelector } from 'react-redux'
import { OneEvent } from '../redux/Slice/Events'
import { MdDeleteOutline } from 'react-icons/md'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { deleteEvents } from '../redux/Thunks/Events'
import swal from "sweetalert2";
export default function Event ({ index, eventcode})
{
  const Dispatcher = useDispatch();
  const { imgURL, name, added, price = 0 } = useSelector(state => OneEvent(state, eventcode));
  const onDelete = async() =>
  {
   const result=await swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to Delete this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#c59290',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes'
})
    if (result.isConfirmed)
    {
      Dispatcher(deleteEvents(eventcode));
      swal.fire({
  title: 'Deleted!',
  text: 'Your file has been deleted.',
  icon: 'success'
})

}

  }
  return (

    <MDBCol md={((index+1)*3-1)!==0 || (index+1) % 3 === 0?'6':'12'} lg='4' className='mb-4' >
  <MDBCard>
    <MDBRipple
      rippleColor='light'
      rippleTag='div'
      className='bg-image rounded hover-zoom'
    >
      <MDBCardImage
        src={imgURL}
        fluid
            className='w-100'
            style={{height:"200px"}}
      />
      <a href='#!'>
        <div className='mask'>
          <div className='d-flex justify-content-start align-items-end h-100'>

          </div>
        </div>
        <div className='hover-overlay'>
          <div
            className='mask'
            style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
          ></div>
        </div>
      </a>
    </MDBRipple>
        <MDBCardBody>


      <a href='#!' className='text-reset'>
            <h5 className='card-title mb-3'>{ name}</h5>
      </a>
      <a href='#!' className='text-reset'>
            <p>added:{ added}</p>
      </a>
          <h6 className='mb-3'>$ {price}</h6>
          <h5 className='d-flex justify-content-end'>
  <Button onClick={onDelete} className='badge bg-primary ms-2 bg-danger'>
    <MdDeleteOutline size={20}/>
  </Button>
</h5>

    </MDBCardBody>
  </MDBCard>
</MDBCol>

  )
}
