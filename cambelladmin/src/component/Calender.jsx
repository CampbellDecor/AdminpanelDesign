import React,{useState} from 'react';
import {BsFillCaretLeftFill,BsFillCaretRightFill} from "react-icons/bs";
import {TiArrowRightThick,TiArrowLeftThick} from "react-icons/ti";
import Calender from 'react-calendar';
import {Badge} from 'react-bootstrap';
import '../../node_modules/react-calendar/dist/Calendar.css';
export function SimpleHomeCalender (){
    const [events, setEvents] = useState([
        { date: new Date('2023-08-08'), title: 'Event 1' },
        { date: new Date('2023-08-08'), title: 'Event 2' },
        { date: new Date('2023-08-09'), title: 'Event 3' },
        // Add more events
      ]);
    return(
            <Calender
            className="w-100 simple-calender"
            tileClassName="simple-calender--tile"
            prevLabel={<BsFillCaretLeftFill className="icon"/>}
            nextLabel={<BsFillCaretRightFill  className="icon"/>}
            prev2Label={<TiArrowLeftThick  className="icon"/>}
            next2Label={<TiArrowRightThick  className="icon"/>}
            tileContent={(date)=>{
              
                  return  (
                    <span className="w-100 d-flex justify-content-center align-items-center event-count"><Badge pill className="event-count--num event-count--num--1">6</Badge></span>
                    
                  );
            }}
            />

    )

}