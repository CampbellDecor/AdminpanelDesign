import React, {  useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon, MDBInput, MDBTextArea, MDBBtn } from 'mdb-react-ui-kit';
import AutoComplete from "../component/AutoComplete";
import { AvatarGenerator } from "random-avatar-generator";
import { GiAutoRepair } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function AddUSer ()
{
    const generator = new AvatarGenerator();
    const navigate = useNavigate();
    // Simply get a random avatar
    const [ user, setUser ] = useState( {
        username: "User",
        password: "",
        email: "@gmail.com",
        profile: generator.generateRandomAvatar()
    } );

    const OnChangehandle = e =>
    {
        setUser( pre => ( { ...pre, [ e.target.name ]: e.target.value } ))
    }
    const handleSubmit = async e =>
    {
        try
        {
            e.preventDefault();
        console.log(user);
            axios.post( "/api/user/add",user )
                .then( res =>
                {
                    if ( res.data.aid ) navigate( "/admins" );
                });
            
        } catch (error) {
            console.log(error);
        }
      
        
    }
    return (
        <MDBContainer className="py-5 vh-75 my-4">
            <MDBRow className="justify-content-center align-items-center h-100">
                <MDBCol lg="6" className="mb-4 mb-lg-0">
                    <MDBCard className="mb-3" style={ { borderRadius: '.5rem' } }>
                        <MDBRow className="g-0">
                            <MDBCol md="4" className="gradient-custom text-center"
                                style={ { borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' } }>
                                <MDBCardImage src={ user?.profile ?? "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" }
                                    alt="Avatar" className="my-5" style={ { width: '80px' } } fluid />
                                <MDBTypography tag="h5">{ user.username }</MDBTypography>
                                <MDBCardText className='fs-6'>{ user.email }</MDBCardText>
                                < GiAutoRepair onClick={ () =>
                                {
                                    setUser( pre => ( { ...pre, profile: generator.generateRandomAvatar() } ) );
                                } }
                                size={30}
                                />
                                <div className="d-none justify-content-center">
                                        <a href="#!"><MDBIcon fab icon="facebook me-3" size="md" /></a>
                                    <a href="#!"><MDBIcon fab icon="google me-3" size="md" /></a>
                                    
                                    </div>
                            </MDBCol>
                            <MDBCol md="8">
                                <MDBCardBody className="p-4">
                                    <MDBTypography tag="h6">Information</MDBTypography>
                                    <hr className="mt-0 mb-4" />
                                    <MDBRow className="pt-1">
                                        <MDBCol size="6" className="mb-3">
                                            <MDBTypography tag="h6">Email</MDBTypography>
                                            <MDBInput label='Email' name="email" type='email' required onChange={OnChangehandle} />
                                        </MDBCol>
                                        <MDBCol size="6" className="mb-3">
                                            <MDBTypography tag="h6">Phone</MDBTypography>
                                            <MDBInput label='mobile' name="mobile" type='tel' onChange={OnChangehandle}/>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr className="mt-0 mb-4" />
                                    <MDBRow className="pt-1">
                                        <MDBCol size="6" className="mb-3">
                                            <MDBTypography tag="h6">Religion</MDBTypography>
                                            <AutoComplete dataSource={ [ "Hindu", "Christian" ] } />
                                        </MDBCol>
                                        <MDBCol size="6" className="mb-3">
                                            <MDBTypography tag="h6">Username</MDBTypography>
                                            <MDBInput label='username' name="username" type='text'onChange={OnChangehandle} />
                                        </MDBCol>

                                    </MDBRow>
                                    <MDBCol size="12" className="mb-3">
                                        <MDBTypography tag="h6">Address</MDBTypography>
                                        <MDBTextArea label='address' name='address' id='textAreaExample' rows={ 3 } onChange={OnChangehandle} />
                                    </MDBCol>
                                    <MDBRow>
                                        <MDBBtn className='w-50 mx-auto' onClick={handleSubmit}>
                                           save 
                                    </MDBBtn>
                                    </MDBRow>
                                    
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}