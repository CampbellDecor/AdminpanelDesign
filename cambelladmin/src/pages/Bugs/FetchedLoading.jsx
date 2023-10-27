import React from 'react'
import { Container, Spinner } from 'react-bootstrap';

export default function FetchedLoading() {
  return (
      <Container fluid className='d-flex justify-content-center vh-100 w-100 align-items-center'>
          <Spinner animation="grow" variant="primary" />
          <div>
<Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
          </div>

    </Container>
  )
}
