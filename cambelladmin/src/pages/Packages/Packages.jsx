import React from 'react'
import {
  MDBBtn,
  MDBContainer
} from 'mdb-react-ui-kit'
import { Packages } from '../../component/Packages'
import { IoMdAddCircle } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { packset } from '../../redux/Slice/Packages'

export default function PackagePages ()
{
  const packs = useSelector(packset);
  return (
    <MDBContainer className='min-vh-100'>
      <MDBBtn href='/pack/add' className='position-fixed' style={{right:"10px",backgroundColor:"#c59290"}}>
<IoMdAddCircle size={25}/>
      </MDBBtn>
      {packs.map(p => <Packages packageID={p} key={p}/>)}
    </MDBContainer>
  )
}
