import React, { useState, useRef } from "react";
import { Row, Container, Col, Form, InputGroup, Card, Button, Stack } from "react-bootstrap";
import { GiAutoRepair } from "react-icons/gi";
import { BiSolidPhoneCall, BiLogoGmail, BiSolidEditLocation } from "react-icons/bi";
import { MdAdminPanelSettings } from "react-icons/md";
import { AvatarGenerator } from "random-avatar-generator";
import axios from "axios";
export default function Addadmin ()
{
    const adminimg = useRef( null );
    const [ admin, setAdmin ] = useState( {
        username: "",
        profile: "",
        email: "",
        firstname: "",
        lastname: "",
        mobile: "",
        address: "",
        isSuper: false,
        isBlock: false
    } );
    const onchange = e =>
    {
        setAdmin( pre => ( { ...pre, [ e.target.name ]: e.target.value } ) );
    };
    const SubmitHandle =async  e =>
    {
        e.preventDefault();
        let addadmin = await axios.post( "/api/admin/add", admin );
    }
    return (
        <Container
            fluid
            className="vh-100 mt-5 justify-content-center"
        >

            <Row>
                <Col md="3" sm="5">
                    <Card>
                        <Card.Img variant="top" src={ admin?.profile !== "" ? admin.profile : "data:image/png;base64,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" } />
                        <Card.Body>
                            <Card.Title className="fw-bold">{ admin?.username === "" ? "Admin" : admin?.username }{ admin.isSuper ? <MdAdminPanelSettings size={ 30 } /> : "" }</Card.Title>
                            <p className="muted small text-secondary-emphasis">{ admin.firstname === "" ? "Campbell" : admin.firstname } { admin.lastname === "" ? "Admin" : admin.lastname }</p>
                            <Card.Text>
                                <Stack gap={ 2 }>
                                    <div><BiSolidPhoneCall className="me-2" /> { admin?.mobile === "" ? "xxx-xxx-xxxx" : admin?.mobile }</div>
                                    <div><BiLogoGmail className="me-2" /> { admin?.email === "" ? "cambelladmin@gmail.com" : admin?.email }</div>
                                    <div className="text-wrap"><BiSolidEditLocation className="me-2" />{ admin?.address === "" ? "current" : admin?.address }</div>
                                </Stack>
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="9" sm="7">
                    <h1 className="my-2">New Admin</h1>
                    <Form onSubmit={SubmitHandle}>
                        <Row>
                            <Col sm="6">
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="firstname"
                                        placeholder="Firstname"
                                        onChange={ onchange }
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm="6">
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="lastname"
                                        placeholder="Lastname"
                                        onChange={ onchange }
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="6">
                                <Form.Group className="mb-3">
                                    <Form.Control type="email" placeholder="Email" name="email" onChange={ onchange } required />
                                </Form.Group>
                            </Col>
                            <Col sm="6">
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" onChange={ onchange } name="mobile" placeholder="Mobile" required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="6">
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="username" name="username" onChange={ onchange } />
                                </Form.Group>
                            </Col>
                            <Col sm="6">
                                <InputGroup className="mb-3">
                                    <Form.Control placeholder="profile" onDoubleClick={
                                        e =>
                                        {
                                            e.target.type = "file";
                                            e.target.readOnly = false;
                                        }
                                    } ref={ adminimg } name="profile" type="file" accept="image/*" onChange={ onchange } />
                                    <InputGroup.Text>
                                        <GiAutoRepair onClick={ e =>
                                        {
                                            const generator = new AvatarGenerator();

                                            // Simply get a random avatar
                                            const avthar = generator.generateRandomAvatar();
                                            adminimg.current.type = "text";
                                            adminimg.current.readOnly = true;
                                            adminimg.current.value = avthar;
                                            setAdmin( pre => ( { ...pre, profile: avthar } ) );



                                        } } />
                                    </InputGroup.Text>
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3">
                                <Form.Control as="textarea" row="3" name="address" placeholder="address" onChange={ onchange } />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Check // prettier-ignore
                                type="checkbox"
                                label="SuperAdmin"
                                inline
                                onChange={ e =>
                                {
                                    setAdmin( pre => ( { ...pre, isSuper: e.target.checked } ) );
                                } }
                                className="me-2"
                            />
                            <Form.Check // prettier-ignore
                                type="checkbox"
                                label="Blocked"
                                inline
                                onChange={ e =>
                                {
                                    setAdmin( pre => ( { ...pre, isBlock: e.target.checked } ) );
                                } }
                            />
                        </Row>
                        <Row>
                            <div className="w-50">
                                <Button variant="primary" type="submit" className="me-2">
                                    Submit
                                </Button>
                                <Button variant="danger" type="reset" className="ms-2">
                                    Clear
                                </Button>
                            </div>

                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
