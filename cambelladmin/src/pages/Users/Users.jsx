// @ts-nocheck
import React, { useCallback, useState, useMemo } from 'react'
import { Container, Pagination, Row} from 'react-bootstrap'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit'
import { UserRows } from '../../component/User'
import {UserIds} from '../../redux/Slice/User'
import { useSelector } from 'react-redux';
import { UserAnalysis } from '../../component/Util/Graph';
import { useAppContext } from '../../contexts/AppContext'

export default function Users ()
{
  const { Appname } = useAppContext()

  const users = useSelector(UserIds);
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(8)
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


  return (
    <Container className='position-relative min-vh-100'>
      <h3>{
  Appname+" "
} Users
</h3>
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
          {
            currentItems.map(uid => (
              <UserRows uid={uid} key={uid} />
            ))
          }
          </MDBTableBody>
          <MDBTableBody>
            <tr>
              <td colSpan={5}>
                <div className='w-100 d-flex justify-content-center align-items-center'>
                  {users.length >= itemsPerPage && (
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
      <Row className='mt-3'>
        <UserAnalysis/>
      </Row>
    </Container>
  )
}
