import React, { useEffect } from 'react'
import { useUserContext } from '../contexts/UserContext'
import { Chatuser, Message, Reply } from '../component/Chats'
import { BiSearchAlt } from 'react-icons/bi';

import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  InputGroup,
  Form
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {useAdminChatStore } from '../redux/AdminChatStore';
import { useLoaderData } from 'react-router-dom';
export default function ChatApp ()
{
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
<SearchOption/>
                      <ChatList />
                       </div>
                  </Col>
                  <div className='col-md-6 col-lg-7 col-xl-8 position-relative chatting'>
                   <ChatPanel/>
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

function Chatting () {
  const { currentuser } = useUserContext()
  const { profile, username } = currentuser
  const onTyping = () => {}

  return (
    <div className='text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2 position-absolute bg-body-tertiary w-100 bottom-0 '>
      <img
        src={
          profile ??
          'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp'
        }
        alt={username}
        style={{ width: '40px', height: '100%' }}
      />
      <input
        type='text'
        className='form-control form-control-lg shadow shadow-1-soft'
        id='exampleFormControlInput2'
        placeholder='Type message ...'
        onChange={onTyping}
      />
      <Button className='ms-3'>
        <i className='fas fa-paper-plane' />
      </Button>
    </div>
  )
}

function SearchOption ()
{
  const {getadminchatHints} = useAdminChatStore('thunk');
  const { loading, hints, result } = useSelector(state => state.adminchat);
  const Dispatcher = useDispatch();
  const onSearchChange = async e =>
  {
    Dispatcher(getadminchatHints());
    if (!loading)
    {
      if (result === 'fetched')
      {
        console.log(hints);
      }
    }
  }
  return (
<InputGroup className='input-group chat-users_search rounded mb-3 shadow py-2'>
  <Form.Control
    rounded
    type='search'
    placeholder='Search...'
    className='chat-users_search--input border-0'
    list='adminchatlist'
    onChange={onSearchChange}
  />
  <datalist id='adminchatlist'>
    <option value={3}></option>
  </datalist>
  <InputGroup.Text className='border-0 chat-users_search--btn py-3 px-1'>
    <BiSearchAlt className='chat-users_search--btn__icon' />
  </InputGroup.Text>
</InputGroup>

  )
}

function ChatList ()
{
  const loader = useLoaderData();
  return (
     <div className='userlist'>
                        <ul className='list-unstyled h-100'>
                          {loader.map(chat => (
                            <Chatuser {...chat} />
                          ))}
                        </ul>
                      </div>

  )
}

function ChatPanel ({senderid})
{
  const { chats, loading, result } = useSelector(state => state.adminchat);
const { getadminchats
 } = useAdminChatStore('thunk')
  const Dispatcher = useDispatch();
  useEffect(
    () =>
    {
      Dispatcher(getadminchats("kDEgILWPfdTvq2kMHLlr"))
    },[Dispatcher]
  )

  return loading?<p>..........</p>:(result!=='fetched'?<h1>eerewre</h1>:
<div className='pt-3 pe-3 h-100' data-mdb-perfect-scrollbar='true'>
      {chats?.map(chat => (
        chat.type === "sent" ? (<Message {...chat} />):(<Reply {...chat} />)
  ))}
</div>

  )
}
