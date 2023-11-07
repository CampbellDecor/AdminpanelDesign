import React, { useEffect, useState } from 'react'
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs'
import { TiArrowRightThick, TiArrowLeftThick } from 'react-icons/ti'
import Calender from 'react-calendar'
import '../../../node_modules/react-calendar/dist/Calendar.css'
import { Col, Container, Row } from 'react-bootstrap';

export default function Bookings() {
  return (
    <Container fluid className='min-vh-100 booking'>
      <Row className='h-100 sheduler'>
<Col className='h-100'>

<Calender
            className="w-100 h-100 simple-calender"
            tileClassName="simple-calender--tile"
            prevLabel={<BsFillCaretLeftFill className="icon"/>}
            nextLabel={<BsFillCaretRightFill  className="icon"/>}
            prev2Label={<TiArrowLeftThick  className="icon"/>}
        next2Label={<TiArrowRightThick className="icon" />}
          />
          </Col>
           </Row>
    </Container>
  )
}
