// @ts-nocheck
import React from "react";
import { useRouteError } from "react-router-dom";
import { Container} from "react-bootstrap";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <Container fluid className="error-page vh-100 w-100">
      <div className="d-flex justify-content-center align-items-center h-100">
      <div className="inner-error">
      <h1 className="text-center">Oops! </h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      </div>

      </div>
    </Container>
  );
}