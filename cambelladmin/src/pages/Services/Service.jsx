import React from 'react'
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit'
import { Service } from '../../component/Service'
import { IoMdAddCircle } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { serviceset } from '../../redux/Slice/Service'

export default function ServicePages () {
  const service = useSelector(serviceset)
  return (
    <MDBContainer className='min-vh-100'>
      <MDBBtn
        href='/pack/add'
        className='position-fixed'
        style={{ right: '10px', backgroundColor: '#c59290' }}
      >
        <IoMdAddCircle size={25} />
      </MDBBtn>
      {service.map(p => (
        <Service servicecode={p} key={p} />
      ))}
    </MDBContainer>
  )
}
