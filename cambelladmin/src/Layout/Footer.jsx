import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBRipple
} from 'mdb-react-ui-kit';
import {FooterImg} from "../Data/Images";
export default function component (){

    return(
<MDBFooter id="Footer" className='text-center text-white'>
      <MDBContainer className='p-4'>
        <section >
            <MDBRow>
              { FooterImg && FooterImg.map( (img,index) => (
                <MDBCol lg='2' md='12' className='mb-4 mb-md-0' key={index}>
                  <MDBRipple
                    rippleColor='light'
                    className='bg-image hover-overlay shadow-1-strong rounded'
                  >
                    <img src={img.url} className='w-100' alt={img.name} />
                    <a href='#!'>
                      <div
                        className='mask'
                        style={ { backgroundColor: 'rgba(251, 251, 251, 0.2)' } }
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
              ) ) }
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3 copyright'>
        © {new Date().getFullYear()} Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          Cambelldecor.org
        </a>
      </div>
    </MDBFooter>

    )

}