import React, { useEffect, useState } from 'react';
import {BsFillCaretLeftFill,BsFillCaretRightFill} from "react-icons/bs";
import {TiArrowRightThick,TiArrowLeftThick} from "react-icons/ti";
import Calender from 'react-calendar';
import { Badge, Container, Spinner } from 'react-bootstrap';
import axios from 'axios'
import '../../../node_modules/react-calendar/dist/Calendar.css';
export function SimpleHomeCalender ()
{
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  useEffect(() =>
  {
    setLoading(true);
    axios.get('/api/booking')
      .then(result =>
      {
        setEvents(result.data)
      })
      .catch(error =>
      {
        console.error(error);
      });
    setLoading(false);
  }, []);
  return loading ? (
    <Container fluid className='h-100'>
        <Spinner animation='border' variant='secondary' />
      </Container>
    ):(
            <Calender
            className="w-100 simple-calender"
            tileClassName="simple-calender--tile"
            prevLabel={<BsFillCaretLeftFill className="icon"/>}
            nextLabel={<BsFillCaretRightFill  className="icon"/>}
            prev2Label={<TiArrowLeftThick  className="icon"/>}
        next2Label={<TiArrowRightThick className="icon" />}
        tileContent={({ date }) =>
        {
          const evcount=events.find(ele=>ele.eventdate===date.toLocaleDateString());
      return (
        <span className="w-100 d-flex justify-content-center align-items-center event-count">{evcount && <Badge pill className="event-count--num event-count--num--1">{evcount.count}</Badge>}</span>
    )


            }}
            />

    )

}
