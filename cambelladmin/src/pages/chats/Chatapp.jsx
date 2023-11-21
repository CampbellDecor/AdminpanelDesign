import React,{useEffect} from 'react'
import { Container, Row, Col, Card, CardBody } from 'react-bootstrap'
import SearchOption from '../../component/Util/SearchPanel'
import Chatting, { ChatPanel, ChatList } from '../../component/Chats'
import {
  getLocalStorage,
  changeLocalStorage
} from '../../function/LocalStorageHandler'
import { useDispatch } from 'react-redux'
import { useUserContext } from '../../contexts/UserContext'
import { getOneSAdminChats } from '../../redux/Thunks/SuperAdminChats'

export default function ChatApp ()
{
  const Dispatcher = useDispatch()
  const chatlist = getLocalStorage('chat')
  const { currentuser } = useUserContext()

useEffect(() => {
  if (chatlist) {
    const id = getLocalStorage('chat')
    Dispatcher(getOneSAdminChats(id))
  } else {
    changeLocalStorage('username', currentuser?.username);
    changeLocalStorage('chat', currentuser?.uid)
    Dispatcher(getOneSAdminChats(currentuser?.uid))
  }
}, [])


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
