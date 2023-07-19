import React from 'react';
import {Container,Row,Col,Form} from 'react-bootstrap'

export default function Users (){

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
        <table className="table align-middle mb-0 bg-white">
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
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style={{width: '45px',height: '45px'}}
              className="rounded-circle"
              />
          <div className="ms-3">
            <p className="fw-bold mb-1">John Doe</p>
            <p className="text-muted mb-0">john.doe@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">0766859048</p>
        {/* <p className="text-muted mb-0">IT department</p> */}
      </td>
      <td>
        <span className="badge badge-success rounded-pill d-inline">Hindu</span>
      </td>
      <td>2</td>
      <td>
      <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-warning rounded"><i class="fa-solid fa-pen"></i></button>
  <button type="button" class="btn rounded"><i class="fa fa-eye" aria-hidden="true"></i></button>
  <button type="button" class="btn btn-danger rounded"><i class="fa-solid fa-user-lock"></i></button>
</div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/6.jpg"
              className="rounded-circle"
              alt=""
              style={{width: '45px', height: '45px'}}
              />
          <div className="ms-3">
            <p className="fw-bold mb-1">Alex Ray</p>
            <p className="text-muted mb-0">alex.ray@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">0786562323</p>
        {/* <p className="text-muted mb-0">Finance</p> */}
      </td>
      <td>
        <span className="badge badge-primary rounded-pill d-inline"
              >Islamic</span
          >
      </td>
      <td>4</td>
      <td>
      <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-warning rounded"><i class="fa-solid fa-pen"></i></button>
  <button type="button" class="btn rounded"><i class="fa fa-eye" aria-hidden="true"></i></button>
  <button type="button" class="btn btn-danger rounded"><i class="fa-solid fa-user-lock"></i></button>
</div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style={{width: '45px',height: '45px'}}
              className="rounded-circle"
              />
          <div className="ms-3">
            <p className="fw-bold mb-1">John Doe</p>
            <p className="text-muted mb-0">john.doe@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">076786869</p>
        {/* <p className="text-muted mb-0">IT department</p> */}
      </td>
      <td>
        <span className="badge badge-success rounded-pill d-inline">Buddist</span>
      </td>
      <td>1</td>
      <td>
      <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-warning rounded"><i class="fa-solid fa-pen"></i></button>
  <button type="button" class="btn rounded"><i class="fa fa-eye" aria-hidden="true"></i></button>
  <button type="button" class="btn btn-danger rounded"><i class="fa-solid fa-user-lock"></i></button>
</div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/7.jpg"
              className="rounded-circle"
              alt=""
              style={{width: '45px', height: '45px'}}
              />
          <div className="ms-3">
            <p className="fw-bold mb-1">Kate Hunington</p>
            <p className="text-muted mb-0">kate.hunington@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">07689709</p>
        {/* <p className="text-muted mb-0">UI/UX</p> */}
      </td>
      <td>
        <span className="badge badge-warning rounded-pill d-inline">Christian</span>
      </td>
      <td>2</td>
      <td>
      <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-warning rounded"><i class="fa-solid fa-pen"></i></button>
  <button type="button" class="btn rounded"><i class="fa fa-eye" aria-hidden="true"></i></button>
  <button type="button" class="btn btn-danger rounded"><i class="fa-solid fa-user-lock"></i></button>
</div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style={{width: '45px',height: '45px'}}
              className="rounded-circle"
              />
          <div className="ms-3">
            <p className="fw-bold mb-1">John Doe</p>
            <p className="text-muted mb-0">john.doe@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">088566785</p>
        {/* <p className="text-muted mb-0">IT department</p> */}
      </td>
      <td>
        <span className="badge badge-success rounded-pill d-inline">Hindu</span>
      </td>
      <td>3</td>
      <td>
      <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-warning rounded"><i class="fa-solid fa-pen"></i></button>
  <button type="button" class="btn rounded"><i class="fa fa-eye" aria-hidden="true"></i></button>
  <button type="button" class="btn btn-danger rounded"><i class="fa-solid fa-user-lock"></i></button>
</div>
      </td>
    </tr>
  </tbody>
</table>
        </Row>

       
</Container>
    )

}