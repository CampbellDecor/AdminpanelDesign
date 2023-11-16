import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'react-bootstrap'
import SearchOption from '../../component/Util/SearchPanel'
import Chatting, { ChatPanel, ChatList } from '../../component/Chats'

export default function ChatApp () {


  return (
    <section className='vh-100'>
      <Container className='py-3 h-100'>
        <Row className='h-100 mt-0'>
          <Col md={12} className='h-100'>
            <Card className='h-100 shadow-lg chat'>
              <CardBody className='h-100'>
                <Row className='h-100'>
                  <Col
                    md={6}
                    lg={5}
                    xl={4}
                    className='mb-4 mb-md-0 chat-users h-100'
                  >
                    <div className='p-3 h-100'>
                      <SearchOption />
                      <div className='userlist'>
                        <ChatList />
                      </div>
                    </div>
                  </Col>
                  <div className='col-md-6 col-lg-7 col-xl-8 position-relative chatting'>
                    <ChatPanel />
                    <Chatting />
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
