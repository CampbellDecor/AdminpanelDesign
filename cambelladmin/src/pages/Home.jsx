import React, { useMemo } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { IncomeAnalyze, SmallHomeDonut,SmaallPieForHome,SmallBookingAnalysis
 } from '../component/Util/Graph'
import { SimpleHomeCalender } from '../component/Util/Calender'
import { NewAppoint } from '../component/Util/Table'
import { HomeCountPanel, EventPanel, PackPanel } from '../component/Home'
import { TaskList } from '../component/todo'
export default function Home () {
  return (
      <Container fluid className='home'>
        <Row className='home-countpanel my-3'>
          <HomeCountPanel />
        </Row>
        <div className='home-maincontent'>
          <Row>
            <Col md={6} lg={9}>
              <IncomeAnalyze />
            </Col>

            <Col md={6} lg={3}>
              <SimpleHomeCalender />
            </Col>
          </Row>
          <Row>
            <Col md={6} lg={9}>
              <NewAppoint />
            </Col>
          <Col md={6} lg={3}>
            <h5> Today </h5>
              <TaskList />
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={9}>
              <Row>
                <Col>
                  <SmallHomeDonut />
                </Col>
                <Col>
                  <SmallBookingAnalysis/>
                </Col>
              </Row>
              <Row>
  <Col>
    <SmallHomeDonut />
  </Col>
  <Col>
    <SmaallPieForHome />
  </Col>
</Row>

            </Col>
            <Col md={12} lg={3}>
              <EventPanel />
              <PackPanel />
            </Col>
          </Row>
        </div>

        <Row>
          <Col md={6} lg={9}>
            <Row className='justify-content-between'>
              <Col></Col>
            </Row>
          </Col>
          <Col md={6} lg={3} className='sidebar-right'>
            <div className='reveiwpanel my-3'></div>
          </Col>
        </Row>
      </Container>
    )
}
