
import React from 'react';
import Popup from 'reactjs-popup';
import { Container, Button } from "react-bootstrap";
import {  MDBBtn } from 'mdb-react-ui-kit';
 
export default function UnBlockPopUp({popup}) {
    return (
        <div>
             <Popup trigger=
                {popup}
                modal nested>
                {
                    close => (
                        <Container>
                            <h4 className='text-center'>Are You Sure UnBlock it</h4>
                         
                        </Container>
                    )
                }
            </Popup>
        </div>
    )
};
export function WarningPopUp ({open})
{
    return (
        <Popup open={open} closeOnDocumentClick >
            <div className='modal'>
            <a className="close" >
            &times;
          </a>
                Hiogfodgdfgkdf
            </div>
        </Popup>
    )
}