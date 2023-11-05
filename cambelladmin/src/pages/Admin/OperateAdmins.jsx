// @ts-nocheck
import React, {  useEffect, useReducer } from 'react';
import
{
    Row,
    Container,
    Col,
    Form,
    InputGroup,
    Card,
    Button,
    Stack,
} from 'react-bootstrap';
import { GiAutoRepair } from 'react-icons/gi';
import { toast} from 'react-toastify';
import
{
    BiSolidPhoneCall,
    BiLogoGmail,
    BiSolidEditLocation,
    BiUpload
} from 'react-icons/bi';
import { MdAdminPanelSettings } from 'react-icons/md';
import { AvatarGenerator } from 'random-avatar-generator';
import PhoneInput from 'react-phone-number-input';
import { useNavigate, useLoaderData } from 'react-router-dom';
import { AdminFormReducer } from '../../function/AdminHandle';
import axios from 'axios';

export default function Opreateadmin ()
{
    //state
    const adminload = useLoaderData();
    const navigate = useNavigate();
    const [admin, setAdmin] = useReducer(AdminFormReducer, {});
    useEffect(() =>
    {
        if (adminload !== null)
        {
            setAdmin({ type: 'SETADMIN', payload: adminload });
        }
    },[adminload])

    //functions

    const onchange = e =>
    {
        setAdmin({ type: 'ONCHANGEINPUT', name: e.target.name, value: e.target.value });
    };

    const addHandle =async e =>
    {
        e.preventDefault();
        try
        {
                const response = await axios.post('/api/admin/add', admin);
                if (response.data.aid)
                {
                    toast.success("ScussFully Add New Admin");
                    navigate('/admins');
                } else
                {
                    setAdmin({ type: 'CLEAR' });
                    toast.error("You Can't Add This Admin");

                }
        } catch (error) {
            console.error(error);
            toast.error(error.code);

        }

    };
    const editHandle = async e => {
  e.preventDefault()
  try {
      const response = await axios.post('/api/adimn/add', admin)
      if (response.data.aid) {
        toast.success('ScussFully Edited')
      } else
      {
          toast.error("Editing Failed");

      }
  } catch (error) {}
}

    const resetHandle = e =>
    {
        setAdmin({ type: 'CLEAR' });
    };
    const mobileinputhandle = value =>
    {
        setAdmin({ type: 'MOBILECHANGE', input: value });
    };
    const CheckBoxChange = e =>
    {
        console.log(e.target.checked);
        setAdmin({ type: 'CHECKEDCHANGE', name: e.target.name, value: e.target.checked });

    };

const genAvatharHandle = () => {
const generator = new AvatarGenerator()
    const avthar = generator.generateRandomAvatar();
    setAdmin({ type: 'PROFILECHANGE', payload: avthar });

}

    return (
        <Container fluid className='vh-100 mt-5 justify-content-center'>
            <Row>
                <Col lg='3' md='5'>
                    <Card>
                        <Card.Img
                            variant='top'
                            src={admin.profile ?? 'https://cdn-icons-png.flaticon.com/512/1053/1053244.png'

                            }
                        />
                        <Card.Body>
                            <Card.Title className='fw-bold'>
                                {admin?.username??'Admin'}
                                {admin?.isSuper&& <MdAdminPanelSettings size={30} />}
                            </Card.Title>
                            <p className='muted small text-secondary-emphasis'>
                                {admin.firstname?? 'Campbell'}{' '}
                                {admin?.lastname?? 'Admin'}
                            </p>
                            <Card.Text>
                                <Stack gap={2}>
                                    <div>
                                        <BiSolidPhoneCall className='me-2' />{' '}
                                        {admin?.mobile?? 'xxx-xxx-xxxx'}
                                    </div>
                                    <div>
                                        <BiLogoGmail className='me-2' />{' '}
                                        {admin?.email?? 'cambelladmin@gmail.com'}
                                    </div>
                                    <div className='text-wrap'>
                                        <BiSolidEditLocation className='me-2' />
                                        {admin?.address?? 'current'}
                                    </div>
                                </Stack>
                            </Card.Text>
                            <Button variant='primary'>Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg='9' md='7'>
                    <h1 className='my-2'>New Admin</h1>
                    <Form
                        onSubmit={adminload===null?addHandle:editHandle}
                        onReset={resetHandle}
                        method='post'
                        encType='multipart/form-data'
                    >
                        <Row>
                            <Col sm='6'>
                                <Form.Group className='mb-3'>
                                    <Form.Control
                                        type='text'
                                        name='firstname'
                                        placeholder='Firstname'
                                        value={admin?.firstname??''}
                                        onChange={onchange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm='6'>
                                <Form.Group className='mb-3'>
                                    <Form.Control
                                        type='text'
                                        name='lastname'
                                        placeholder='Lastname'
                                        onChange={onchange}
                                        value={admin?.lastname??''}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm='6'>
                                <Form.Group className='mb-3'>
                                    <Form.Control
                                        type='email'
                                        placeholder='Email'
                                        name='email'
                                        onChange={onchange}
                                        value={admin?.email??''}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm='6'>
                                <Form.Group className='mb-3'>
                                    <PhoneInput
                                        className='border-0'
                                        onChange={mobileinputhandle}
                                        placeholder='Mobile'
                                        value={admin?.mobile??''}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm='6'>
                                <Form.Group className='mb-3'>
                                    <Form.Control
                                        type='text'
                                        placeholder='username'
                                        name='username'
                                        onChange={onchange}
                                        value={admin?.username??''}
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm='6'>
                                {
                                    adminload === null ? (
                                        <InputGroup className='mb-3'>
                                            <Form.Control
                                                name='profile'
                                                readOnly
                                                type='text'
                                                value={admin?.profile}
                                            />
                                            <InputGroup.Text><GiAutoRepair onClick={genAvatharHandle} />
                                            </InputGroup.Text>
                                        </InputGroup>
                                    ) : (
                                        <InputGroup className='mb-3'>
                                            <Form.Control
                                                name='profile'
                                                type='file'
                                                accept='image/*'
                                                onChange={onchange}
                                            />
                                            <InputGroup.Text><BiUpload /></InputGroup.Text>
                                        </InputGroup>

                                    )
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Form.Group className='mb-3'>
                                <Form.Control
                                    as='textarea'
                                    row={3}
                                    name='address'
                                    placeholder='address'
                                    onChange={onchange}
                                    value={admin?.address??''}
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Check // prettier-ignore
                                type='checkbox'
                                label='SuperAdmin'
                                inline
                                name='isSuper'
                                onChange={CheckBoxChange}
                                checked={admin?.isSuper??false}
                                className='me-2'
                            />
                            <Form.Check // prettier-ignore
                                type='checkbox'
                                label='Blocked'
                                inline
                                checked={admin?.isBlock??false}
                                name='isBlock'
                                onChange={CheckBoxChange}
                            />
                        </Row>
                        <Row>
                            <div className='w-50'>
                                <Button variant='primary' type='submit' className='me-2'>
                                    Submit
                                </Button>
                                <Button variant='danger' type='reset' className='ms-2'>
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
