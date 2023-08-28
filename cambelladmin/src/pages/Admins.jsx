import React, { useEffect, useState } from 'react';
import { Container,Row } from 'react-bootstrap';
import axios from "axios";
import { MDBCol, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
export default function Admins (){
  const [admins,setAdmins]=useState([]);
  useEffect( () =>
  {
    setAdmins( [
      {
        profile: null,
        username: "Thanush",
        email: "gfgfdgfdg",
        working: 5
      },
      {
        profile: null, username: "Thanush", email: "gfgfdgfdg", working: 6
       }
    
    ] );
},[])
    return(
<Container className="vh-100">
<Row>
  {
            admins.map( ad => ( <Admin {...ad} />))
  }
        

</Row>
</Container>

    )

}

function Admin({profile,username,email,working}){
    return (
        <MDBCol md="9" lg="6" xl="4" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '100px', borderRadius: '10px' }}
                      src={profile??'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'}
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle className='text-capitalize'>{username}</MDBCardTitle>
                    <MDBCardText>{email}</MDBCardText>

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <p className="small text-muted mb-1">Experience</p>
                        <p className="mb-0">{working}</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Followers</p>
                        <p className="mb-0">976</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Rating</p>
                        <p className="mb-0">8.5</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <MDBBtn outline className="me-1 flex-grow-1">Edit</MDBBtn>
                      <MDBBtn className="flex-grow-1">Contact</MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
    )
}