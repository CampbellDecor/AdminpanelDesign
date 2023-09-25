import { MDBListGroup, MDBListGroupItem, MDBCheckbox, MDBTooltip, MDBIcon } from 'mdb-react-ui-kit';
import React from 'react';

export default function Todo (){

    return(

        <MDBListGroup horizontal className="rounded-0 bg-transparent">
        <MDBListGroupItem className="d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
          <MDBCheckbox name="flexCheck" value="" id="flexCheck" />
        </MDBListGroupItem>
        <MDBListGroupItem className="px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
          {" "}
          <p className="lead fw-normal mb-0">Renew car insurance</p>
        </MDBListGroupItem>
        <MDBListGroupItem className="px-3 py-1 d-flex align-items-center border-0 bg-transparent">
          <div className="py-2 px-3 me-2 border border-warning rounded-3 d-flex align-items-center bg-light">
            <p className="small mb-0">
              <MDBTooltip
                tag="a"
                wrapperProps={{ href: "#!" }}
                title="Due on date"
              >
                <MDBIcon
                  fas
                  icon="hourglass-half"
                  color="warning"
                  className="me-2"
                />
              </MDBTooltip>
              28th Jun 2020
            </p>
          </div>
        </MDBListGroupItem>
        <MDBListGroupItem className="ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
          <div className="d-flex flex-row justify-content-end mb-1">
            <MDBTooltip
              tag="a"
              wrapperProps={{ href: "#!" }}
              title="Edit todo"
            >
              <MDBIcon
                fas
                icon="pencil-alt"
                className="me-3"
                color="info"
              />
            </MDBTooltip>
            <MDBTooltip
              tag="a"
              wrapperProps={{ href: "#!" }}
              title="Delete todo"
            >
              <MDBIcon fas icon="trash-alt" color="danger" />
            </MDBTooltip>
          </div>
          <div className="text-end text-muted">
            <MDBTooltip
              tag="a"
              wrapperProps={{ href: "#!" }}
              title="Created date"
            >
              <p className="small text-muted mb-0">
                <MDBIcon fas icon="info-circle" className="me-2" />
                28th Jun 2020
              </p>
            </MDBTooltip>
          </div>
        </MDBListGroupItem>
      </MDBListGroup>

    )

}