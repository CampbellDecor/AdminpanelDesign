import React from 'react'
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRow
} from 'mdb-react-ui-kit'
import { Packages } from '../../component/Packages'
import { IoMdAddCircle } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { packset } from '../../redux/Slice/Packages'
import {PackageBookingAnyalis,SmallHomeDonut} from '../../component/Util/Graph'
export default function PackagePages ()
{
  const packs = useSelector(packset);
  return (
    <MDBContainer className='min-vh-100'>
      <MDBBtn href='/pack/add' className='position-fixed' style={{ right: "10px", backgroundColor: "#c59290" }}>
<IoMdAddCircle size={25}/>
      </MDBBtn>
      <MDBRow>
        {
  packs.map(p => <Packages packageID={p} key={p} />)
}

      </MDBRow>
      <MDBRow className='border-top border-1 mt-3'>
        <h3>Packages Analysis</h3>
        <MDBCol>
          <PackageBookingAnyalis
/>
        </MDBCol>
        <MDBCol>
          <SmallHomeDonut maintainAspectRatio={ true} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  )
}
