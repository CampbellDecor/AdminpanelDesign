// @ts-nocheck
import React, { useEffect } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import { MdAdd } from 'react-icons/md'
import { useServiceStore } from '../../redux/ServiceStore'
import { useDispatch, useSelector } from 'react-redux'
import { ServiceRow } from '../../component/Service'
import Loading from '../Bugs/FetchedLoading'
import APIerror from '../Bugs/FetchedError'

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
          {result === 'fetched' &&
            services.map((service, index) => (
              <ServiceRow {...service} key={index} />
            ))}
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

function OneService () {
  return (
    <MDBRow className='mt-3'>
      <div className='sigleService d-flex d-lg-block w-100'>
        <Image
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0XsUFZgRQYsDnY_vKWmTGBdmQmET-a6R35g&usqp=CAU'
          className='w-100'
        />
        <div className='flex'></div>
        <div></div>
      </div>
    </MDBRow>
  )
}
