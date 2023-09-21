// @ts-nocheck
import React, {
  useEffect,
} from 'react';
import {Container,Pagination} from 'react-bootstrap';
import {  MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';
import {UserRows} from "../component/User";
import {getUser,blockfilter} from '../Slice/UserSlice';
import {useDispatch,useSelector } from 'react-redux';

export default function Users ()
{
  const { result,loading,displayData } = useSelector( state =>state.user );
  const dispatcher = useDispatch();
  useEffect( () =>
  {
    dispatcher( getUser() );
  
  },[dispatcher]);
  
    return loading?(<h1>Loading</h1>):(
      <Container className="position-relative vh-100">
        <button onClick={ () =>
        {
          dispatcher( blockfilter() );
        }}>b</button>
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
              result === "fetched" ? ( displayData.map( ( userdataset, index ) => ( <UserRows { ...userdataset } key={ index } /> ) ) ) : ( <h1>{result}</h1>)
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


