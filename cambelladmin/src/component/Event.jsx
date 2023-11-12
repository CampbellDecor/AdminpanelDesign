import React from 'react'

import
  {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple
} from 'mdb-react-ui-kit'

export default function Event({index,imgURL,eventid,name,added,price=0}) {
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
            <h5>
              <span className='badge bg-primary ms-2'>New</span>
            </h5>
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
          <h6 className='mb-3'>$ { price}</h6>
    </MDBCardBody>
  </MDBCard>
</MDBCol>

  )
}
