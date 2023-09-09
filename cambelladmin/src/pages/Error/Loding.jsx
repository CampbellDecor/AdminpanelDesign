import React from 'react';
import { Spinner, Container } from "react-bootstrap";

export default function Loading() {
  return (
    <Container fluid className="vh-100">
      <Spinner animation="grow" />
    </Container>
  );
}