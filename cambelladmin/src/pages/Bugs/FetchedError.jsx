import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';

export default function FetchedError({data,childern=null}) {
  return (
      <Container fluid className='d-flex justify-content-center align-items-center vh-100'>
          <Row>
              <Col>
                  <h3 className='text-center'>{data} Not Found</h3>
                  <p className='text-danger text-center'>Try Again Later or Check your Stable Network !</p>
                  {childern}
              </Col>
</Row>

   </Container>
  )
}
