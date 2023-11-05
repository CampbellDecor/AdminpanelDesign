import { Container, Spinner } from "react-bootstrap";

export const chatlistLoading = () =>{
    return (
        <Container fluid className="w-100 h-100 d-flex align-items-center justify-content-center">
        <div><Spinner animation='border' variant='primary' />
</div>

        </Container>
    )
}
