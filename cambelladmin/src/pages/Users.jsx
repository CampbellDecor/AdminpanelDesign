// @ts-nocheck
import React, {
  useEffect, useState,
} from 'react';
import {Container,Form,Pagination, Row,Button,Col} from 'react-bootstrap';
import {  MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';
import {UserRows} from "../component/User";
import { getUser,getBlockUser } from '../Slice/UserSlice';
import {useDispatch,useSelector } from 'react-redux';

export default function Users ()
{
  const { result, loading, users } = useSelector( state => state.user );
  const dispatcher = useDispatch();
  const [ blockuser, setblockuser ] = useState( { block: false, unblock: false } );
  useEffect( () =>
  {
    dispatcher( getUser() );
  
  },[dispatcher]);
  
    return loading?(<h1>Loading</h1>):(
      <Container className="position-relative vh-100">
        <Row className='sticky-top pb-3'>
          <Col md='5'>
              
          
            <Form.Select className="w-50">
                   <option value="unknown" selected>UnKnow</option>
              <option value="Hindu">Hindu</option>
              </Form.Select>
               
          </Col>
          <Col className="text-md-right d-flex justify-content-end" md="7">
            <div className='w-50 mr-0'>
            <Form.Check
            inline
            label="block"
            name="block"
                type="checkbox"
                onChange={ () =>
                {
                  dispatcher( getBlockUser( "block" ) );
                  setblockuser( { block: true, unblock: false } );
                } }
                checked={blockuser.block}
            />
            <Form.Check
                inline
                 checked={blockuser.block}
            label="unblock"
            name="block"
                type="checkbox"
                onChange={ () =>
                {
                  dispatcher( getBlockUser( "unblocked" ) )
                  setblockuser( { block: false, unblock: true } );
                }}
              />

               <Button>
            Add
            </Button>
            </div>
        
         
            
          </Col>
         
        </Row>
<MDBTable align='middle' >
      <MDBTableHead >
        <tr>
          <th scope='col'>User</th>
          <th scope='col'>Info</th>
          <th scope='col'>Status</th>
          <th scope='col'>Bookings</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
            {
              result === "fetched" ? ( users.map( ( userdataset, index ) => ( <UserRows { ...userdataset } key={ index } /> ) ) ) : ( <h1>{result}</h1>)
        }
       
          </MDBTableBody>
          <MDBTableBody>
            <tr>
              <td colSpan={ 5 }>
                <div className='w-100 d-flex justify-content-center align-items-center'>
              <Pagination className='p-2'>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>1</Pagination.Item>
              <Pagination.Item>1</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>9</Pagination.Item>
              <Pagination.Item>10</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
                  </Pagination>
                  </div>
              </td>
           
            </tr>
          
          </MDBTableBody>
         
    </MDBTable>
    </Container>

    )

}


