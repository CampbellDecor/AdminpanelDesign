import React, { useEffect } from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import Admin from '../../component/Admin'
import { useAdminStore } from '../../redux/AdminStore'
import FetchedError from '../Bugs/FetchedError'
import FetchedLoading from '../Bugs/FetchedLoading'
import { BsPersonFillAdd } from 'react-icons/bs'
import { useAppContext } from '../../contexts/AppContext'
export default function Admins () {
  const { getadmin, Admindispatcher, Admins } = useAdminStore()
  const { Appname } = useAppContext()
  const { loading, result, admins } = Admins
  useEffect(() => {
    Admindispatcher(getadmin())
  }, [])
  return (
    <Container className='vh-100 w-100 adminshow'>
      <Row className='adminshow-action'>
        <Button className='adminshow-action_add' as='a' href='/admins/add'>
          <BsPersonFillAdd className='adminshow-action_add--btn' />
        </Button>

        <h3>{Appname} Admins</h3>
      </Row>
      {loading ? (
        <FetchedLoading />
      ) : (
        <Row className='mh-75'>
          {result === 'fetched' ? (
            admins.map((admindata, index) => (
              <Admin key={index} {...admindata} />
            ))
          ) : (
            <FetchedError data='Admins' />
          )}
        </Row>
      )}
    </Container>
  )
}
