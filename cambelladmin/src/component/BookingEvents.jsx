import React, {useMemo } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
} from 'mdb-react-ui-kit'

export default function BookingEvents ({search})
{
  const packs = [];
  const BookItem = useMemo(() =>
  {
    const regx = new RegExp(search, 'ig');
    const res = packs.find(ele => regx.test(ele.name))
    console.log(res)
    return res
},[packs,search])
  return (
          <MDBCard className='text-black'>
            <MDBCardImage
        src={BookItem?.imgURL??'https://firebasestorage.googleapis.com/v0/b/campbelldecor-c2d1f.appspot.com/o/Packages%2FGet_Together.jpg?alt=media&token=4610523d-ce39-461b-aa14-faa5ee60c245'}
              position='top'
              alt='events'
            />
            <MDBCardBody style={{height:"50px"}}>
              <div className='text-center'>
          <MDBCardTitle>{BookItem?.name ??"Happilly"}</MDBCardTitle>
{/* <p className='text-muted mb-4'>Apple pro display XDR</p> */}

              </div>
            </MDBCardBody>
          </MDBCard>
  )
}
