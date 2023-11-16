import React, { useEffect, useMemo, useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTooltip
} from 'mdb-react-ui-kit'
import { Form } from 'react-bootstrap'
import Todo from '../../component/todo'
import AddToDo from './AddTodo'

export default function ToDoList ()
{

  const todo=[]

  const date = new Date('July 21, 2024 01:15:00')

  const Duration = useMemo(() => {
    const now = new Date()
    if (date.getFullYear() - now.getFullYear() > 0) {
      if (date.getMonth() - now.getMonth() > 0) {
        const day = date.getDate() - date.getDate()
        return <h5 className='text-center text-lead text-warning'>{ day > 0 ? `Just ${day} days More` : `Done ${day}`}</h5>
      } else {
        return <h5 className='text-center text-lead text-info'>More the One Month Done it</h5>
      }
    } else {
      return <h5 className='text-center text-lead text-info'>More Then ! year Done</h5>
    }
  }, [date])

  return (
    <MDBContainer className='py-5 w-75 todo'>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol>
          <MDBCard
            className='todolist'
          >
            <MDBCardBody className='p-2 px-md-5'>
              <p className='h3 text-center mt-1 mb-2 pb-1 text-primary'>
                <MDBIcon fas icon='check-square' className='me-1' />
                <u>My Todo-s</u>
              </p>
              <div>
                <MDBCard>
                  <MDBCardHeader>
                    <div className='w-100 d-flex justify-content-between'>
                      {Duration}

                      <MDBTooltip
                        tag='a'
                        wrapperProps={{ href: '#!' }}
                        title='Add New Task'
                      >
                        <AddToDo />
                      </MDBTooltip>
                    </div>
                  </MDBCardHeader>
                </MDBCard>
              </div>
              <hr className='my-2' />

              <div className='d-flex justify-content-end align-items-center mb-4 pt-2 pb-1'>
                <p className='small mb-0 me-2 text-muted'>Filter</p>
                <Form.Select>
                  <option>All</option>
                  <option value='complete'>Completed</option>
                  <option value='active'>Active</option>
                  <option value='pending'>Has due Date</option>
                </Form.Select>
                <p className='small mb-0 ms-4 me-2 text-muted'>Sort</p>
                <Form.Select>
                  <option value=''>Added Date</option>
                  <option value=''>Due Date</option>
                </Form.Select>
                <MDBTooltip
                  tag='a'
                  wrapperProps={{ href: '#!' }}
                  title='Ascending'
                >
                  <MDBIcon
                    fas
                    icon='sort-amount-down-alt'
                    className='ms-2'
                    style={{ color: '#23af89' }}
                  />
                </MDBTooltip>
              </div>
              {
                todo && todo?.map(task => (<Todo {...task} />))
}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}
