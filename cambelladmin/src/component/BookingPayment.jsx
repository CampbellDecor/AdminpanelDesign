import React from 'react'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRadio
} from 'mdb-react-ui-kit'
import {Image} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {OneBooking} from '../redux/Slice/Booking'
import { FaRegFilePdf } from 'react-icons/fa'
import {useAppContext} from '../contexts/AppContext'
export default function BookingPayment ({bookcode})
{
  const { paid} = useSelector(state => OneBooking(state,bookcode))??{};
  return (
    <MDBCard>
     <MDBCardBody className="my-1">
              <div className="d-flex align-items-center">
                <div>
                  <MDBIcon
                    fab
                    icon="cc-visa"
                    size="4x"
                    className="text-black pe-3"
                  />
                </div>
                <div>
                  <p className="d-flex flex-column mb-0">
                    <b>Card</b>
                    <span className="small text-muted">**** 8880</span>
                  </p>
                </div>
              </div>
              <div className="pt-3">
                <div className="d-flex flex-row pb-3">
                  <div
                    className="rounded border border-primary border-2 d-flex w-100 p-3 align-items-center"
                    style={{ backgroundColor: "rgba(18, 101, 241, 0.07)" }}
                  >
                    <div className="d-flex align-items-center pe-3">
                      <MDBRadio
                        name="radioNoLabelX"
                        id="radioNoLabel11"
                        defaultChecked
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <p className="mb-1 small text-primary">
                        Total PayAmount
                      </p>
                <h6 className="mb-0 text-primary">${" "+paid}</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row pb-3">
                <div className="rounded border d-flex w-100 px-3 py-2 align-items-center">
                  <div className="d-flex align-items-center pe-3">
                    <MDBRadio name="radioNoLabelX" id="radioNoLabel11" />
                  </div>
                  <div className="d-flex flex-column py-1">
                    <p className="mb-1 small text-primary">Other amount</p>
                    <div className="d-flex flex-row align-items-center">
                      <h6 className="mb-0 text-primary pe-1">$</h6>
                      <MDBInput
                        id="typeNumber"
                        type="number"
                        size="sm"
                        style={{ width: "55px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center pb-1">
                <a href="#!" className="text-muted">
                  <FaRegFilePdf size='22'/>
                </a>
                <MDBBtn color='info'>Refund</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
  )
}


export function QRShow ({ bookcode })
{
  const { qr } = useSelector(state => OneBooking(state, bookcode)) ?? {}
  const {Applogo } = useAppContext();
  return (
    <MDBContainer className='mt-2'>
      <Image thumbnail rounded className='w-100' src={qr??Applogo} />
    </MDBContainer>
  )
}
