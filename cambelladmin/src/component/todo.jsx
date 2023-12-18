import {
  MDBListGroup,
  MDBListGroupItem,
  MDBCheckbox,
  MDBTooltip,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit'
import React, { useCallback, useMemo, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import EditTodo from '../pages/Booking/EditTodo'
import Swal from 'sweetalert2'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import {TaskById } from '../redux/Slice/Todo'
import {AlltodoTask } from '../redux/Slice/TaskList'
import { AllBookings } from '../redux/Slice/Booking'

export default function Todo ({
  taskid,
  status = 'pending',
  bookid,
  todoList = true
}) {
  const { task, createDate, dueDate, desc } = useSelector(state =>
    TaskById(state, taskid)
  )

  const [open, isopen] = useState(false)
  const toggle = useCallback(() => isopen(!open), [isopen, open])
  const valid = useMemo(() => {
    if (status === 'completed') return 1
    else return status === 'pending' && dueDate > new Date() ? 0 : -1
  }, [status, dueDate])
  const [statuschange, setstatuschange] = useState(valid > 0)
  const onChangeStatus = useCallback(() => {
    setstatuschange(!statuschange)
  }, [statuschange, setstatuschange])
  const onDelete = async () => {
    const val = await Swal.fire({
      title: 'Delete',
      text: 'Do you want to Delete This Task',
      icon: 'error',
      confirmButtonText: 'ok',
      confirmButtonColor: '#19b604',
      cancelButtonColor: '#f60909',
      showCancelButton: true
    })
    if (val.value) {
      try {
        const del = await axios.delete('/api/booking/todoTask', {
          data: {
            taskid,
            bookid
          }
        })
        toast.success('Successfully Deleted!')
      } catch (error) {
        toast.error('Failed To Delete Task!')
        console.error(error)
      }
    }
  }
  const taskDoc={
  task, createDate, dueDate, desc
}

  return (
    <>
      <MDBListGroup
        horizontal
        className='rounded-0 bg-transparent'
        onClick={toggle}
      >
        <MDBListGroupItem className='d-flex align-items-center ps-0 pe-3  rounded-0 border-0 bg-transparent'>
          <MDBCheckbox
            name='flexCheck'
            checked={statuschange}
            onChange={onChangeStatus}
            id='flexCheck'
            disabled={!todoList}
            aria-checked='mixed'
          />
        </MDBListGroupItem>
        <MDBListGroupItem className='px-3  d-flex align-items-center flex-grow-1 border-0 bg-transparent'>
          <p className='lead fw-normal mb-0'>{task}</p>
        </MDBListGroupItem>
        <MDBListGroupItem className='px-3  d-flex align-items-center border-0 bg-transparent'>
          <div
            className={`py-1 px-2 me-2 border ${
              valid > 0
                ? 'border-success'
                : valid === 0
                ? 'border-warning'
                : 'border-danger'
            } rounded-3 d-flex align-items-center bg-light`}
          >
            <p className='small mb-0'>
              <MDBTooltip
                tag='a'
                wrapperProps={{ href: '#!' }}
                title='Due on date'
              >
                {valid > 0 && (
                  <MDBIcon icon='hourglass' color='success' className='me-2' />
                )}
                {valid === 0 && (
                  <MDBIcon
                    fas
                    icon='hourglass-half'
                    color='warning'
                    className='me-2'
                  />
                )}
                {valid < 0 && (
                  <MDBIcon
                    icon='calendar-times'
                    color='danger'
                    className='me-2'
                  />
                )}
              </MDBTooltip>
              {dueDate}
            </p>
          </div>
        </MDBListGroupItem>
        <MDBListGroupItem className='ps-3 pe-0  rounded-0 border-0 bg-transparent'>
          <div className='d-flex flex-row justify-content-end mb-1'>
            <EditTodo taskDoc={taskDoc} />
            <MDBBtn color='link' onClick={onDelete}>
              <MDBTooltip
                tag='a'
                wrapperProps={{ href: '#!' }}
                title='Delete todo'
              >
                <MDBIcon fas icon='trash-alt' color='danger' />
              </MDBTooltip>
            </MDBBtn>
          </div>
          <div className='text-end text-muted'>
            <MDBTooltip
              tag='a'
              wrapperProps={{ href: '#!' }}
              title='Created date'
            >
              <p className='small text-muted mb-0'>
                <MDBIcon fas icon='info-circle' className='me-2' />
                {createDate}
              </p>
            </MDBTooltip>
          </div>
        </MDBListGroupItem>
      </MDBListGroup>
      {desc && (
        <Collapse in={open}>
          <div id='example-collapse-text'>
            {desc}
            <hr />
          </div>
        </Collapse>
      )}
    </>
  )
}


export function TaskList ()
{

  const Bookings = useSelector(AllBookings);
  const Tasks = [];
  Bookings.filter(ele => ele.bookDate === new Date().toDateString()).forEach(ele =>
  {
    Tasks.push({
      Task: ele.eventname,
      subtitle: "Today Booking",
      path: '/booking/' + ele.bookid
    });
  });
  Bookings.filter(
    ele => ele.eventDate === new Date().toDateString()
  ).forEach(ele =>
  {
    Tasks.push({
      Task: ele.eventname,
      subtitle: "Today Event",
      path: '/booking/' + ele.bookid
    });
  });
  const tasklist = [];
  useSelector(AlltodoTask).forEach(ele => ele.List.forEach(e => tasklist.push({ todoId: ele.todoID, ...e })));
  tasklist.filter(ele => ele.dueDate
    === new Date().toDateString()).forEach(ele =>
    {
      Tasks.push({
        Task: ele.task,
        subtitle: 'Today Task',
        path: '/booking/' + ele.todoId
      });

    });


  return (
    <MDBListGroup className='w-100' light>
      {
        Tasks.length < 0 ? Tasks.map(task => (<MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img
              src='https://mdbootstrap.com/img/new/avatars/8.jpg'
              alt=''
              style={{ width: '45px', height: '45px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='fw-bold mb-1'>{task.title}</p>
              <p className='text-muted mb-0 text-wrap w-25'>john.doe@gmail.com</p>
            </div>
          </div>
          <MDBBtn size='sm' href='#' rounded color='link'>
            See
          </MDBBtn>
        </MDBListGroupItem>)
        ) : <MDBListGroupItem className='d-flex justify-content-between align-items-center fw-bold'><span className='text-center'>No Event Today</span></MDBListGroupItem>

      }

    </MDBListGroup>
  );
}
