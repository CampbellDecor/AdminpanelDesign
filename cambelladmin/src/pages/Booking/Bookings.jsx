import React, { useCallback } from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import { TiArrowRightThick, TiArrowLeftThick } from 'react-icons/ti';
import Calender from 'react-calendar';
import { Col, Container, Nav, NavLink, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { MDBTooltip } from 'mdb-react-ui-kit';
import {BookingAnalyze } from '../../component/Util/Graph'

export default function Bookings ()
{
  const event = useLoaderData();
  const bookingsHandle = useCallback(({ date }) =>
  {
    const dayEvents = event.length > 0 ? event?.filter(ele => ele.eventDate === date.toLocaleDateString()) : [];

    return (
      <Container fluid className='events'>
        <Row className='event-row'>
          <Nav style={{textDecrotion:'none'}} className='events-set justify-content-around'>
            {
              dayEvents.map(ele => (
                <Nav.Item className='events-set_one'>
                  <MDBTooltip tag='a' wrapperProps={{ href: '#!' }} title={`booked at ${ele.bookDate}`}>
                  <NavLink style={{textDecrotion:'none'}} href={`/booking/${ele.bookid}`} className={`${ele.status === 'pending'
                    ? 'text-warning'
                    : ele.status === 'active'
                      ? 'text-success'
                      : 'text-danger'
                    } events-set_one--name`}>{ele.eventname}</NavLink>
                    </MDBTooltip>
                </Nav.Item>
              ))
            }



          </Nav>


        </Row>

      </Container>
    );
  }, []);
  return  (
    <Container fluid className='min-vh-100 booking'>
      <Row className='h-100 sheduler'>
        <Col>

          <Calender
            className="w-100 h-100 simple-calender"
            tileClassName="simple-calender--tile"
            prevLabel={<BsFillCaretLeftFill className="icon" />}
            nextLabel={<BsFillCaretRightFill className="icon" />}
            prev2Label={<TiArrowLeftThick className="icon" />}
            next2Label={<TiArrowRightThick className="icon" />}
            tileContent={bookingsHandle}
          />
        </Col>
      </Row>
      <Row className='h-100'>
        <BookingAnalyze date={new Date()}/>
      </Row>
    </Container>
  );
}
