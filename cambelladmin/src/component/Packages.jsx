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
import axios from 'axios'
const Services = ({ ser}) =>
{
  return (<div className='mt-1 mb-0 text-muted small'>
  <span>{ser[0]}</span>
    {ser[0]&&ser[1]&&<span className='text-primary'> • </span>}
    <span>{ ser[1]}</span>
    {ser[1]&&ser[2]&&<span className='text-primary'> • </span>}
  <span>
{ser[2]}
    <br />
  </span>
</div>
)
}
export function Packages ({ services, imgURL, packageName,price,avg_rating,rating_count,packageID
 })
{
  const chunkService = useMemo(() =>
  {
    const chunkarr = [];
    let i = 0;
    while (i<services?.length)
    {
      chunkarr.push(services.slice(i, i + 3))
      i+=3;
    }
    return chunkarr;
  }, [])
  const rating=useMemo(()=>(Math.floor(avg_rating/10)/10)*5,[])
  return (
   <MDBRow className='justify-content-center mb-0'>
  <MDBCol md='12' xl='9'>
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
                src={imgURL}
                    fluid
                    style={{height:"150px",width:"150px"}}
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
                <h5>{ packageName}</h5>
            <div className='d-flex flex-row'>
             <ReactStars
  count={5}
  edit={false}
  value={rating}
  size={25}
  half={true}
  activeColor='#ffd700'
/>

                  <span>{rating_count}</span>
                </div>
                {chunkService.map((ser) =>( <Services ser={ser} /> ))
                }
            {/* <p className='text-truncate mb-4 mb-md-0'>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p> */}
          </MDBCol>
          <MDBCol md='6' lg='3' className='border-sm-start-none border-start'>
            <div className='d-flex flex-row align-items-center mb-1'>
                  <h4 className='mb-1 me-1'>${ price}</h4>
              <span className='text-danger'>
                {/* <s>$20.99</s> */}
              </span>
            </div>
            {/* <h6 className='text-success'>Free shipping</h6> */}
            <div className='d-flex flex-column mt-4'>
            <DeletePackages packageID={packageID}/>
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


export function DeletePackages ({packageID})
{
  const OnClick = () =>
  {
   const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})
swalWithBootstrapButtons
  .fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  })
  .then(result => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire({
        title: 'Deleted!',
        text: 'Your file has been deleted.',
        icon: 'success'
      })
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: 'Cancelled',
        text: 'Your imaginary file is safe :)',
        icon: 'error'
      })
    }
  })


  }
  return (
<MDBBtn color='danger' size='sm' onClick={OnClick}>
  Delete
</MDBBtn>

)
}
