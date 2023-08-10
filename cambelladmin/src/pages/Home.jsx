import React from 'react';
import {Container} from 'react-bootstrap';

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
    }        ]);
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
                    <Row className="justify-content-between">
                    <ListOfContent {...{title:"Cambell Events",items:[
                        {
                            content:"Mankalaya",count:3,
                            url:"https://vb-events.com/wp-content/uploads/2021/12/hands-of-bride-and-groom.jpg"
                        },
                        {
                            content:"Mankalaya",count:3,url:"https://vb-events.com/wp-content/uploads/2021/12/hands-of-bride-and-groom.jpg"
                        },{
                            content:"Mankalaya",count:3,url:"https://vb-events.com/wp-content/uploads/2021/12/hands-of-bride-and-groom.jpg"
                        },
                        {
                            content:"Mankalaya",count:3,url:"https://vb-events.com/wp-content/uploads/2021/12/hands-of-bride-and-groom.jpg"
                        }
                    ]}}/>
                     <ListOfContent {...{title:"Cambell Services",items:[
                           {
                            content:"Foods",count:3,
                            url:"https://previews.123rf.com/images/lelik83/lelik831702/lelik83170200215/71611051-catering-wedding-buffet-food-table.jpg"
                        },
                        {
                            content:"Food",count:3,url:"https://previews.123rf.com/images/lelik83/lelik831702/lelik83170200215/71611051-catering-wedding-buffet-food-table.jpg"
                        },{
                            content:"Food",count:3,url:"https://previews.123rf.com/images/lelik83/lelik831702/lelik83170200215/71611051-catering-wedding-buffet-food-table.jpg"
                        },
                        {
                            content:"Food",count:3,url:"https://previews.123rf.com/images/lelik83/lelik831702/lelik83170200215/71611051-catering-wedding-buffet-food-table.jpg"
                        }
                    ]}}/>
                    </Row>
                </Col> 
                <Col md={6} lg={3} className='sidebar-right'>
                <SimpleHomeCalender/>
                <SmallHomeDonut
                labels={["unKnown","Hindu"]}
                data={[10,4]}
                />
                <div className='reveiwpanel my-3'>
                <ReveiwPanel/>
                </div>
                
                </Col>
            </Row>
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

  function ListOfContent({title,items}){
    return(
        <Col md={5} className="my-3 mx-3 count-panel">
            <h5>Events Bookings</h5>
            <Stack gap={2}>
                {
                    items.map(item=>
                        (
                            <div className="d-flex justify-content-between count-panel-component border p-2 rounded rounded-2">
                                <div className="d-flex count-panel-component--name bg-image hover-zoom">
                                    <Image className="count-panel-component--name--img" src={item?.url}/>
                                <h6 className="count-panel-component--name--text text-muted ms-2" >{item?.content}</h6>
                                    </div>
                                    <div><Badge pill className="count-panel-component--count my-2">{item?.count}</Badge></div>
                                
                            </div>
                        )
                    )
                }
            </Stack>
        </Col>
    )
  }

  function ReveiwPanel(){
    const [reviews,setReveiw]=useState([]);
    useEffect(()=>{
        setReveiw(
            [{
                user:{
                    uid:1,
                    profile:"",
                    username:""
                },
                reveiw:{
                    revid:2,
                    reviw:"goog"
                }
            },
            {
                user:{
                    uid:1,
                    profile:"https://mdbootstrap.com/img/new/avatars/7.jpg",
                    username:"ThanuMahee"
                },
                reveiw:{
                    revid:2,
                    reviw:"goog"
                }
            },
            {
                user:{
                    uid:1,
                    profile:"",
                    username:""
                },
                reveiw:{
                    revid:2,
                    reviw:"goog"
                }
            }

            ]
        )
    },[]);
          return (
            <MDBListGroup className='w-100' light>
                {
                    reviews.map((reveiw)=>(
                        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center'>
                          <img
                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                          />
                          <div className='ms-3'>
                            <p className='fw-bold mb-1'>John Doe</p>
                            <p className='text-muted mb-0 text-wrap w-25'>john.doe@gmail.com</p>
                          </div>
                        </div>
                        <MDBBtn size='sm' rounded color='link'>
                          View
                        </MDBBtn>
                      </MDBListGroupItem>
                    ))
                }
            
              
              
            </MDBListGroup>
          );
        }
 