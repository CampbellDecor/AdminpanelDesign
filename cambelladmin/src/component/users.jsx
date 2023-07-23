import React from 'react';
import {Image,Badge,ButtonGroup,Button} from 'react-bootstrap';

export  function UserRow ({profile,username,email,mobile,religion,booking}){

    return(
      <tr>
      <td>
        <div className="d-flex align-items-center">
          <Image
              src={profile}
              alt={username}
              style={{width: '45px',height: '45px'}}
              roundedCircle
              />
          <div className="ms-3">
            <p className="fw-bold mb-1">{username}</p>
            <p className="text-muted mb-0">{email}</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">{mobile}</p>
        {/* <p className="text-muted mb-0">IT department</p> */}
      </td>
      <td>
      <Badge bg="success" className="rounded-pill d-inline">
        Hindu
      </Badge>
      </td>
      <td>{booking?.Count}</td>
      <td>
      <ButtonGroup size="sm" aria-label="Basic example">
      <Button variant="warning" className="rounded">
        pen
      </Button>
      <Button className="rounded">
        Eey
      </Button>
      <Button variant="danger" className="rounded">
        userlock
      </Button>
    </ButtonGroup>
      </td>
    </tr>
   
    )

}