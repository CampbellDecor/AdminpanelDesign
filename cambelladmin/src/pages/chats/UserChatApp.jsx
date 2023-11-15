import React, { useEffect } from 'react'
import { Container, Row, Col, Card, CardBody } from 'react-bootstrap'
import SearchOption from '../../component/Util/SearchPanel'
import { useUserChatStore } from '../../redux/ChatStore'
import { getLocalStorage } from '../../function/LocalStorageHandler'
import Chatting, { Chatuser, Message, Reply } from '../../component/Chats'
export default function ChatApp () {
  const {
    getUserChatList,
    UserChatDispatcher,
    userChatList,
    userChatsall,
    getuChats
  } = useUserChatStore()
  const { chatslist } = userChatList
  const { chats } = userChatsall
  useEffect(() => {
    UserChatDispatcher(getUserChatList()).then(res => {
      const chatsave = getLocalStorage('chat')
      UserChatDispatcher(getuChats(chatsave))
    })
  }, [UserChatDispatcher, getUserChatList])

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
                    className='mb-4 mb-md-0 chat-users h-100'
                  >
                    <div className='p-3 h-100'>
                      <SearchOption />
                      <div className='userlist'>
                        <ul className='list-unstyled h-100'>
                          {chatslist?.map(chat => (
                            <Chatuser {...chat} isAdmin={false} />
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <div className='col-md-6 col-lg-7 col-xl-8 position-relative chatting'>
                    <div
                      className='py-3 pe-3 h-100'
                      data-mdb-perfect-scrollbar='true'
                    >
                      {chats?.length > 0 &&
                        chats.map(ele =>
                          ele.type === 'sent' ? (
                            <Message {...ele} />
                          ) : (
                            <Reply {...ele} />
                          )
                        )}
                    </div>

                    <Chatting
                      isAdmin={false}
                      aid={chats?.length > 0 ? chats[0].uid : 0}
                      userdata={chats?.length > 0 ? chats[0].username : ''}
                    />
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