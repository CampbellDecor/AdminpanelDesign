import React, { useState, useEffect, useMemo } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { IncomeAnalyze, SmallHomeDonut } from '../component/Util/Graph'
import { SimpleHomeCalender } from '../component/Util/Calender'
import { NewAppoint } from '../component/Util/Table'
import { ListPanel } from '../component/Panels'
import { HomeCountPanel, EventPanel, PackPanel } from '../component/Home'
import { MDBListGroup, MDBListGroupItem, MDBBtn } from 'mdb-react-ui-kit'
export default function Home () {
  return useMemo(()=>(
    <Container fluid className='home'>
      <Row className='home-countpanel my-3'>
        <HomeCountPanel />
      </Row>
      <Row>
        <Col md={6} lg={9} className='home-maincontent'>
          <IncomeAnalyze />
          <NewAppoint />
          <Row className='justify-content-between'>
            <EventPanel />
            <PackPanel />
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
  ),[])
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
