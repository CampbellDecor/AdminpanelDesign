import React,{useState,useEffect} from 'react';
import {Container,Row,Col,Form,Table} from 'react-bootstrap'
import { UserRow } from '../component/users'
export default function Users (){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    const use=[{
      username:"ThanuMahee",
      profile:"",
      mobile:"0766859048",
      email:"thanumahee440@gmail.com",
      religion:"Hindu",
      booking:{
        count:3
      }
    },
    {
      username:"ThanuMahee",
      profile:"",
      mobile:"0766859048",
      email:"thanumahee440@gmail.com",
      religion:"Hindu",
      booking:{
        count:3
      }
    }
  ]
  setUsers(use);
  },[])
    return(
      <Container fluid className='mb-5'>
        <Row className='w-100 shadow-lg d-flex'>
          <Col sm={6} >
          <Form.Select size="sm" className="w-25 border-0 mt-2">
        <option>All</option>
        <option>Hindu</option>
        <option>Christiant</option>
        <option>Buddist</option>
      </Form.Select>
      
          </Col>
          <Col sm={6}>
          </Col>
        </Row>
        <Row className="mt-4">
        <Table striped bordered hover responsive className="bg-white">
      <thead className="bg-light">
    <tr>
      <th className='fw-bold h5'>Full Name</th>
      <th className='fw-bold h5'>Mobile</th>
      <th className='fw-bold h5'>Religion</th>
      <th className='fw-bold h5'>Num_Book</th>
      <th className='fw-bold h5'>Actions</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map(user=>(<UserRow {...user}/>))
    }
  </tbody>
</Table>
        </Row>

       
</Container>
    )

}