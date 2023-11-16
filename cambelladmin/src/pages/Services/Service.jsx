// @ts-nocheck
import React from 'react'
import { MDBContainer, MDBRow, MDBCol,MDBBtn } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import { MdAdd } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { ServiceRow } from '../../component/Service'
import Loading from '../Bugs/FetchedLoading'
import APIerror from '../Bugs/FetchedError'
import { MdHomeRepairService} from 'react-icons/md';


export default function Service (){
  const  services=[], loading=false, result='fetched' 


  return loading ? (
    <Loading />
  ) : (

      <MDBContainer fluid>
        <MDBBtn className='right-0' style={{position:'fixed',top:'60px',right:"20px"}} href='service/add'>
<MdHomeRepairService size={20} />

        </MDBBtn>
          <MDBRow className='w-100'>
            <MDBCol md='12' lg='9'>
              {result === 'fetched' ? (
                services.map((service, index) => (
                  <ServiceRow {...service} key={index} />
                ))
              ) : (
                <APIerror />
              )}
            </MDBCol>

          <MDBCol md='12' lg='3'>

            </MDBCol>
          </MDBRow>
          <Link>
            <MdAdd />
          </Link>
        </MDBContainer>

  )
}
