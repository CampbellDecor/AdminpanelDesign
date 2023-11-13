import React, { useEffect } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
} from 'mdb-react-ui-kit'

import {UsePackStoe} from '../redux/Packages'
export default function BookingEvents ()
{
  const { onePackData } = UsePackStoe();
  const {onepackage} = onePackData;
  useEffect(() =>
  {
    console.log(onepackage);
  })
  return (
          <MDBCard className='text-black'>
            <MDBCardImage
        src={onepackage?.imgURL??'https://firebasestorage.googleapis.com/v0/b/campbelldecor-c2d1f.appspot.com/o/Packages%2FGet_Together.jpg?alt=media&token=4610523d-ce39-461b-aa14-faa5ee60c245'}
              position='top'
              alt='events'
            />
            <MDBCardBody style={{height:"50px"}}>
              <div className='text-center'>
          <MDBCardTitle>{onepackage?.packageName ??"Happilly Get Together "}</MDBCardTitle>
{/* <p className='text-muted mb-4'>Apple pro display XDR</p> */}

              </div>
            </MDBCardBody>
          </MDBCard>
  )
}
