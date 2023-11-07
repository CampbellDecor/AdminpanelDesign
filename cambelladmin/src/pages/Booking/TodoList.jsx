import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTooltip,
} from "mdb-react-ui-kit";
import { Form } from "react-bootstrap";
import Todo from "../../component/todo";
import AddToDo from './AddTodo';
export default function ToDoList() {
  return (
    <MDBContainer className="py-5 w-75">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol>
          <MDBCard
            id="list1"
            style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
          >
            <MDBCardBody className="p-2 px-md-5">
              <p className="h3 text-center mt-1 mb-2 pb-1 text-primary">
                <MDBIcon fas icon="check-square" className="me-1" />
                <u>My Todo-s</u>
              </p>
              <div className="pb-1">
                <MDBCard>
                  <MDBCardHeader>
                    <div className="w-100 d-flex justify-content-end">
                      <MDBTooltip tag='a' wrapperProps={{ href: '#!' }} title='Add New Task'>
<AddToDo />

</MDBTooltip>


                    </div>

                  </MDBCardHeader>
                </MDBCard>
              </div>
              <hr className="my-2" />

              <div className="d-flex justify-content-end align-items-center mb-4 pt-3 pb-3">
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
