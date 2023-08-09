import React,{useState} from 'react';
import {Container,Row,Col,Accordion} from 'react-bootstrap';
import {SimpleHomeCalender} from '../component/Calender';
import {SmallHomeDonut,IncomeAnalyze} from '../component/Graph';
import {FaUsers,FaCoins,FaCalendarDay} from "react-icons/fa";
import {TbPackages} from "react-icons/tb";
import {Link} from "react-router-dom";
import {NewAppoint} from '../component/Table';
export default function Home (){
           const [recentEvents,setrecentEvents]=useState([
            {Title:"Weeding",
            body:"dfdsfdsdfd",
            date:"12-09-2023",
            time:"12:30",
            id:0
        }, {Title:"Weeding",
        body:"dfdsfdsdfd",
        date:"12-09-2023",
        time:"12:30",
        id:1
    }
           ]);
    return(
       <Container fluid className="home">
        <Row className='home-countpanel my-3'>
            <div className="w-100  d-flex justify-content-around flex-sm-nowrap flex-wrap">

            <CountComponents {...{index:1,title:"Users",idenity:<FaUsers  className="icon"/>,count:10}}/>
                     <CountComponents {...{index:1,title:"Earn",idenity:<FaCoins className="icon"/>,count:10}}/>
                    <CountComponents {...{index:1,title:"Booking",idenity:<FaCalendarDay  className="icon" />,count:10}}/>
                    <CountComponents {...{index:1,title:"Packages",idenity:<TbPackages  className="icon" />,count:10}}/> 
            </div>
                    
        </Row>
            <Row>
                <Col md={6} lg={9} className='home-maincontent'>
                    <IncomeAnalyze/>
                    <NewAppoint/>
                </Col> 
                <Col md={6} lg={3} className='sidebar-right'>
                <SimpleHomeCalender/>
                <SmallHomeDonut
                labels={["unKnown","Hindu"]}
                data={[10,4]}
                />
                <div className="my-2">
                    <h3 className="text-center">Recent events</h3>
                <Accordion flush>
                    {
                        recentEvents.map(event=>(< RecentBooking {...event}/>))
                    }
                </Accordion>
  
                </div>
                
                </Col>
            </Row>
       </Container>
       
    )

}


function RecentBooking({id,Title,body,date,time}){
    return(
        <Accordion.Item eventKey={id} className="recent-event">
        <Accordion.Header>{Title}</Accordion.Header>
        <Accordion.Body>
          {body}
        </Accordion.Body>
      </Accordion.Item>
    )
}
function CountComponents({index,idenity,title,count}){
    return (
      <div className='d-flex  flex-md-row flex-column align-items-center justify-content-lg-around  shadow rounded mx-2 my-2 py-4 my-sm-0 py-sm-2 py-md-5 border-1 home-countpanel-componet'  key={index}>
        <div className="home-countpanel-componet--identiy">
            {idenity}
        </div>
        <div className="home-countpanel-componet--des text-center">
        <Link><h5 className='fw-bolder'>{title}</h5></Link>
           <h6>{count}</h6> 
        </div>
      </div>
    )
  }