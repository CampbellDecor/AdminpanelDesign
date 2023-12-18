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
import { FaCcPaypal,FaMoneyBill
 } from 'react-icons/fa6'

export default function BookingPayment ({bookcode})
{
  const { paid,paymentType} = useSelector(state => OneBooking(state,bookcode))??{};
  return (
    <MDBCard>
     <MDBCardBody className="my-1">
              <div className="d-flex align-items-center">
                <div>
            {paymentType === 'Paypal' ? <FaCcPaypal size={100} /> :
              <FaMoneyBill size={100} />

}

                </div>
                <div>
                  <p className="d-flex flex-column mb-0">
                  {paymentType==='Paypal'?<b>Paypal</b>:<b>Cash On Hand</b>

}
                   {paymentType === 'Paypal' &&<span className='small text-muted'>**** 888*</span>

}
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
                    <p className="mb-1 small text-primary">{
  paymentType === 'Paypal' ? 'Refund' : 'Pay'
}
 amount</p>
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
          <MDBBtn color='info'>{paymentType === 'Paypal'?
"Refund":"Pay"}</MDBBtn>
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
      <Image thumbnail rounded className='w-100' src="https://images.ctfassets.net/lzny33ho1g45/6TK1TbLNZQ4iHr0PjdZS2Y/ffb5c5646b914435f10b085b012bc78d/zap-qr-1.png?w=1400" />
    </MDBContainer>
  )
}
