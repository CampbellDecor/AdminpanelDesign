// @ts-nocheck
import React, { useEffect } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import { MdAdd } from 'react-icons/md'
import { useServiceStore } from '../../redux/ServiceStore'
import { useDispatch, useSelector } from 'react-redux'
import { ServiceRow } from '../../component/Service'
import Loading from '../Bugs/FetchedLoading'
import APIerror from '../Bugs/FetchedError'
import {MDBImageComponent} from '../../component/Util/CardImg'
export default function Service () {
  const { getservice } = useServiceStore()
  const Dispatcher = useDispatch()
  const { services, loading, result } = useSelector(state => state.service)
  useEffect(() => {
    Dispatcher(getservice())
  }, [Dispatcher])
  return loading ? (
    <Loading/>
  ) : (
    <MDBContainer fluid>
      <MDBRow className='w-100'>
        <MDBCol md='12' lg='9'>
          {result === 'fetched' ?
            services.map((service, index) => (
              <ServiceRow {...service} key={index} />
            )):<APIerror/>}
        </MDBCol>

        <MDBCol md='none' lg='3'>
          <OneService />
        </MDBCol>
      </MDBRow>
      <Link>
        <MdAdd />
      </Link>
    </MDBContainer>
  )
}

function OneService ({ serviceid })
{
  
  return (
    <MDBRow className='mt-3 position-fixed'>
      <div className='sigleService d-flex d-lg-block w-100'>
       <MDBImageComponent src='https://pbs.twimg.com/profile_images/1644061982239387648/4pxcTG5J_400x400.jpg' className="w-100" fluid/>
        <h1></h1>
        <div></div>
      </div>
    </MDBRow>
  )
}
