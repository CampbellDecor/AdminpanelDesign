import { MDBCard, MDBCardBody, MDBCol } from 'mdb-react-ui-kit'
import React from 'react'
import { MDBImageComponent } from './Util/CardImg'
import Stars from 'react-rating-stars-component'
import { useSelector } from 'react-redux'
import { oneCategory } from '../redux/Slice/ServiceCategory'
export default function Categorey ({ cid }) {
  const { imgURL, name, price, rating = 0 } = useSelector(state =>
    oneCategory(state, cid)
  )

  return (
    <MDBCol sm='12' md='6' lg='4' className='mb-5 mb-lg-3'>
      <MDBCard>
        <MDBImageComponent style={{ height: '220px' }} src={imgURL} />
        <MDBCardBody>
          <div className='d-flex justify-content-between'>
            <p className='small'>
              <a href='#!' className='text-muted'>
                {name}
              </a>
            </p>
            <p className='small text-danger'>
              <s>${'fgfgfd'}</s>
            </p>
          </div>

          <div className='d-flex justify-content-between mb-3'>
            <h5 className='mb-0'>{name}</h5>
            <h5 className='text-dark mb-0'>{price}</h5>
          </div>

          <div className='d-flex justify-content-between mb-2'>
            <p className='text-muted mb-0'>
              Available: <span className='fw-bold'>6</span>
            </p>
            <Stars count={5} value={rating} />
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}
