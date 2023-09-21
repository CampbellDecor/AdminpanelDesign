// @ts-nocheck
import React from 'react';
import { MDBCardImage } from "mdb-react-ui-kit";
import FallbackImg from "../../images/logo.png";
export function MDBImageComponent ({src,...otherattribute}){

    return (
        <MDBCardImage
            src={ src??FallbackImg }
            loading='lazy'
            onError={e => {
                e.target.onerror = null // prevent an infinite error loop
                e.target.src ={FallbackImg}
            } }
            {...otherattribute}
        />

    )

}