import React from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import Admin from '../../component/Admin'
import { BsPersonFillAdd } from 'react-icons/bs'
import { useAppContext } from '../../contexts/AppContext'
import {AdminIDs} from '../../redux/Slice/Admins'
import { useSelector } from 'react-redux'





export default function Admins ()
{
  const { Appname } = useAppContext()
  const admins =useSelector(AdminIDs)




  return (
    <Container className='vh-100 w-100 adminshow'>
      <Row className='adminshow-action'>
        <Button
          className='adminshow-action_add'
          as='a'
          href='/admins/add?action=add'
        >
          <BsPersonFillAdd className='adminshow-action_add--btn' />
        </Button>

        <h3>{Appname} Admins</h3>
      </Row>
        <Row className='mh-75'>
          { (
            admins?.length > 0 &&
            admins?.map(aid => (
              <Admin key={aid} aid={aid} />
            ))
          )}
        </Row>
    </Container>
  )
}
