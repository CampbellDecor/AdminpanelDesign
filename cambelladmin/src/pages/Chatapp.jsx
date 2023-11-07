import React from 'react'

import {
  Container,
  Row,
  Col,
  Card,
  CardBody
} from 'react-bootstrap'

import { useLoaderData } from 'react-router-dom';
import Chatting, { ChatPanel } from '../component/ChatComponent';
import SearchOption from '../component/Util/SearchPanel'
import { Chatuser } from '../component/Chats'

export default function ChatApp ()
{
  const loader = useLoaderData();
  return (
    <section className='vh-100 mt-0'>
      <Container className='py-3 h-100 mt-0'>
        <Row className='h-100 mt-0'>
          <Col md={12} className='h-100 mt-0'>
            <Card className='h-100 shadow-lg mt-0 chat'>
              <CardBody className='h-100'>
                <Row className='h-100'>
                  <Col
                    md={6}
                    lg={5}
                    xl={4}
                    className='mb-4 mb-md-0 chat-users h-100'>
                    <div className='p-3 h-100'>
                      <SearchOption/>
                      <div className='userlist'>
  <ul className='list-unstyled h-100'>
    {loader?.map(chat => (
      <Chatuser {...chat} />
    ))}
  </ul>
</div>

                       </div>
                  </Col>
                  <div className='col-md-6 col-lg-7 col-xl-8 position-relative chatting'>
                   <ChatPanel/>
                    <Chatting/>
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
