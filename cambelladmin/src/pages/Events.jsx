import React from "react";
import
  {
    MDBContainer,
    MDBRow,
    MDBCol
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { MdAdd } from "react-icons/md";
import { EventRow } from "../component/Event";
import {events } from "../store/FakeData";
  export default function Events(){

    return (
        <MDBContainer fluid>
          <MDBRow className="w-100">
            <MDBCol md="7" lg="9">
           {events.map(e=>(<EventRow {...e} />))} 
              </MDBCol> 
            
             <MDBCol md="5" lg="3">
              <OneService/>
             </MDBCol>
          </MDBRow>
      <Link><MdAdd/></Link>
      </MDBContainer>
    )
  }

  
  function OneService(){
    return (
      <MDBRow className="mt-3">
        <div className="sigleService d-flex d-lg-block w-100">
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0XsUFZgRQYsDnY_vKWmTGBdmQmET-a6R35g&usqp=CAU" className="w-100"/>
        <div className="flex">
        
        </div>
        <div>
          
        </div>
        </div>
      </MDBRow>
    )
  }