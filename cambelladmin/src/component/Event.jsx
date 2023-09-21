import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRipple,
  MDBRow
} from "mdb-react-ui-kit";
import React from "react";
import { MDBImageComponent } from "./Util/CardImg";
import ReactStars from "react-rating-stars-component";
import logo from "../images/logo.png";
export function Event ( { eventcode, image={logo}, name, rating=0, numberofBooking=0,Culture="common",description,Price=0,Prioed="unknown",subTotal=0,relatedServices=0,index} ) {
  return (
    <MDBRow className="justify-content-center mb-0" >
      <MDBCol md="12" xl="10">
        <MDBCard className="shadow-0 border rounded-3 mt-3 mb-3">
          <MDBCardBody>
            <MDBRow>
              <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
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
                  {name}
                </h5>
                <div className="d-flex flex-row">
                <ReactStars
    count={5}
                                      edit={ false }
                                      value={rating}
                                      size={ 24 }
                                    
    activeColor="#ffd700"
  />
                                  <span>{numberofBooking} </span>
                </div>
                <div className="mt-1 mb-0 text-muted small">
                                  <span>{ Culture}</span>
                  <span className="text-primary"> • </span>
                                  <span>{ relatedServices} Services</span>
                  <span className="text-primary"> • </span>
                  <span>
                    Best finish
                    <br />
                  </span>
                </div>
                <div className="mb-2 text-muted small">
                  <span>Unique design</span>
                  <span className="text-primary"> • </span>
                  <span>For men</span>
                  <span className="text-primary"> • </span>
                  <span>
                    Casual
                    <br />
                  </span>
                </div>
                <p className="text-truncate mb-4 mb-md-0">
                  {description}
                </p>
              </MDBCol>
              <MDBCol
                md="6"
                lg="3"
                className="border-sm-start-none border-start"
              >
                <div className="d-flex flex-row align-items-center mb-1">
                                  <h4 className="mb-1 me-1">${ Price}</h4>
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

export function EventRow ( { eventcode, image, eventname, rating, numberofBooking,Culture,description,Price,Prioed,subTotal,relatedServices} ) {
  return (
    <MDBRow className="justify-content-center mb-0" key={eventcode}>
      <MDBCol md="12" xl="10">
        <MDBCard className="shadow-0 border rounded-3 mt-3 mb-3">
          <MDBCardBody>
            <MDBRow>
              <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
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
                  {eventname}
                </h5>
                <div className="d-flex flex-row">
                <ReactStars
    count={5}
                                      edit={ false }
                                      value={rating}
                                      size={ 24 }
                                    
    activeColor="#ffd700"
  />
                                  <span>{numberofBooking} </span>
                </div>
                <div className="mt-1 mb-0 text-muted small">
                                  <span>{ Culture}</span>
                  <span className="text-primary"> • </span>
                                  <span>{ relatedServices} Services</span>
                  <span className="text-primary"> • </span>
                  <span>
                    Best finish
                    <br />
                  </span>
                </div>
                <div className="mb-2 text-muted small">
                  <span>Unique design</span>
                  <span className="text-primary"> • </span>
                  <span>For men</span>
                  <span className="text-primary"> • </span>
                  <span>
                    Casual
                    <br />
                  </span>
                </div>
                <p className="text-truncate mb-4 mb-md-0">
                  {description}
                </p>
              </MDBCol>
              <MDBCol
                md="6"
                lg="3"
                className="border-sm-start-none border-start"
              >
                <div className="d-flex flex-row align-items-center mb-1">
                                  <h4 className="mb-1 me-1">${ Price}</h4>
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
