import React,{  useEffect,useState} from 'react';
import { Container,Row,Form,Col} from 'react-bootstrap';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody,MDBInputGroup,MDBInput,MDBIcon} from 'mdb-react-ui-kit';
import {FaUserSlash,FaUserCheck} from "react-icons/fa";
import axios from "axios";

function UserRows ( { username, profile, isBlock, isOnline, email, religion, uid, mobile } ){
  return (
      <tr>
        <td>
          <div className='d-flex align-items-center'>
            <img
              src={profile}
              alt=''
              style={{ width: '45px', height: '45px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
            <p className='fw-bold mb-1'>{ username}</p>
            <p className='text-muted mb-0'>{email}</p>
            </div>
          </div>
        </td>
        <td>
        <p className='fw-normal mb-1'>{religion }</p>
        <p className='text-muted mb-0'>{ mobile}</p>
        </td>
      <td>{
        isBlock ? ( <MDBBadge color='danger' pill>
          Blocked/{isOnline?"Online":"Offline"}
        </MDBBadge> ) : ( <MDBBadge color='warning' pill>
            unBlocked
          </MDBBadge>)
      }
        
        </td>
        <td>{Math.floor(Math.random()*20)}</td>
        <td>
          <MDBBtn color='link' rounded size='sm'>
            Edit
          </MDBBtn>
          <MDBBtn color='link' rounded size='sm'>
            Block
          </MDBBtn>
        </td>
      </tr>
  )
}
export default function Users ()
{
  const [ user, setUser ] = useState( [] );
  useEffect( () =>
  {
    axios.get("/api/user/")
    .then(users=>setUser(users))
  }, [] );
    return(
    <Container className="position-relative">
        <Row>
            <Col lg={4}>
            <MDBInputGroup>
      <MDBInput label='Search' />
      <MDBBtn rippleColor='dark'>
        <MDBIcon icon='search' />
      </MDBBtn>
    </MDBInputGroup>
            </Col>
            <Col lg={8} className="d-flex w-100 justify-content-end align-items-center">
      <span>
      <div>
          <Form.Check
            inline
            label={<FaUserCheck/>}
            name="group1"
          />
          <Form.Check
            inline
            label={<FaUserSlash/>}
            name="group1"
          />
        </div>
      </span>
            </Col>
        </Row>
<MDBTable align='middle'>
      <MDBTableHead >
        <tr>
          <th scope='col'>Profile</th>
          <th scope='col'>User Name</th>
          <th scope='col'>Status</th>
          <th scope='col'>Bookings</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {/* {
          users.map(us=>( <UserRows/>))
        } */}
    
      {/* <UserRows/>
      <UserRows/>
      <UserRows/>
      <UserRows/>
      <UserRows/>
      <UserRows/> */}
       
      </MDBTableBody>
    </MDBTable>
    </Container>

    )

}
