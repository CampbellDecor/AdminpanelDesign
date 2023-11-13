// @ts-nocheck
import React, { useCallback, useEffect, useState, useMemo } from 'react'
import { Container, Form, Pagination, Row, Button, Col } from 'react-bootstrap'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit'
import { UserRows } from '../../component/User'
import { useUserStore } from '../../redux/UserStore'
import Loading from '../Bugs/FetchedLoading'
export default function Users () {
  const {
    getUser,
    getBlockUser,
    userData,
    userDispatcher,
    getunBlockUser
  } = useUserStore()

  const [currentPage, setCurrentPage] = useState(1)

  const [itemsPerPage] = useState(8)

  const { result, loading, users, block, unblock } = userData

  const indexOfLastItem = useMemo(() => currentPage * itemsPerPage, [
    currentPage,
    itemsPerPage
  ])

  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = useMemo(
    () => users?.slice(indexOfFirstItem, indexOfLastItem),
    [indexOfFirstItem, indexOfLastItem, users]
  )
  const paginate = useCallback(pageNumber => setCurrentPage(pageNumber), [
    setCurrentPage
  ])

  const SlectOnchange = useCallback(e => {
    alert(indexOfLastItem)
  }, [])

  useEffect(() => {
    userDispatcher(getUser())
  }, [])
  return (
    <Container className='position-relative min-vh-100'>
      <Row className='pb-3'>
        <Col md='5'>
          <Form.Select className='w-50' onChange={SlectOnchange}>
            <option value='*'>All</option>
            <option value='hindu'>Hindu</option>
            <option value='christian'>Christian</option>
            <option value='muslim'>Muslim</option>
            <option value='buddist'>Buddist</option>
          </Form.Select>
        </Col>
        <Col className='text-md-right d-flex justify-content-end' md='7'>
          <div className='w-50 mr-0'>
            <Form.Check
              inline
              label='block'
              name='block'
              type='checkbox'
              onChange={() => {
                block
                  ? userDispatcher(getUser())
                  : userDispatcher(getBlockUser())
              }}
              checked={block}
            />
            <Form.Check
              inline
              checked={unblock}
              label='unblock'
              name='block'
              type='checkbox'
              onChange={() => {
                unblock
                  ? userDispatcher(getUser())
                  : userDispatcher(getunBlockUser())
              }}
            />

            <Button as='a' href='/chats/normal'>
              go To Chats
            </Button>
          </div>
        </Col>
      </Row>
      {loading ? (
        <Loading />
      ) : (
        <MDBTable align='middle'>
          <MDBTableHead>
            <tr>
              <th scope='col'>User</th>
              <th scope='col'>Info</th>
              <th scope='col'>Status</th>
              <th scope='col'>Bookings</th>
              <th scope='col'>Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {result === 'fetched' ? (
              currentItems.map((userdataset, index) => (
                <UserRows {...userdataset} key={index} />
              ))
            ) : (
              <tr>
                <td colSpan={5}>
                  <Container
                    fluid
                    className='vh-75 d-flex w-100 align-item-center justify-content-center'
                  >
                    <Loading/>
                  </Container>
                </td>
              </tr>
            )}
          </MDBTableBody>
          <MDBTableBody>
            <tr>
              <td colSpan={5}>
                <div className='w-100 d-flex justify-content-center align-items-center'>
                  {result === 'fetched' && users.length >= itemsPerPage && (
                    <Pagination>
                      {Array.from({
                        length: Math.ceil(users?.length / itemsPerPage)
                      }).map((_, index) => (
                        <Pagination.Item
                          key={index}
                          active={index + 1 === currentPage}
                          onClick={() => paginate(index + 1)}
                        >
                          {index + 1}
                        </Pagination.Item>
                      ))}
                    </Pagination>
                  )}
                </div>
              </td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      )}
    </Container>
  )
}
