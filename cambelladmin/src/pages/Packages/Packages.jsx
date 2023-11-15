import React from 'react'
import {
  MDBBtn,
  MDBContainer
} from 'mdb-react-ui-kit'
import { UsePackStoe } from '../../redux/Packages';
import { Packages } from '../../component/Packages'
import { IoMdAddCircle } from 'react-icons/io'
export default function PackagePages ()
{
  const {PackData
  } = UsePackStoe();
  const { packs } = PackData;
  return (
    <MDBContainer className='min-vh-100'>
      <MDBBtn href='/pack/add' className='position-fixed' style={{right:"10px"}}>
<IoMdAddCircle size={25}/>
      </MDBBtn>
      {packs.map(p => <Packages {...p} />)}
    </MDBContainer>
  )
}
