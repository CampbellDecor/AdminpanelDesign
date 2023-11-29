import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBRipple,
} from 'mdb-react-ui-kit'
import {Link} from 'react-router-dom'
import { FooterImg } from '../../Data/Images'
import { useAppContext } from '../../contexts/AppContext'
export default function Footer ()
{
  const { website} = useAppContext();
  return (
    <MDBFooter id='Footer' className='text-white'>
      <MDBContainer className='px-4 py-2'>
        <section>
          <MDBRow>
            {FooterImg &&
              FooterImg.map((img, index) => (
                <MDBCol lg={2} md={index===0 || index===3?12:6} sm={12} className='mb-4' key={index}>
                  <MDBRipple
                    rippleColor='light'
                    className='bg-image hover-overlay shadow-1-strong rounded'
                  >
                    <img src={img.url} className='w-100' alt={img.name} />
                    <Link to='#!' className='anchor'>
                      <div
                        className='mask'
                        style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                      ></div>
                    </Link>
                  </MDBRipple>
                </MDBCol>
              ))}
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='p-3 copyright'>
        © {new Date().getFullYear()} Copyright :
        <Link className='text-white anchor' to={website}>
          Cambelldecor.org
        </Link>
      </div>
    </MDBFooter>
  )
}
