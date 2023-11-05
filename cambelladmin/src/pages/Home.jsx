import React, { useState, useEffect, useReducer } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { IncomeAnalyze, SmallHomeDonut } from '../component/Util/Graph'
import { SimpleHomeCalender } from '../component/Util/Calender'
import { NewAppoint } from '../component/Util/Table'
import { CountPanel, ListPanel } from '../component/Panels'
import { MDBListGroup, MDBListGroupItem, MDBBtn } from 'mdb-react-ui-kit'
import { FaCalendarDay, FaUsers, FaCoins } from 'react-icons/fa'
import { TbPackages } from 'react-icons/tb'
import axios from 'axios';

const countReducer = (state,action) =>
{
    switch (action.type)
    {
        case "APICALL": {
            return action.payload
        }
        default: return state;
    }
}
export default function Home ()
{
    const { countpanel, setCountpanel } = useReducer(countReducer, {
        loading: false,
        users: 0,
        booking: 0,
        Packages: 0,
        payment: 0,
    });
    useEffect(() =>
    {
        axios.get('/api/users/count')
            .then(result =>
            {

            }).catch(error =>
            {
                console.error(error);
            })


    }, [countpanel]);
  return (
    <Container fluid className='home'>
      <Row className='home-countpanel my-3'>
        <div className='w-100  d-flex justify-content-around flex-sm-nowrap flex-wrap'>
          <CountPanel
            {...{
              title: 'Users',
              idenity: <FaUsers className='icon' />,
                          path: '/users',
              count:countpanel?.users
            }}
          />
          <CountPanel
            {...{
              title: 'Earn',
              idenity: <FaCoins className='icon' />,
              count: countpanel?.payment,
              path: '/users'
            }}
          />
          <CountPanel
            {...{
              title: 'Booking',
              idenity: <FaCalendarDay className='icon' />,
              count: countpanel?.booking,
              path: '/users'
            }}
          />
          <CountPanel
            {...{
              title: 'Packages',
              idenity: <TbPackages className='icon' />,
              count: countpanel?.Packages,
              path: '/users'
            }}
          />
        </div>
      </Row>
      <Row>
        <Col md={6} lg={9} className='home-maincontent'>
          <IncomeAnalyze />
          <NewAppoint />
          <Row className='justify-content-between'>
            <ListPanel
              {...{
                title: 'Cambell Events',
                items: [
                  {
                    content: 'Mankalaya',
                    count: 3,
                    url:
                      'https://vb-events.com/wp-content/uploads/2021/12/hands-of-bride-and-groom.jpg'
                  },
                  {
                    content: 'Mankalaya',
                    count: 3,
                    url:
                      'https://vb-events.com/wp-content/uploads/2021/12/hands-of-bride-and-groom.jpg'
                  },
                  {
                    content: 'Mankalaya',
                    count: 3,
                    url:
                      'https://vb-events.com/wp-content/uploads/2021/12/hands-of-bride-and-groom.jpg'
                  },
                  {
                    content: 'Mankalaya',
                    count: 3,
                    url:
                      'https://vb-events.com/wp-content/uploads/2021/12/hands-of-bride-and-groom.jpg'
                  }
                ]
              }}
            />
            <ListPanel
              {...{
                title: 'Cambell Services',
                items: [
                  {
                    content: 'Foods',
                    count: 3,
                    url:
                      'https://previews.123rf.com/images/lelik83/lelik831702/lelik83170200215/71611051-catering-wedding-buffet-food-table.jpg'
                  },
                  {
                    content: 'Food',
                    count: 3,
                    url:
                      'https://previews.123rf.com/images/lelik83/lelik831702/lelik83170200215/71611051-catering-wedding-buffet-food-table.jpg'
                  },
                  {
                    content: 'Food',
                    count: 3,
                    url:
                      'https://previews.123rf.com/images/lelik83/lelik831702/lelik83170200215/71611051-catering-wedding-buffet-food-table.jpg'
                  },
                  {
                    content: 'Food',
                    count: 3,
                    url:
                      'https://previews.123rf.com/images/lelik83/lelik831702/lelik83170200215/71611051-catering-wedding-buffet-food-table.jpg'
                  }
                ]
              }}
            />
          </Row>
        </Col>
        <Col md={6} lg={3} className='sidebar-right'>
          <SimpleHomeCalender />
          <SmallHomeDonut labels={['unKnown', 'Hindu']} data={[10, 4]} />
          <div className='reveiwpanel my-3'>
            <ReveiwPanel />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

function ReveiwPanel () {
  const [reviews, setReveiw] = useState([])
  useEffect(() => {
    setReveiw([
      {
        user: {
          uid: 1,
          profile: '',
          username: ''
        },
        reveiw: {
          revid: 2,
          reviw: 'goog'
        }
      },
      {
        user: {
          uid: 1,
          profile: 'https://mdbootstrap.com/img/new/avatars/7.jpg',
          username: 'ThanuMahee'
        },
        reveiw: {
          revid: 2,
          reviw: 'goog'
        }
      },
      {
        user: {
          uid: 1,
          profile: '',
          username: ''
        },
        reveiw: {
          revid: 2,
          reviw: 'goog'
        }
      }
    ])
  }, [])
  return (
    <MDBListGroup className='w-100' light>
      {reviews.map(reveiw => (
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
              <p className='text-muted mb-0 text-wrap w-25'>
                john.doe@gmail.com
              </p>
            </div>
          </div>
          <MDBBtn size='sm' rounded color='link'>
            View
          </MDBBtn>
        </MDBListGroupItem>
      ))}
    </MDBListGroup>
  )
}
