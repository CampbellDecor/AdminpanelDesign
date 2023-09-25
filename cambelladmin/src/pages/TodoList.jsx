import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTooltip,
} from "mdb-react-ui-kit";
import { Form } from "react-bootstrap";
import Todo from "../component/todo";
export default function ToDoList() {
  return (
    <MDBContainer className="py-5 w-75">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol>
          <MDBCard
            id="list1"
            style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
          >
            <MDBCardBody className="py-4 px-4 px-md-5">
              <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                <MDBIcon fas icon="check-square" className="me-1" />
                <u>My Todo-s</u>
              </p>
              <div className="pb-2">
                <MDBCard>
                  <MDBCardBody>
                    <div className="d-flex flex-row align-items-center">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="exampleFormControlInput1"
                        placeholder="Add new..."
                      />
                      <MDBTooltip
                        tag="a"
                        wrapperProps={{ href: "#!" }}
                        title="Set due date"
                      >
                        <MDBIcon
                          fas
                          icon="calendar-alt"
                          size="lg"
                          className="me-3"
                        />
                      </MDBTooltip>
                      <div>
                        <MDBBtn>Add</MDBBtn>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <hr className="my-4" />

              <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
                <p className="small mb-0 me-2 text-muted">Filter</p>
                <Form.Select>
                  <option>All</option>
                  <option value="">Completed</option>
                  <option value="">Active</option>
                  <option value="">Has due Date</option>
                </Form.Select>
                <p className="small mb-0 ms-4 me-2 text-muted">Sort</p>
                <Form.Select>
                  <option value="">Added Date</option>
                  <option value="">Due Date</option>
                </Form.Select>
                <MDBTooltip
                  tag="a"
                  wrapperProps={{ href: "#!" }}
                  title="Ascending"
                >
                  <MDBIcon
                    fas
                    icon="sort-amount-down-alt"
                    className="ms-2"
                    style={{ color: "#23af89" }}
                  />
                </MDBTooltip>
              </div>

              <Todo />
              
              <Todo />
              
            <Todo/>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}