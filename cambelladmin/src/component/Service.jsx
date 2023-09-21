import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBRipple, MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import { MDBImageComponent } from "./Util/CardImg";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
export function ServiceRow ( { servicecode,intro, image, servicename, rating=2, numberofBooking=0,Culture=["common"],description,price=0.00,Prioed,subTotal=0,relatedevent=0} ) {
    return (
      <MDBRow className="justify-content-center mb-0 w-100" key={servicecode}>
        <MDBCol sm="10" md="11" lg="12">
          <MDBCard className="shadow-0 border rounded-3 my-2">
            <MDBCardBody>
              <MDBRow>
                <MDBCol  md="3" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >
                    <MDBImageComponent src={image} className="w-100" fluid />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      />
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol md="6">
                  <h5>
                    {servicename}
                  </h5>
                  <div className="d-flex flex-row">
                    <div>
                    <ReactStars
      count={5}
                                        edit={ false }
                                        value={rating}
                        size={ 25 }
                        half={true}
                                      
      activeColor="#ffd700"
    />
                    </div>
          
                                    <span>{rating} </span>
                  </div>
                  <div className="mt-1 mb-0 text-muted small">
                                    <span>{10}</span>
                    <span className="text-primary"> • </span>
                    <span>
                    <Link className="text-muted text-decoration-none" to={ "" }>{numberofBooking} Events</Link>
                                    </span>
                    <span className="text-primary"> • </span>
                    <span>
                    <Link className="text-muted text-decoration-none" to={ "" }>{numberofBooking} Bookings</Link>
                      <br />
                    </span>
                  </div>
                  <div className="mb-2 text-muted small">
                    { Culture && Culture.map( cul => ( <>
                      <span>{ cul}</span>
                    <span className="text-primary"> • </span>
                    </> ) ) }
                  
                  </div>
                  <p className="text-truncate mb-4 mb-md-0">
                    {description}
                  </p>
                </MDBCol>
                <MDBCol
                  sm="6"
                  md="3"
                  className="border-sm-start-none border-start"
                >
                  <div className="d-flex flex-row align-items-center mb-1">
                                    <h4 className="mb-1 me-1">${ price}</h4>
                    <span className="text-danger">
                                        <s>{ Prioed}</s>
                    </span>
                  </div>
                                <h6 className="text-success">Earning:{ subTotal}</h6>
                  <div className="d-flex flex-column mt-4">
                    <MDBBtn color="primary" size="sm">
                      Details
                    </MDBBtn>
                    <MDBBtn outline color="primary" size="sm" className="mt-2">
                      Edit
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
  