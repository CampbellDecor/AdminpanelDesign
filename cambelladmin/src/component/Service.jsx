import React, { useMemo } from 'react'
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
  MDBBtn
} from 'mdb-react-ui-kit'
import ReactStars from 'react-rating-stars-component'
import Swal from 'sweetalert2'
import { oneService } from '../redux/Slice/Service'
import { useSelector } from 'react-redux'
const Services = ({ ser }) => {
  return (
    <div className='mt-1 mb-0 text-muted small'>
      <span>{ser[0]?.sername}</span>
      {ser[0] && ser[1] && <span className='text-primary'> • </span>}
      <span>{ser[1]?.sername}</span>
      {ser[1] && ser[2] && <span className='text-primary'> • </span>}
      <span>
        {ser[2]?.sername}
        <br />
      </span>
    </div>
  )
}
export function Service ({ servicecode }) {
  const { serviceName,serviceImage,subservice } =useSelector(state => oneService(state, servicecode)) ?? {}

  const chunkService = useMemo(() => {
    const chunkarr = []
    let i = 0
    while (i < subservice?.length) {
      chunkarr.push(subservice.slice(i, i + 3))
      i += 3
    }
    return chunkarr
  }, [subservice])
  const chunkPrice = useMemo(() =>
  {
    const len = subservice?.length;
    const fullcost = subservice.reduce((total, ele) => total + ele.serprice, 0);
    return fullcost/len
  },[subservice])
  const rating = useMemo(() => (Math.floor(56 / 10) / 10) * 5, [])
  return (
    <MDBRow className='justify-content-center mb-0'>
      <MDBCol md='12' xl='10'>
        <MDBCard className='shadow-0 border rounded-3 mt-2 mb-2'>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='12' lg='3' className='mb-4 mb-lg-0'>
                <MDBRipple
                  rippleColor='light'
                  rippleTag='div'
                  className='bg-image rounded hover-zoom hover-overlay'
                >
                  <MDBCardImage
                    src={serviceImage}
                    fluid
                    style={{ height: '150px', width: '150px' }}
                  />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                    ></div>
                  </a>
                </MDBRipple>
              </MDBCol>
              <MDBCol md='6'>
                <h5>{serviceName}</h5>
                <div className='d-flex flex-row'>
                  <ReactStars
                    count={5}
                    edit={false}
                    value={rating}
                    size={25}
                    half={true}
                    activeColor='#ffd700'
                  />

                  <span>{0}</span>
                </div>
                {chunkService.map(ser => (
                  <Services ser={ser} />
                ))}
                {/* <p className='text-truncate mb-4 mb-md-0'>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p> */}
              </MDBCol>
              <MDBCol
                md='6'
                lg='2'
                className='border-sm-start-none border-start'
              >
                <div className='d-flex flex-row align-items-center mb-1'>
                  <h4 className='mb-1 me-1'>${chunkPrice}</h4>
                  <span className='text-danger'>{/* <s>$20.99</s> */}</span>
                </div>
                {/* <h6 className='text-success'>Free shipping</h6> */}
                <div className='d-flex flex-column mt-4'>
                  {/* <DeletePackages packageID={packageID} /> */}
                  <MDBBtn outline color='warning' size='sm' className='mt-2'>
                    Edit
                  </MDBBtn>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

// export function DeleteService ({ packageID }) {
//   const OnClick = () => {
//     const swalWithBootstrapButtons = Swal.mixin({
//       customClass: {
//         confirmButton: 'btn btn-success',
//         cancelButton: 'btn btn-danger'
//       },
//       buttonsStyling: false
//     })
//     swalWithBootstrapButtons
//       .fire({
//         title: 'Are you sure?',
//         text: "You won't be able to revert this!",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonText: 'Yes, delete it!',
//         cancelButtonText: 'No, cancel!',
//         reverseButtons: true
//       })
//       .then(result => {
//         if (result.isConfirmed) {
//           swalWithBootstrapButtons.fire({
//             title: 'Deleted!',
//             text: 'Your file has been deleted.',
//             icon: 'success'
//           })
//         } else if (
//           /* Read more about handling dismissals below */
//           result.dismiss === Swal.DismissReason.cancel
//         ) {
//           swalWithBootstrapButtons.fire({
//             title: 'Cancelled',
//             text: 'Your imaginary file is safe :)',
//             icon: 'error'
//           })
//         }
//       })
//   }
//   return (
//     <MDBBtn color='danger' size='sm' onClick={OnClick}>
//       Delete
//     </MDBBtn>
//   )
// }
